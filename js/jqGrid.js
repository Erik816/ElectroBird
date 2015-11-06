$(document).ready(function () {
    $("#jqGrid").jqGrid({
        url: 'emailsample.json',
        datatype: "json",
          colModel: [
            { label: 'Star', name: 'star', width: 10 },
            { label: 'Subject', name: 'Subject', width: 75 },
            { label: 'From', name: 'From', width: 90 },
            { label: 'Date', name: 'Date', width: 100, sorttype: 'datetime', datefmt: 'm/d/Y' }
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

  /**This function resizes the width of jQGrid, makes jqgrid responsive
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
