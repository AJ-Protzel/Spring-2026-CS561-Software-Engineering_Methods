# Lab 5a Pre-Meeting Inspection Issue Log

*Use this form to log issues on your own before the inspection meeting.*


## Inspection Summary
|  |  |
|-------|-------|
| Inspector Name: | [Adrien Protzel] |
| Time Started: | [6pm] |
| Time Ended: | [7pm] |
| Minutes Spent: | [60min] |
| Defects Found: | [5] major, [20] minor|

## Defects

### Legend
| Column | Options |
|----------|---------|
| CB # | Number of the code block (1 - 5) in which defect exists |
| Type | Structure, Documentation, Variables, Arithmetic Operations, Branches and Loops, Defensive Programming, Other |
| Severity | Major, Minor |
| Description | Brief description of the defect |

### Log

| # | CB # | Line # | Type | Severity | Description |
|---|------|--------|------|----------|---------------|
| 1  | 1    | All    | Doc  | Minor    | No comments or documentation anywhere in the code |
| 2  | 1    | 38–42  | Def  | Major    | Email field only checks if empty; no format/regex validation for a valid email address |
| 3  | 1    | 27–28  | Str  | Minor    | Magic string constants used for element IDs (`'username'`, `'email'`, `'myForm'`) |
| 4  | 1    | 30–43  | Str  | Minor    | `document.getElementById(...)` repeated multiple times; could be stored in variables |
| 5  | 1    | 46–48  | Bra  | Minor    | No ELSE clause for `if (isValid)` — no feedback given to user when form stays invalid |
| 6  | 2    | All    | Doc  | Minor    | No comments or documentation anywhere in the code |
| 7  | 2    | 16     | Def  | Major    | No input sanitization; user text set via `textContent` is safe here but no XSS guardrails if method changes |
| 8  | 2    | 14     | Str  | Minor    | Magic string constants used for element IDs (`'itemInput'`, `'itemList'`, `'addItemButton'`) |
| 9  | 2    | 22     | Var  | Minor    | Variable `li` is named after the element type rather than its purpose (e.g., `newListItem`) |
| 10 | 2    | 16–17  | Def  | Minor    | No maximum item count check; list can grow indefinitely with no bounds |
| 11 | 3    | All    | Doc  | Minor    | No comments or documentation anywhere in the code |
| 12 | 3    | 6–8    | Str  | Minor    | All CSS rules are on single long lines making them hard to read and maintain |
| 13 | 3    | 14–18  | Str  | Minor    | Magic string constants used for element IDs and class names (`'myModal'`, `'active'`) |
| 14 | 3    | 21–25  | Def  | Minor    | No keyboard support (e.g., Escape key) to close the modal |
| 15 | 3    | 21–25  | Def  | Minor    | No backdrop or outside-click handler to dismiss the modal |
| 16 | 4    | 17     | Def  | Major    | No HTTP status check after fetch; `response.ok` not verified before calling `.json()` |
| 17 | 4    | 26–31  | Def  | Major    | No input validation in `displayData()`; does not check if response is an array or if `item.title` exists |
| 18 | 4    | 17     | Str  | Minor    | Magic string constant for API URL and element IDs (`'dataContainer'`, `'fetchDataButton'`) |
| 19 | 4    | 18, 28, 29 | Var | Minor | Vague variable names: `data` should be `posts`, `item` should be `post`, `div` should be `postElement` |
| 20 | 4    | 26–31  | Bra  | Minor    | No empty state handling; if API returns empty array, container goes blank with no user feedback |
| 21 | 5    | All    | Doc  | Minor    | No comments or documentation anywhere in the code |
| 22 | 5    | 2–17   | Str  | Minor    | No "Previous" button; carousel only navigates forward, limiting expected functionality |
| 23 | 5    | 12–14  | Def  | Minor    | Images have no `alt` text, violating accessibility standards |
| 24 | 5    | 20     | Str  | Minor    | `currentIndex` is a global variable; should be scoped within a module or function closure |
| 25 | 5    | 28     | Def  | Minor    | No bounds check if `images` array is empty; `images[currentIndex]` would throw a runtime error |
