# People (bio sketches)

One folder per person: `src/people/<slug>/index.js`. Put the person's image in the same folder.
The page appears at `/ncert/people/<slug>` and in the People sidebar automatically.

## Add a person

```powershell
.\create-people.ps1 -NewPerson rani-lakshmibai -Name "Rani Lakshmibai"
```

Fill in the file. Sections with no content are hidden. Keep `status: "draft"` (visible only in
`npm run dev`) until every date and fact is checked, then change it to `"published"`.

## What a person file can hold

| Field          | What it becomes                                              |
|----------------|--------------------------------------------------------------|
| `facts`        | The quick-facts box at the top                               |
| `overview`     | Overview section (`remember` adds a small "Let's remember" box) |
| `early`        | Early life                                                   |
| `contribution` | Role and contribution                                        |
| `timeline`     | Timeline (`date`, optional `end`, `title`, optional `text`)  |
| `legacy`       | Legacy                                                       |
| `extra`        | Any more sections: `{ title, body }`                         |
| `related`      | Related chapters: `{ label, href }`                          |

Text fields take Markdown and can be a string or an array of paragraphs.

## Expand the system

- New category: add a line to `CATEGORIES` in `src/lib/people.ts`.
- New fixed section: add a line in `sectionsOf()` in `src/lib/people.ts`.
- Look and feel: the components are in `src/components/people/`.