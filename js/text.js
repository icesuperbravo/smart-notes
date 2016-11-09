
/*
$(document).ready(function() {
    var count = 0;
    $(".btn-floating").click(function() {
        var table = document.getElementById(\)
        var domElement = document.createElement()
        count += 1;
        //var domElement1 = $('<div class="btn-discard"><text>Discard</text></div>')
        //$(this).after(domElement1).after(domElement);

        $(this).after(domElement);
    });
});
*/
$(document).ready(function() {
    $('select').material_select();
});

// add cards
$('.btn-floating').click(function () {

  $('.row')
  .append('<div class="col s12 m4"><div class="card-panel teal"><textarea id="textarea" class="materialize-textarea"></textarea><div class="card-action"><a class="waves-effect waves-light btn" id="color-change">alert</a><a class="waves-effect waves-light btn" id="archive">archive</a><a class="waves-effect waves-light btn" id="delete">delete</a></div></div></div>')

})

/*
// click color change(alert) button
$('#color-change').click(function () {
  $('.card-panel').css('color', 'yellow');
})
*/
