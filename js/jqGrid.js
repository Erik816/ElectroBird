// jqGrid.js controls the initialization and settings of the main email pane. It uses the jqGrid plugin for jQuery, which can be found at http://www.trirand.com/blog/. It is currently hard-coded to accept a sample email JSON document, but can be configured to load from a server.

$(document).ready(function () {
    $("#jqGrid").jqGrid({
        url: 'emailsample.json',
        datatype: "json",
          colModel: [
            { label: '<span class="icon icon-flow-cascade"></span>', name: 'thread', width: 10, resizable: true},
            { label: '<span class="icon icon-star"></span>', name: 'star', width: 10, resizable: true },
            { label: '<span class="icon icon-attach"></span>', name: 'attachment', width: 10, resizable: true },
            { label: 'Subject', name: 'Subject', width: 100, resizable: true },
            { label: '<span class="icon icon-eye"></span>', name: 'Read', width: 10, resizable: true },
            { label: 'From', name: 'From', width: 75, resizable: true },
            { label: '<span class="icon icon-minus-circled"></span>', name: 'Spam', width: 10, resizable: true },
            { label: 'Date', name: 'Date', width: 35, sorttype: 'datetime', datefmt: 'm/d/Y', resizable: true }
          ],
          viewrecords: true, // show the current page, data rang and total records on the toolbar
          autowidth: true,
          shrinktoFit: true,
          height: 300,
          rowNum: 30,
          loadonce: true,
          viewrecords: true,
          scroll: 1,
          pager: "#jqGridPager"
      });
  });

  /**
   * Binding function resizeGrid to resize and load event of window
   *
   * @author Shiva Bhusal
   */

  $(window).bind('resize', function () {
    resizeGrid('#jqGrid', '#email-pane');
  });
  $(window).bind('load', function () {
    resizeGrid('#jqGrid', '#email-pane');
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
