# Adds image support to the components. Run from the project root:
#   powershell -ExecutionPolicy Bypass -File .\apply-patches.ps1
# Also copy components\Figure.astro and components\TextbookPage.astro into src\components\ (overwrite).

$utf8 = New-Object System.Text.UTF8Encoding($false)

function Patch($path, $pairs) {
    if (-not (Test-Path -LiteralPath $path)) { Write-Host "MISSING FILE: $path"; return }
    $full = (Resolve-Path -LiteralPath $path).Path
    $t = [System.IO.File]::ReadAllText($full)
    $changed = $false
    foreach ($p in $pairs) {
        $old = $p[0]; $new = $p[1]
        if ($t.Contains($new)) { Write-Host "  already patched: $($old.Substring(0, [Math]::Min(50, $old.Length)))..."; continue }
        if (-not $t.Contains($old)) { Write-Host "  NOT FOUND in $path : $old"; continue }
        $t = $t.Replace($old, $new); $changed = $true
        Write-Host "  patched: $($old.Substring(0, [Math]::Min(50, $old.Length)))..."
    }
    if ($changed) { [System.IO.File]::WriteAllText($full, $t, $utf8) }
}

Write-Host "QA.astro"
Patch "src\components\QA.astro" @(
    @('interface FigureData { svg: string; alt: string; caption?: string }', 'interface FigureData { svg?: string; src?: string; alt: string; caption?: string }'),
    @('<Figure svg={figure.svg} alt={figure.alt}', '<Figure svg={figure.svg} src={figure.src} alt={figure.alt}'),
    @('<Figure svg={answerFigure.svg} alt={answerFigure.alt}', '<Figure svg={answerFigure.svg} src={answerFigure.src} alt={answerFigure.alt}')
)

Write-Host "SolutionsPage.astro"
Patch "src\components\SolutionsPage.astro" @(
    @('interface FigureData { svg: string; alt: string; caption?: string }', 'interface FigureData { svg?: string; src?: string; alt: string; caption?: string }')
)

Write-Host "[...path].astro"
Patch "src\pages\ncert\class-[class]\[subject]\[book]\[...path].astro" @(
    @('prettify, RESERVED, COLLECTIONS,', 'prettify, RESERVED, COLLECTIONS, resolveContent,'),
    @('collections: {} as Record<string, Record<string, any>> };', 'collections: {} as Record<string, Record<string, any>>, images: {} as Record<string, string> };'),
    @('const { chapter, pages, collections } = noChapter', 'const { chapter, pages, collections, images } = noChapter'),
    @('sections={pageMod?.sections ?? []}', 'sections={resolveContent(pageMod?.sections ?? [], images)}'),
    @('<TextbookPage data={pageMod} />', '<TextbookPage data={resolveContent(pageMod, images)} />')
)
Write-Host "Done."
