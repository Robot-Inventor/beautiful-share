import "webextension-polyfill";

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript(tab.id, { file: "/dist/main.js" });
});
