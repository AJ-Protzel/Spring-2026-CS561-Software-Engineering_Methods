# CS 561 Lab 3: Branch `feature/menu-logic`

## Branch Author
Alex Bruzda (253197526)

## Summary of Work Done in this Branch
In this branch, I filled out the JavaScript logic for the UI elements. I added global variables in `main.js`. I also implemented the UI interaction logic for the side menu in `sideMenu.js`, mode action dialogs in `modeActions.js`, and browser history state restoration in `window.js`.

## Commits

| Commit ID | Commit Message | # Lines Changed |
| --------- | ----------- | --------------- |
| 347b6fe | branch:feature/menu_logic - added modeActions.js with floating action, box action, box cancel CLICK handlers. Also contains key dialog controls. | 160 |
| 22ef328 | branch:feature/menu-logic - added restoreState function as window.js | 58 |
| a73d0a5 | branch:feature/menu-logic - added side menu interactions | 106 |
| cea0526 | branch:feature/menu-logic - added global variables for action dialogs | 26 |
| 40d9794 | Add mode tab variables to main.js (Cherry-pick) | 48 |
| 5706a61 | branch:feature/menu-logic - add global variables for side menu tracking | 16 |

### Total Commits Made in this Branch: 6

### Merge Conflict Description
In this branch, I had a merge conflict when cherry-picking commit `ef99464` from the `feature/mode-tabs-script` branch into my current branch. Both the cherry-picked commit and my previous commit attempted to add different global variables directly beneath line 8 in `scripts/main.js`. I resolved the conflict by moving Kyle's additions below my own, keeping both sets of variables, and finished with the `git cherry-pick --continue` command. The commit ID for the cherry-pick merge is `40d9794`.

### Rebase Description
In this branch, I rebased the `feature/menu-logic` branch onto the `main` branch to pull in my teammate's recent changes. The latest commit ID for this branch after the rebase is `347b6fe`. 

### Cherry Pick Description
In this branch, I cherry-picked Kyle Noble's commit `ef99464` from the `feature/mode-tabs-script` branch. This commit added the global variables for the mode tabs to `main.js`. I brought it over into this branch because I knew the commit affected the same file and wanted to bring the changes in early to make the main merge request easier later. Also had the added benefit of triggering a merge conflict which I could resolve and fullfil the requirements of the assignment. 
