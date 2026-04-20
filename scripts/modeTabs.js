 function switchMode(newMode) {
    //Switch mode button
    GlobalModeTabButtons[GlobalCurrentMode.get()].classList.remove("modetab-selected");
    GlobalModeTabButtons[GlobalCurrentMode.get()].setAttribute("aria-selected",false);
    GlobalModeTabButtons[newMode].classList.add("modetab-selected");
    GlobalModeTabButtons[newMode].setAttribute("aria-selected",true);
    //Switch tab panel
    GlobalModeTabPanels[GlobalCurrentMode.get()].classList.add("hidden");
    GlobalModeTabPanels[newMode].classList.remove("hidden");
    GlobalCurrentMode.set(newMode); //Change mode
    GlobalFocusedMode.set(newMode); //Change focused mode
    if (GlobalHistoryLogging) {
        const historyObj = {
            page: GlobalModeNumbersToModes.get(newMode),
            mode: newMode,
            path: GlobalModeNumbersToRoutes.get(newMode)  
        };   
        history.pushState(historyObj, "", historyObj.path);
        console.log("Console: In switchMode; pushing state: ", 
            JSON.stringify(historyObj));
    }
}