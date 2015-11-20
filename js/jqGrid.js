// jqGrid.js controls the initialization and settings of the main email pane. It uses the jqGrid plugin for jQuery, which can be found at http://www.trirand.com/blog/. It is currently hard-coded to accept a dummy email JSON document, but can be configured to load from a server.

$(document).ready(function () {

    // To allow resizing the div that contains jqGrid
    $('#thread-pane').resizable();

    // jqGrid initialization and settings
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
            { label: 'Date', name: 'Date', width: 40, sorttype: 'datetime', formatter: 'date', formatoptions: { srcformat: "ISO8601Long", newformat: "m/d/Y h:i A"}, resizable: true },
            { name: 'Email', hidden: true},
            { name: 'Recipient', hidden: true},
            { name: 'Text', hidden: true}
          ],
          autowidth: "100%",
          shrinktoFit: true,
          height: $('#thread-pane').height(),
          loadonce: true,
          scroll: 1,
          scrollOffset: 0,
          // Function to parse rowData when row is selected. Modifies index.html with jQuery calls to selected elements.
          onSelectRow: function(id) {
            var rowData = $(this).getRowData(id);
            var messageSender = rowData['From'];
            var senderEmail = rowData['Email'];
            var subject = rowData['Subject'];
            var recipientEmail = rowData['Recipient'];
            var messageContent = rowData['Text'];

            if (messageSender) {
              $("#messageSender").html("<span>" + messageSender + "</span>");
            };
            if (senderEmail) {
              $("#senderEmail").html("<span> &lt;" + senderEmail + "&gt; </span>");
            };
            if (subject) {
              $("#Subject").html("<b><span> " + subject + "</span></b>");
            };
            if (recipientEmail) {
              $("#Recipient").html("<span> " + recipientEmail + "</span>");
            };
            if (messageContent) {
              $('#messageContent').html("<span>" + messageContent + "</span>");
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
  messagePaneHeight();
});
$(window).bind('load', function () {
  resizeGrid('#jqGrid', '#thread-pane');
  messagePaneHeight();
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
   // used to make height responsive when changing size of thread pane. Tacking -30 (pixels) on the end as a hack to clear enough room on the bottom of the frame.
   $(idOfTable).jqGrid('setGridHeight', $('#thread-pane').innerHeight()-30);
};

function messagePaneHeight() {
  var height = $('#main-pane').outerHeight() - $('#thread-pane').outerHeight(true) - $('#message-headers').outerHeight(true);
  $('#message-pane').css({"max-height": height+"px"});
}
