let answer;

$(document).ready(function () {
     $.ajax({
        type: 'GET',
         url: '/triviaflashcards',
         success: function (data) {
             console.log(data)
             data.forEach(card => {  //The forEach() method calls a provided function once for each element in an array, in order.
                 answer = card.answer
                 $('.question').html(card.question)
                 $('.answer').html(card.answer)
             });
         },
         error: function (err) {
             console.log(err)
         }
     })
    
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
     $(".question").show();
});

   

$(".update").click(function () {
    $(".modal").hide()
    $(".modal2").show()
    $(".modal3").hide()

    
})

function deleteDB(data) {

    $.ajax({
        type: "POST",
        url:"/delete",
        data:{"id":_id},
        success:function (data) {
          $(this).html("#ID").val()
        }
    })
 }
 
 $(".delete").click(function () {
    $(".modal3").show()
    $(".modal2").hide()
    $(".modal").hide()
 })