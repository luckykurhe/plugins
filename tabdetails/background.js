window._tab;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	window._tab = tab;
});