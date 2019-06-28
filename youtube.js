chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({youtube: 1}, function() {
      console.log("youtube feed block is enabled");
    });
  });

chrome.webNavigation.onCompleted.addListener(function() {
    alert("On youtube");
}, {url: [{urlMatches : 'https://www.youtube.com'}]});