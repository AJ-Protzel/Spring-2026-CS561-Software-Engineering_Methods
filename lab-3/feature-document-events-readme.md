# CS 561 Lab 3: Branch `feature/document-events`

## Branch Author
Savannah Tanner (102627802)

## Summary of Work Done in this Branch
This branch adds the document-level keydown events handling for the SpeedScore application. The document.js file listens for keyboard events based on the currently focused element and handles those events. The event handler listens for menu button, menu items, mode tabs, and action dialogs. 

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
| 50aa5ed | Created document.js with header documentation | |
| 96e2f3a | added keydown event listener function skeleton | |
| d31f0d1 | Handled keydown event: menu button is focused | |
| 70a56f0 | Handled keydown event: menu item is focused | |
| 928bb10 | Handle keydown event: mode tab is focused | |
| 01a9abc | Handle keydown event: action dialog is focused | |
| 2e52e19 | Adding document keydown event handler commented description | |

### Total Commits Made in this Branch: 7

### Rebase Description 
In this branch, I rebased 'feature/document-events' onto 'origin/main'. This was necessary because several merged pull requests occurred while I was working on this branch. There were nocomnflicts during the rebase and its commit ID after rebasing is '2e52e19'. 

### Cherry Pick Description (Delete if not applicable)
In this branch, I cherry-picked commit 'b16c1ae' "added dialogue buttons" from the 'feature-Action-Dialog' branch. This added role-dialog buttons that were relevant to the keyboard event handling completed in this branch. The index.html file contained a conflict so I resolved it by keeping the changes from both instances of the file. The commit ID after cherry-picking is 'b52f09f'. 
