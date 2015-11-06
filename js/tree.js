$(document).ready(function () {
  $('#jstree').jstree({
    "core" : {
      "animation" : 0,
      "themes" : {
        "dots" : false,
      },
      "data" : [
        {
          "id" : "account",
          "text" : "Erik.Christensen@gmail.com",
          "state" : {
            opened: true
          },
          children : [
            {
              "id" : "inbox",
              "text" : "Inbox",
              "state" : {
                opened : true
              },
              children : [
                {
                  "id" : "drafts",
                  "text" : "Drafts"
                },
                {
                  "id" : "sent-mail",
                  "text" : "Sent Mail"
                },
                {
                  "id" : "all-mail",
                  "text" : "All Mail"
                },
                {
                  "id" : "spam",
                  "text" : "Spam"
                },
                {
                  "id" : "trash",
                  "text" : "Trash"
                },
                {
                  "id" : "important",
                  "text" : "Important"
                },
                {
                  "id" : "starred",
                  "text" : "Starred"
                }
              ]
            },
            {
              "id" : "deleted-items",
              "text" : "Deleted Items"
            },
            {
              "id" : "sent-items",
              "text" : "Sent Items"
            }
          ]
        },
        {
          "id" : "local-folders",
          "text" : "Local Folders",
          "state" : {
            opened : true
          },
          children : [
            {
              "id" : "local-trash",
              "text" : "Trash"
            },
            {
              "id" : "local-outbox",
              "text" : "Outbox"
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
