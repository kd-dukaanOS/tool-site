param(
  [Parameter(Mandatory=$true)][string]$PatchFile
)

function Normalize([string]$s) {
  return $s -replace "`r`n", "`n"
}

function Diagnose-Mismatch($fileLines, $findLines, $label) {
  # Anchor on the first line of the find-block, try every occurrence in the file,
  # and report whichever occurrence matches the longest run of subsequent lines.
  $anchor = $findLines[0].Trim()
  $candidates = for ($i = 0; $i -lt $fileLines.Count; $i++) {
    if ($fileLines[$i].Trim() -eq $anchor) { $i }
  }

  if (-not $candidates -or $candidates.Count -eq 0) {
    Write-Host "    -> First line of block not found anywhere in file:" -ForegroundColor DarkYellow
    Write-Host "       expected: $anchor" -ForegroundColor DarkYellow
    return
  }

  $best = $null
  foreach ($start in $candidates) {
    $matchLen = 0
    for ($j = 0; $j -lt $findLines.Count; $j++) {
      $fileIdx = $start + $j
      if ($fileIdx -ge $fileLines.Count) { break }
      if ($fileLines[$fileIdx].Trim() -eq $findLines[$j].Trim()) { $matchLen++ } else { break }
    }
    if (-not $best -or $matchLen -gt $best.matchLen) {
      $best = @{ start = $start; matchLen = $matchLen }
    }
  }

  $divergeIdx = $best.start + $best.matchLen
  Write-Host "    -> Closest match: line $($best.start + 1), matched $($best.matchLen)/$($findLines.Count) lines" -ForegroundColor DarkYellow
  if ($divergeIdx -lt $fileLines.Count -and $best.matchLen -lt $findLines.Count) {
    Write-Host "       expected: $($findLines[$best.matchLen].Trim())" -ForegroundColor DarkYellow
    Write-Host "       actual:   $($fileLines[$divergeIdx].Trim())" -ForegroundColor DarkYellow
  }
}

$patch = Get-Content $PatchFile -Raw | ConvertFrom-Json

foreach ($edit in $patch.edits) {
  $path = $edit.file
  if (-not (Test-Path $path)) {
    Write-Host "MISSING FILE: $path" -ForegroundColor Red
    continue
  }

  $raw = Get-Content $path -Raw
  $content = Normalize $raw
  $find = Normalize $edit.find
  $replace = Normalize $edit.replace

  $count = ([regex]::Matches($content, [regex]::Escape($find))).Count

  if ($count -eq 0) {
    Write-Host "NOT FOUND in $path -> $($edit.label)" -ForegroundColor Yellow
    Diagnose-Mismatch ($content -split "`n") ($find -split "`n") $edit.label
    continue
  }
  if ($count -gt 1) {
    Write-Host "AMBIGUOUS ($count matches) in $path -> $($edit.label)" -ForegroundColor Yellow
    continue
  }

  $newContent = $content.Replace($find, $replace)
  Set-Content -Path $path -Value $newContent -NoNewline

  # Verify the write actually landed
  $verify = Normalize (Get-Content $path -Raw)
  if ($verify.Contains($replace)) {
    Write-Host "OK: $path -> $($edit.label)" -ForegroundColor Green
  } else {
    Write-Host "WROTE BUT VERIFY FAILED: $path -> $($edit.label)" -ForegroundColor Red
  }
}

foreach ($nf in $patch.newFiles) {
  $dir = Split-Path $nf.path -Parent
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  $nfContent = Normalize $nf.content
  Set-Content -Path $nf.path -Value $nfContent -NoNewline
  Write-Host "CREATED: $($nf.path)" -ForegroundColor Cyan
}

Write-Host "`nDone: $($patch.tool)" -ForegroundColor Magenta