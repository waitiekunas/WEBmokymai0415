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
$newItemForm.on('submit', function (e) {
    e.preventDefault();

    var inputText = $('input:text');
    var realInputText = inputText.val();
    var minInputLength = 5;
    var successText = '';
    if (realInputText != '' && realInputText.length >= minInputLength) {
        $list.append("<li class='state-unclicked'>" + realInputText + "</li>");
        inputText.val('');
        successText='You have added a new item';
        $('.formWrapper').after('<p>'+successText+'</p>');
    } else {
        alert('Please enter at least' + minInputLength + 'characters.')
    }
    
});

$('body').on('click', 'li', function (e) {
    var $this = $(this);
    if ($this.hasClass('state-unclicked')) {
        $this.addClass('state-clicked');
        $this.removeClassClass('state-unclicked');
    } else {
        $this.addClass('state-unclicked');
        $this.removeClassClass('state-clicked');
    }
})
