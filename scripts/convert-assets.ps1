Add-Type -AssemblyName System.Drawing

$src = Join-Path $env:USERPROFILE "Downloads\or avner site"
$out = Join-Path $PSScriptRoot "..\public\images\graphics"
New-Item -ItemType Directory -Force -Path $out | Out-Null

Get-ChildItem -Path $src -Filter "*.emf" | ForEach-Object {
  try {
    $meta = New-Object System.Drawing.Imaging.Metafile($_.FullName)
    $w = [int]$meta.Width
    $h = [int]$meta.Height
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($meta, 0, 0, $w, $h)
    $dest = Join-Path $out ($_.BaseName + ".png")
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "ok $($_.Name) -> $dest ($w x $h)"
    $g.Dispose()
    $bmp.Dispose()
    $meta.Dispose()
  }
  catch {
    Write-Output "fail $($_.Name): $_"
  }
}
