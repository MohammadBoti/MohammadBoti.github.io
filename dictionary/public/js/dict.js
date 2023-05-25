$(document).ready(function () {
    $("#submit").click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: "http://localhost:8080/api/v1/words",
            data: $('input[name="word"]'),
            dataType: 'json'
        }).done(function (res) {
            $(".new").remove();
            for (let i = 0; i < res.length; i++) {
                console.log(res[i]);
                $(".content").append("<p class=\"new\">"+(i+1)+"("+res[i].wordtype+") :: "+res[i].definition + "</p>");
            }
        })
    });
});