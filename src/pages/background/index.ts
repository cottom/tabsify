console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('__________________');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    if (tabId) {
      chrome.tabs.sendMessage(tabId, { type: 'popup-modal' });
    }
  });
});
