const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {Cheese, Board, User} = require('./models')
const {boardsRt, cheesesRt} = require ('./models')
//const{json} =require('express')
//const { Model } = require('sequelize/types')
const app = express ()
buildDB()




app.use(express.json())
app.use('/boards', boardsRt)

app.get('/cheeses/:cheese', async(req, res) => {
})

app.get('cheeses', async (req, res) => {
})

app.post('/boards', async(req, res) => {
    console.log(req.body)

    res.sendStatus(200)
})

app.put('/boards', async(req, res) => {
    console.log(req.body)

    await Board.update({
        rating:req.body.rating,
    }, {
        where: {id: req.body.id},
    })
    res.sendStatus(200)
})


app.listen(3000, () =>{
    console.log('The server is live and listening at http://localhost:3000') 
})













//app.listen(3000, () => {
 //   console.log('The server is live and listening at http://localhost:3000')
//})





//app.get('/cheeses/:cheese', async (req, res) =>{
//   let newString = req.params.cheese[0].toUpperCase() + req.params.cheese.slice(1).toLowerCase()
  //const queriedCheese = await Cheese.findOne({where: {title: newString}})
    //if (!queriedCheese) {
     //  res.send("resource not found")
       // return
    //}
    //let {title, description} =  queriedCheese
      // let payload = {
        // title: title,
        //  description: description
   // }
    //res.send(payload)
//})



//app.get('/feta', async (req, res) => {
//    const queriedCheese = await Cheese.findOne({where: {title: 'Feta'}})
//    let {title, description} =  queriedCheese
//    let payload = {
//       title: title,
//        description: description
//    }
//    res.send(payload)
//})

//app.get('/cheeses/start-with-c', async (req, res) => {
//    const dbQuery = await Cheese.findAll()
  //  let startsWithLetter = dbQuery.filter((cheese) => {
   //     if(cheese.title[0] === req.query.startswith.toUpperCase()){
     //       return true
     //   }
   // })
    //if(startsWithLetter.length === 0) {
     //   res.send("resource not found")
    //}else{
     //   let payload = startsWithLetter.map((cheeseObj) => {
       //     return{
           //     title: cheeseObj.title,
            //    description: cheeseObj.description
           // }
       // })
       // res.send(payload)
   // }


    //res.send(startsWithC)
    //res.send(dbQuery)
 //if(cheese.title[0]=== 'C'){
          //  return true
        //}
   // app.get('/user/:id', (req, res) => {
   //     console.log(req.params.id)
   //     res.send(200)
  //  })

//})


//base case


