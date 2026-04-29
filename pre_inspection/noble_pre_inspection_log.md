# Lab 5a Pre-Meeting Inspection Issue Log

*Use this form to log issues on your own before the inspection meeting.*


## Inspection Summary
|  |  |
|-------|-------|
| **Inspector Name:** | Kyle Noble |
| **Time Started:** | 6:18 |
| **Time Ended:** | 7:14 |
| **Minutes Spent:** | 0:56 |
| **Defects Found:** | 8 major, 8 minor|

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
| 1 |  1   |  31    | Def  |   Major  |  username input not sufficiently validated. Allows for spaces and special characters  |
| 2 |  1   |  38    | Def  |   Major  | email not validated. Should use a regex pattern to ensure that it is a valid email |
| 3 |  1   |  25    | Doc  | Major    | There are no comments explaining the expected behavior of validateForm. |
| 4 |  1   |  46    | Str  | Minor    | Unclear whether validateForm should return whether the form is valid or actually send the form to some backend API. |
| 5 |  2   |  19    | Def  | Minor    | Input validation is very limited: should check for max length |
| 6 |  2   |  15    | Doc  | Minor    | No documentation for addItem function |
| 7 |  2   |  29    | Str  | Major    | No way to remove items from the list or rearrange them. |
| 8 |  3   |  19/23 | Str  | Minor    | Could assign 'myModal' element to a variable to reduce redundancy |
| 9 |  3   |  10/16 | Doc  | Minor    | No documentation. Can't tell what this is for. |
| 10 | 4   |  14/24 | Doc  | Minor    | No documentation for either function. |
| 11 | 4   |  26    | Str  | Minor    | Could save dataContainer as variable to avoid looking it up on every query. |
| 12 | 4   | 21     | Def  | Major    | Only logs error to console, user sees no error on failure |
| 13 | 4   | 18     | Def  | Major    | Does not validate that the response was ok. Relies on errors propagating from displayData trying to use bad data |
| 14 | 5   | 26     | Doc  | Minor    | No documentation for showNextImage |
| 15 | 5   | 13-15  | Str  | Major    | Images do not exist. |
| 16 | 5   | 13-15  | Def  | Major    | No error handling/alt text for images that fail to load. |
