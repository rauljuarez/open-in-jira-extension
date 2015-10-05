openInJira = function(id){
  var query = id.selectionText;
  // Set up your URL here, don't forget the final "/"
  chrome.tabs.create({url: "https://yourcompanyhere.atlassian.net/browse/" + query});
};

chrome.contextMenus.create({
  title: "Open in Jira",
  contexts:["selection"],
  onclick: openInJira
});