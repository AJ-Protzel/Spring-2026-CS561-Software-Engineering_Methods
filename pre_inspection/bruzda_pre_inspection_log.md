# Lab 5a Pre-Meeting Inspection Issue Log

*Use this form to log issues on your own before the inspection meeting.*


## Inspection Summary
|  |  |
|-------|-------|
| **Inspector Name:** | Alex Bruzda |
| **Time Started:** | 10:15 |
| **Time Ended:** | 11:08 |
| **Minutes Spent:** | 0:53 |
| **Defects Found:** | 4 major, 8 minor|

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
| 1  |  1  |  15    | Str  | Minor    | Email input uses type="text" instead of type="email". Should use the correct input type for an email field. |
| 2  |  1  |  38    | Def  | Major    | Email is only checked for empty. Any non-empty string passes. Should use a regex to check for a valid email format. |
| 3  |  1  |  26    | Doc  | Minor    | No comments explaining what validateForm does or what it is expected to return. |
| 4  |  1  |  31    | Bra  | Minor    | Username check uses === '' which allows whitespace-only input to pass. Value should be trimmed before the check. |
| 5  |  2  |  18    | Bra  | Minor    | itemText is not trimmed before the empty check. A whitespace-only entry passes and gets added to the list as a blank item. |
| 6  |  2  |  26    | Var  | Minor    | itemList is fetched with getElementById every time addItem is called instead of being stored in a variable. |
| 7  |  2  |  16    | Doc  | Minor    | No documentation for the addItem function. Hard to understand its expected behavior at a glance. |
| 8  |  3  |  12    | Str  | Major    | No backdrop or overlay on the modal. Clicking outside it does nothing; user must use the close button. |
| 9  |  3  |  17    | Doc  | Minor    | No comments in the script. It is not clear what the modal is meant to be used for. |
| 10 |  4  |  17    | Def  | Major    | Does not check response.ok before calling response.json(). A failed HTTP response is treated as a success. |
| 11 |  4  |  21    | Def  | Major    | Error is only logged to the console. The user sees no feedback when the fetch fails. |
| 12 |  5  |  17    | Str  | Minor    | No previous button. The carousel can only move forward; there is no way to go back to an earlier image. |
| 13 |  5  |  13-15 | Str  | Major    | Image files don't exist in repo. |