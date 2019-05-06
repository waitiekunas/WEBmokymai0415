$(document).ready(function () {
    $('button').on('click', function () {
        var ourData = $('#ourData');

        $.ajax({
            type: "GET",
            url: "https://api.myjson.com/bins/owmcc",
            success: function (result) {
                console.log(result);

                ourData.append('<table>');
                for (var i in result) {
                    var output = "<tr><td>" + result[i].name + "</td></tr>";
                    ourData.append(output);
                }
                ourData.append('</table>')
            }
        });
    });
});
