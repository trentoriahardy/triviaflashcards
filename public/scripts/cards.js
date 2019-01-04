
$(document).ready(function () {
$.ajax({
    type: 'GET',
    url: '/triviaflashapp',
    success: function (data) {
        console.log(data)

        let random = Math.floor(Math.random() * data.length)
        answer = data[random].answer
        $(".question").html(data[random].question)
        $(".answer").hide()
    },
    error: function (err) {
        console.log(err)
    }
})
})
$(".answerButton").click(function () {
$(".answer").show()
$(".answer").html(answer);
$(".question").show();
})




