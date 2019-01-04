let answer;

$(document).ready(function () {
    // $.ajax({
    //     type: 'GET',
    //     url: '/triviaflashcards',
    //     success: function (data) {
    //         console.log(data)
    //         data.forEach(card => {  //The forEach() method calls a provided function once for each element in an array, in order.
    //             answer = card.answer
    //             $('.question').html(card.question)
    //             $('.answer').html(card.answer)
    //         });
    //     },
    //     error: function (err) {
    //         console.log(err)
    //     }
    // })
    $(".hintButton").click(function () {
        $(".hint").show();
         //$(this).toggleClass("flipped");
    });

})


$(".next").click(function () {
    $(".newQuestion").show()

    $.ajax({
        type: 'GET',
        url: '/triviaflashcards',
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

$.ajax({
    type: 'post',
    url: '/update',
    data: {"id":id },
    success: function (data) {
        console.log(data)

        
    },
    error: function (err) {
        console.log(err)
    }
})

$.ajax({
    type: 'post',
    url: '/delete',
    data: {"id":id },
    success: function (data) {
        console.log(data)

        
    },
    error: function (err) {
        console.log(err)
    }
})








































