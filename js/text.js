$(document).ready(function() {
    var count = 0;
    $("#btn").click(function() {
        var domElement = $('<div><textarea class="card"></textarea></div>')
        count += 1;
        //var domElement1 = $('<div class="btn-discard"><text>Discard</text></div>')
        //$(this).after(domElement1).after(domElement);

        $(this).after(domElement);
    });
});
