# Open in Jira - Extension

YEI! This is the **Open in Jira** for your Google Chrome.

If you are lazy like me, and also you are tired to copy/paste and type the Jira URL, for example, when you have a Google Drive Spreadsheet or Excel with tons of IDs not linked at all... well, well, now you have the solution...

### Configuration

1. Download / Clone this repo.
2. Config the Jira URL, by opening the `main.js` file and adding your Jira instance data:

    Ex.
    ```javascript
    chrome.tabs.create({url: "https://yourcompany.atlassian.net/browse/" + query});
    ```

3. Load the extension, by clicking `Load unpacked extension`. Be sure you have the Google Chrome Developer Mode Active.
4. All good..


### Usage

1. Select a Jira ID from your document/spreadsheet or any other place you like.
2. Right Click.
3. Select **Open in Jira**

    ![ext](http://i.imgur.com/h2oSNIs.png)

4. Done, will open a new Tab with your Jira.


### To Done

* Setting interface for your Jira URL
* Next will be Firefox too...

### Suggestions?

![watch](http://i.imgur.com/OjTU4Bz.jpg)



