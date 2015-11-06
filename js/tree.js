$(document).ready(function () {
  $('#jstree').jstree({
    "core" : {
      "animation" : 0,
      "themes" : {
        "dots" : false,
      }
    }
  });
  // Bind to events triggered on the tree
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  // Interact with the tree
  //$('inbox').on('click', function () {
  //  $('#jstree').jstree(true).open_node('inbox');
  //});
});
