openInJira = function(id){
  var query = id.selectionText;
  chrome.tabs.create({url: "{{Set up here your Jira URL like - https://yourcompany.atlassian.net/browse/}}" + query});
};

chrome.contextMenus.create({
  title: "Open in Jira",
  contexts:["selection"],
  onclick: openInJira
});