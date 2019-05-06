//$(document).ready(function () {
//    $('#myInput').on('keyup', function() {
//       var value = $(this).val();
//        $('#myTable tr').filter(function(){
//           $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value)>-1); 
//        });
//    
//    });
//});

var $list, $newItemForm;

$list = $('#toDoList');
$newItemForm = $('#newItemForm');
$newItemForm.on('submit', function(e){
    e.preventDefault();
    
    var myInputText = $('input:text').val();
    
    $list.append("<li>" + myInputText + "</li>");
});