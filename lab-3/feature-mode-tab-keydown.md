# CS 561 Lab 3: Branch `feature/mode-tab-keydown`

## Branch Author
Kyle Noble (81642686)

## Summary of Work Done in this Branch
In this branch I implemented the mode tab switching logic. Each mode tab button is assigned an event handler on click which switches modes. Chris implemented the switchMode function which my code relies on. I also implemented a function that when passed to an event handler for any key press will switch mode tab focus depending on the key pressed: Enter/space for current focused tab, right/left arrow for next/previous tab, home/end for first/last tab, and tab to reset to current focused tab.

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
| 2639b1c | Assigned each mode tab button an event listener which calls a WIP function | 4
| 22775b2 | Added feature: When spacebar or enter is pressed, switches focus to current mode. | 10
| 17829ee | Added feature: When right arrow is pressed, switches focus to next mode tab. | 5
| 9362ff2 | Added feature: When left arrow is pressed, switches focus to previous mode tab. | 6
| e2d3cfa | Added feature: When home key is pressed, switches focus to first mode tab. | 5
| d587f37 | Added feature: When end key is pressed, switches focus to last mode tab. | 5
| 92e8cd2 | Added feature: When tab key is pressed, resets focus to current mode tab. | 4
| fb5d571 | Added documentation for keyDownModeTabFocused function. | 13

### Total Commits Made in this Branch: 8


### Rebase Description (Delete if not applicable)
Example: In this branch, I rebased the `feature/mode-tab-keydown` branch onto the `main` branch. The commit ID for this rebase is `fb5d571`. I resolved any conflicts that arose during the rebase process by modifying the code in the `scripts/modeTabs.js` file to work with the changes made in the `main` branch caused by `feature/mode-tabs-switch-mode`.