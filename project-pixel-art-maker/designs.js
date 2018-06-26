// Select color input
// Select size input



// When size is submitted by the user, call makeGrid()
function clicked(){
    var x = document.getElementById("inputWeight").value;
    var y = document.getElementById("inputHeight").value;

    $(function(){
        $('#pixelCanvas').remove();
        makeGrid(y, x);
    });
}

function makeGrid(height, width) {
    // Your code goes here!
    $('<table id="pixelCanvas"></table>').insertAfter('h2:last');
    for(var row=0; row < height; row++){
        $('#pixelCanvas').append('<tr id='+ row +'></tr>');
        for(var col=0; col < width; col++){
            $('#'+ row).append('<td></td>');
        }
    }

    $('td').click(function(){
        var color = document.getElementById("colorPicker").value;
        $(this).css("background-color", color);
    });
}