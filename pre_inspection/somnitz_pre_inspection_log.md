# Lab 5a Pre-Meeting Inspection Issue Log

*Use this form to log issues on your own before the inspection meeting.*


## Inspection Summary
|  |  |
|-------|-------|
| **Inspector Name:** | Chris Somnitz |
| **Time Started:** | 2:17pm |
| **Time Ended:** | 3:09pm |
| **Minutes Spent:** | 52 |
| **Defects Found:** | 1 major, 12 minor|

## Defects

### Legend
| Column | Options |
|----------|---------|
| **CB #** | Number of the code block (1 - 5) in which defect exists |
**Type** | **Str**ucture, **Doc**umentation, **Var**iables, **Ari**thmetic Operations, **Bra**nches and Loops, **Def**ensive Programming, **Oth**er |
| **Severity** | Major, Minor |
| **Description** | Brief description of the defect |

### Log

| # | CB # | Line # | Type | Severity | Description |
|---|------|--------|------|----------|---------------|
| 1 |   All| N/A | Str | Minor |The indentation is 4 spaces rather than the 2 spaces specified in Google's Javascript style guide.|
| 2 |   All| N/A | Str | Minor |Numerous string constants are used rather than symbolics.|
| 3 |   All| N/A | Doc | Major |No comments or documentation whatsoever.|
| 4 |     1| 21 | Str | Minor |Line is over the 80 character limit set by the style guide. This would remain the case even if the indentation were 2 spaces rather than 4.|
| 5 |     1| 32 | Str | Minor |Line is over 80 characters.|
| 6 |     2| 12 | Str | Minor |Line is over 80 characters.|
| 7 |     2| 24 | Var | Minor |Variable name "li" is unclear in meaning.|
| 8 |     3| 6 | Str | Minor |Line is FAR over 80 characters.|
| 9 |     3| 12 | Str | Minor |Line is over 80 characters.|
| 10 |    3| 18 | Str | Minor |Line is over 80 characters.|
| 11 |    3| 22 | Str | Minor |Line is over 80 characters.|
| 12 |    4| 11 | Str | Minor |Line is over 80 characters.|
| 13 |    4| 25 | Str | Minor |displayData's paramater "data" is not typed with JSDoc annotation as required by the style guide.|
