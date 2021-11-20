import browser from "webextension-polyfill";

browser.browserAction.onClicked.addListener((tab) => {
    void browser.tabs.executeScript(tab.id, { file: "/dist/main.js" });
});
