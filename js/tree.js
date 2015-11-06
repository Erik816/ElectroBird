// Tree.js controls the initialization of the sidebar tree using the jsTree module for jQuery, which can be found at https://www.jstree.com/. It is called in index.html

$(document).ready(function () {
  $('#jstree').jstree({
    "core" : {
      "animation" : 0,
      "themes" : {
        "dots" : false,
      },
      // Populating sidebar tree with JSON data. Hard-coded for now, can import using AJAX. See https://www.jstree.com/docs/json/
      "data" : [
        {
          "id" : "account",
          "text" : "Erik.Christensen@gmail.com",
          "icon" : "icon icon-inbox",
          "state" : {
            opened: true
          },
          children : [
            {
              "id" : "inbox",
              "text" : "Inbox",
              "icon" : "icon icon-download",
              "state" : {
                opened : true
              },
              children : [
                {
                  "id" : "drafts",
                  "text" : "Drafts",
                  "icon" : "icon icon-doc-text"
                },
                {
                  "id" : "sent-mail",
                  "text" : "Sent Mail",
                  "icon" : "icon icon-suitcase"
                },
                {
                  "id" : "spam",
                  "text" : "Spam",
                  "icon" : "icon icon-minus-circled"
                },
                {
                  "id" : "trash",
                  "text" : "Trash",
                  "icon" : "icon icon-trash"
                },
                {
                  "id" : "important",
                  "text" : "Important",
                  "icon" : "icon icon-alert"
                },
                {
                  "id" : "starred",
                  "text" : "Starred",
                  "icon" : "icon icon-star"
                }
              ]
            },
            {
              "id" : "deleted-items",
              "text" : "Deleted Items",
              "icon" : "icon icon-folder"
            },
            {
              "id" : "sent-items",
              "text" : "Sent Items",
              "icon" : "icon icon-attach"
            }
          ]
        },
        {
          "id" : "local-folders",
          "text" : "Local Folders",
          "icon" : "icon icon-home",
          "state" : {
            opened : true
          },
          children : [
            {
              "id" : "local-trash",
              "text" : "Trash",
              "icon" : "icon icon-trash"
            },
            {
              "id" : "local-outbox",
              "text" : "Outbox",
              "icon" : "icon icon-upload"
            }
          ]
        }
      ]
    }
  });
  // Bind to events triggered on the tree
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
});
