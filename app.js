const express = require('express')//requires express all the time
const app = express()//make sure express run
const bodyParser = require('body-parser')//
const MongoClient = require('mongodb').MongoClient //connect takes two parameters
app.set("view engine", "pug")

let db
let triviaCards = []

//find pug files//views folder/page //Middleware
app.use(express.static(__dirname + "/public/"))
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect("mongodb://flashapp2:123456a@ds051534.mlab.com:51534/triviaflashapp",{useNewUrlParser:true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db("triviaflashapp")
    //app.listen(8080, function() {
        console.log("listening on 8080!")//taking in connection port
    })  
//})

app.get('/', function (req, res) {
    let cursor = db.collection("triviaflashcards").find().toArray(function (err, results) {
        if (err) return console.log(err)
        triviaCards = results
        console.log(results)
        res.render('index.pug', {triviaflashcards: results
        })
    })
})
app.get ('/triviaflashcards',(req, res) => {
    res.send(triviaCards)
})

app.post("/triviaflashcards", (req, res) => {
    db.collection('triviaflashcards').save(req.body, (err, result) => {
        if (err) return console.log(err)


        console.log('saved to database :)')
        res.redirect('/')
    })
    // $(".card").click(function () {
    //     $(this).find(".cardInner").toggleClass("flipped");
    // });
})


app.post("/update", (req,res)=> {
   let id = req.body._id
   let items ={
       question: req.body.question,
       hint: req.body.hint,
       answer: req.body.answer
   }
   db.collection('triviaflashcards').updateOne({"id":id }, {$set:items}, function ( result) {
       console.log(result)

   })
   console.log(items)
   res.redirect('/')

})

app.post("/delete", (req,res)=> {
    id = req.body._id
 
        db.collection('triviaflashcards').deleteOne({"id":objectID(id)}, function ( result) {
            console.log()
 
        })
        res.redirect('/')
 
    })

app.listen(8080, function () {})





//slash stands for directory/base index file






 //express handles communicating

 //flashcards 
 //send json object thru 
