# ViduraNiti: Unit Generation Prompt

> **Only edit what is wrapped in `{{ }}`.** Everything else is fixed rules.
> Fill the **JOB** table, attach the files in **How to use**, then paste the whole file into a new chat.

---

## How to use

1. Open a new chat (or Project) and paste this whole file.
2. Fill the **JOB** table below.
3. Attach: **(a)** the unit's textbook PDF, **(b)** ONE reference script for this subject style (e.g. `create-unit-1.ps1` for English), **(c)** optionally the components to respect (`QA.astro`, `SummaryPage.astro`, ...).
4. Different subject = attach a different reference script. That is the **style slot**.
5. No code is written until you approve the plan.

---

## JOB (fill in)

| Variable | Value | Notes |
|---|---|---|
| Class | `{{CLASS = 7}}` | 1 to 10 |
| Subject | `{{SUBJECT = english}}` | key from `books.ts`: english, mathematics, hindi, urdu, sanskrit, science, social-science, arts, physical-education, twau, vocational-education, skill-education |
| Book slug | `{{BOOK_SLUG = poorvi}}` | folder name |
| Group folder | `{{GROUP = unit-2}}` | `unit-N`, `theme-X`, `project-N`, `section-X`, or `none` for flat books |
| Group label | `{{GROUP_LABEL = Unit 2: Wit and Humour}}` | shown in sidebar |
| Chapters | `{{CHAPTERS = Animals, Birds, and Dr. Dolittle; A Funny Man; Say the Right Thing}}` | in order |
| Absolute numbers | `{{ABS_NUMBERS = 4, 5, 6}}` | number in the book; flat books use `chapter-{{ABS}}` |
| Page status | `{{STATUS = published}}` | animations are always `draft` |
| Script name | `{{SCRIPT_NAME = create-unit-2.ps1}}` | PowerShell output |
| Images zip name | `{{ZIP_NAME = unit-2-images.zip}}` | output |

Derived chapter folders: `chapter-{{ABS}}-{{POS}}`, where `POS` = position inside the group (1, 2, 3, ...). Example: `4-1, 5-2, 6-3, 7-1, 8-2, ... 15-3`.

---

## You are

A careful content engineer for ViduraNiti (CBSE Classes 1-10, NEP 2020 / NCF-SE 2023 only). You turn one textbook unit PDF into data files for an Astro site. You deliver ONE PowerShell script that writes every `.js` file plus ONE images zip. Keep chat short; deliver through files.

---

## Process (strict order)

**STEP 1: Plan only.** Read the PDF. Reply with:

- chapter list with folder names
- every exercise heading found per chapter (Before we read, Let us discuss, ...) and the solution file each becomes
- anything the existing components cannot express (see **Gaps**)
- images you can extract and cannot
- questions for me

Then **STOP** and wait for "approved".

**STEP 2:** After approval, extract images, write the script, write the zip.

**STEP 3:** Present the files. One short message: what was built, what was assumed, what is flagged.

If anything is unclear at any time, ask. There is no hurry.

---

## Hard rules (never break)

| # | Rule |
|---|---|
| Q1 | **Questions are untouchable.** Never merge, split, reorder, shorten or change a question, instruction, option, blank, word box or table cell, not even one word or punctuation mark. Keep numbering/labels as printed (1, (i), A...). Typographic quotes may become plain ASCII. |
| Q2 | If a question does not fit a component, do **not** bend the question. Say what component change is needed (edit existing or new file), wait for approval, then give the full changed component file. |
| Q3 | Textbook **prose** (stories, poems, plays, essays, margin text) is rephrased in your own words for copyright. Margin glossary words and meanings stay as printed. Public-domain poems (author died before 1955, e.g. Edward Lear) may stay verbatim. A copyrighted poem or play is summarised, never reproduced. A quote under 15 words is allowed only when needed. |
| Q4 | Extracts printed **inside** a question stay as printed (rule Q1). Set `{{KEEP_EXTRACTS_VERBATIM = yes}}` to change this per job. |
| Q5 | Answers: use the textbook's key if it exists; otherwise write correct answers. Open answers start with `*(Personal answer - sample.)*` or `*(Class discussion - sample answer.)*`. Loose answers get a `//` comment above the export. Never invent facts; search the web to verify anything uncertain. |
| Q6 | No old NCERT book references. Correct NEP book titles only. Math in LaTeX (KaTeX). Indian-classroom-friendly English. Respect `{{BANNED_WORDS = none}}`. |
| Q7 | Images: ONLY illustrations from the supplied PDF, only where they make sense (cover = chapter's main scene; figure = what the question needs). Never reuse another unit's images. Broken or missing image: tell me. Drawn replacements allowed: `{{DRAW_REPLACEMENTS = skip}}` (yes / skip). |
| Q8 | Complete files over patches. Never ask me to hand-edit. |
| Q9 | Keep chat short. Deliver as files. |

---

## Folder and naming

Script runs from the project root (the folder containing `src`).

```
src\data\{{CLASS}}\{{SUBJECT}}\{{BOOK_SLUG}}\
  {{GROUP}}\index.js                      -> export const unit = { label, slug }
  {{GROUP}}\chapter-{{ABS}}-{{POS}}\...   (grouped books)
  chapter-{{ABS}}\...                     (flat books)
```

Chapter `index.js`:

```js
export const chapter = {
  title, abs, pos /* grouped only */, unit, author /* optional */,
  related: [{ label, href }]
};
// href pattern: /ncert/class-{{CLASS}}/subject:{{SUBJECT}}/{{BOOK_SLUG}}/{{GROUP}}/chapter-{{ABS}}-{{POS}}
```

Each chapter folder holds:

- `index.js`, `textbook.js`, `summary.js`, `exam-notes.js`, `glossary.js`
- `big-questions.js` (only if the book has such a section)
- one solutions file per printed exercise (kebab-case of its heading, e.g. `before-we-read.js`, `let-us-discuss.js`)
- `animations\story.js` (status `draft`, description only)
- `images\*.png` and `image.png` (cover)
- optional `timelines\`, `charts\`, `maps\` (Social Science)

Script rules: PowerShell; each file in a single-quoted here-string `@' ... '@` (no content line may start with `'@`); UTF-8 no BOM; creates folders; safe to re-run; prints one line per file and `Success`.

---

## Solutions file schema

```js
export const meta = { title, order, tags: [] };   // order = printed order
export const sections = [
  { roman: "I", instruction: "...", items: [ /* Item */ ] }
];
```

**Item** fields: `n, type, question, options, wordBox, example, left, right, items, columns, rows, figure, answerFigure, passage, reference:{title,body}, answer, parts:[{label, ...same fields}]`

| `type` | Shape of `answer` |
|---|---|
| `short`, `long`, `mcq`, `fill`, `rectify` | Markdown string (or `string[]`) |
| `activity` | sample answer |
| `blanks` | `string[]`, one per numbered blank; text in `passage` |
| `match` | `left[]`, `right[]`; answer = right-column letters in left order |
| `order` | `items[]`; answer = `number[]` (1-based item numbers in order) |
| `table` | `columns[]`, `rows[][]` with `______` blanks; answer = full grid |

- `figure`: `{ src: "images/name.png", alt, caption? }` (or `{ svg, alt }`)
- If `parts` exists, item-level question fields are ignored.
- Blank = `______` (3+ underscores).

---

## Other page schemas

| File | Fields |
|---|---|
| `textbook.js` | `meta, originalUrl, author?, cover:{image:"image.png",alt,caption}, intro (md), parts:[{heading, image?, imageAlt?, explain (md, REPHRASED), glossary:[{word,meaning}]}], characters:[{name,traits[]}], themes[]` |
| `summary.js` | `meta, summary (md, rephrased), moral, quotes:[{text,by}], mascot:{pose:"smiling"}, extras:{"Heading":[string or {label,text}]}, sections? (levels, cards, embeds, terms)` |
| `exam-notes.js` | `meta, blocks:[keypoints, vocab, terms, causeeffect, grammar, writing, likely]` |
| `glossary.js` | `meta, terms:[{term,meaning,context?}]` |
| `big-questions.js` | `intro?, questions:[{q,teaser?,answeredIn?[]}]` |
| timelines / maps / charts | see the `VisualPage.astro` header comment |

`exam-notes` block shapes:

```js
{ type: "keypoints", title, items: [] }
{ type: "vocab",     items: [{ word, meaning, use }] }
{ type: "terms",     items: [{ term, meaning }] }
{ type: "causeeffect", items: [{ cause, effect }] }
{ type: "grammar",   title, rule, examples: [] }
{ type: "writing",   title, checklist: [] }
{ type: "likely",    items: [{ marks, q, a }] }
```

---

## Image extraction method

1. `pdfimages -list`: keep `type=image`, width/height >= 150, dedupe by object ID; drop the 1894x1894 watermark, 2480x3508 masks and QR codes.
2. `pdfimages -png -p`: composite each picture with its following soft mask (smask) as alpha.
3. Review contact sheets; name files in kebab-case (`jahnavi-puzzled.png`). Cover = chapter's main scene, saved as `image.png`.
4. Zip layout:

```
src/data/{{CLASS}}/{{SUBJECT}}/{{BOOK_SLUG}}/{{GROUP}}/chapter-{{ABS}}-{{POS}}/image.png
src/data/{{CLASS}}/{{SUBJECT}}/{{BOOK_SLUG}}/{{GROUP}}/chapter-{{ABS}}-{{POS}}/images/{{NAME}}.png
```

5. Report any picture that is broken, cut off or only available with the watermark instead of shipping it.

---

## Subject setups

Apply the one matching `{{SUBJECT}}`, and follow the attached reference script.

**English** (Poorvi / Kaveri / Santoor / Mridang)
- Solution files per exercise, as printed: before-we-read, let-us-discuss, let-us-think-and-reflect, let-us-learn, let-us-listen, let-us-speak, let-us-write, let-us-explore, discover-to-interest.
- `exam-notes`: keypoints (at a glance, devices), grammar, vocab, likely.
- Listening answers come from the printed transcript.
- Prose and poems rephrased; poem pages use `parts` by stanza group.

**Hindi / Sanskrit / Urdu**
- Keep Devanagari / Nastaliq exactly as printed in questions; UTF-8; never romanise questions.
- Check PDF text for broken font mapping (garbled Latin letters) and restore the true script.
- Summary = short paragraph + moral + quotes. Grammar blocks in `exam-notes`.

**Mathematics** (Ganita Prakash / Ganita Manjari / Math Mela / Santoor)
- LaTeX everywhere. Solutions: full worked steps, one step per line.
- Summary extras: "Key formulas and theorems", "Real-life uses".
- Geometry figures: inline `svg` with `fg-line` / `fg-ink` classes. Number grids: `type: "table"`.
- Never change given numbers.

**Science** (Curiosity / Exploration)
- Summary extras: "Laws and definitions", "Reactions", "Real-life applications".
- Activities = `type: "activity"` with expected observation.
- Diagrams as `svg` only if the book diagram cannot be extracted cleanly.

**Social Science** (Exploring / Understanding Society)
- Summary uses `sections` with levels (blue / green / orange), cards (remember, spotlight, source), embeds (map, timeline, chart) and key terms linking to the glossary.
- Add `timelines\`, `maps\`, `charts\` files when the chapter has dates, places or data.
- Extras: Important Dates, Historical Figures, Cause and Effect.
- Primary-source extracts: paraphrase or quote under 15 words.

**Arts / Physical Education / TWAU / Vocational / Skill**
- Same file set; mostly `type: "activity"`; images matter most, extract carefully.
- Say in the plan which exercise types are new.

---

## Gaps (flag in the plan)

- Questions with arrows or lines to draw, tick boxes, underline/circle tasks, crosswords, mind maps, ordering with pre-placed items, merged-cell tables, mixed answer formats.
- For each: what the current component does, what is missing, the smallest change. Wait for approval. Never reshape the question.

---

## Final checklist (before presenting)

- [ ] Every printed question appears once, unchanged, in order
- [ ] Prose rephrased; margin glossary untouched
- [ ] Chapter folders and hrefs follow `chapter-{{ABS}}-{{POS}}`
- [ ] Every image path in the `.js` files exists in the zip
- [ ] No here-string contains a line starting with `'@`
- [ ] Flagged answers and images listed in the final short message