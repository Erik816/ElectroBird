// jqGrid.js controls the initialization and settings of the main email pane. It uses the jqGrid plugin for jQuery, which can be found at http://www.trirand.com/blog/. It is currently hard-coded to accept a dummy email JSON document, but can be configured to load from a server.

$(document).ready(function () {
    $("#jqGrid").jqGrid({
        url: 'data/dummyemails.json',
        datatype: "json",
          colModel: [
            { label: '<span class="icon icon-flow-cascade"></span>', name: 'thread', width: 10, resizable: true},
            { label: '<span class="icon icon-star"></span>', name: 'star', width: 10, resizable: true },
            { label: '<span class="icon icon-attach"></span>', name: 'attachment', width: 10, resizable: true },
            { label: 'Subject', name: 'Subject', width: 100, resizable: true },
            { label: '<span class="icon icon-eye"></span>', name: 'Read', width: 10, resizable: true },
            { label: 'From', name: 'From', width: 60, resizable: true },
            { label: '<span class="icon icon-minus-circled"></span>', name: 'Spam', width: 10, resizable: true },
            { label: 'Date', name: 'Date', width: 40, sorttype: 'datetime', datefmt: 'Y-m-d H:i:s', resizable: true },
            { name: 'Email', hidden: true},
            { name: 'Recipient', hidden: true}
          ],
          autowidth: true,
          shrinktoFit: true,
          height: 300,
          loadonce: true,
          scroll: 1,
          // Function to parse rowData when row is selected. Modifies index.html with jQuery calls to selected elements.
          onSelectRow: function(id) {
            var rowData = $(this).getRowData(id);
            var messageSender = rowData['From'];
            var senderEmail = rowData['Email'];
            var subject = rowData['Subject'];
            var recipientEmail = rowData['Recipient']

            if (messageSender) {
              $("#messageSender").html("<span>" + messageSender + "<span>");
            };
            if (senderEmail) {
              $("#senderEmail").html("<span> &lt;" + senderEmail + "&gt; <span>");
            };
            if (subject) {
              $("#Subject").html("<b><span> " + subject + "<span></b>");
            };
            if (recipientEmail) {
              $("#Recipient").html("<span> " + recipientEmail + "<span>");
            };
          }
      });
  });

  /**
   * Binding function resizeGrid to resize and load event of window
   *
   * @author Shiva Bhusal
   */

  $(window).bind('resize', function () {
    resizeGrid('#jqGrid', '#thread-pane');
  });
  $(window).bind('load', function () {
    resizeGrid('#jqGrid', '#thread-pane');
  });

  /**This function resizes the width of jqGrid, makes jqGrid responsive
  * @param responsiveParentId Id of parent that is responsive, by default it will take body
  * @param idOfTable Id of the table that needs to be responsive
  *
  * @author Shiva Bhusal
  */

  function resizeGrid(idOfTable, responsiveParentId) {
     // pageWidth imports its width from responsiveParentId, Default parent is BODY
     responsiveParentId = responsiveParentId || 'body';
     var pageWidth = $(responsiveParentId).width();
     $(idOfTable).setGridWidth(pageWidth);
  }
