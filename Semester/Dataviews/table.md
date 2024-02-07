# Most Recent 
- - -
```dataview
TABLE type, module, week
FROM "Semester/lectures"
WHERE file.folder != "Semester/Dataviews" 
SORT file.mtime DESC
LIMIT 5
```
---
# Content By Week
```dataview
LIST rows.file.link
FROM "Semester"
WHERE file.folder != "Semester/Dataviews" AND file.folder != "Semester/reading" 
GROUP BY week
```
