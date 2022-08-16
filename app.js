const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {cheese, Cheese} = require('./models')
const app = express ()
buildDB()


app.get('/feta', async (req, res) => {
    const queriedCheese = await Cheese.findOne({where: {title: 'Feta'}})
    let {title, description} =  queriedCheese
    let payload = {
        title: title,
        description: description
    }
    res.send(payload)
})

app.get('/cheeses/start-with-c', async (req, res) => {
    const dbQuery = await Cheese.findAll()
    let startsWithC = dbQuery.filter((cheese) => {
        if(cheese.title[0]=== 'C'){
            return true
        }
        res.send(startsWithC)
    })
    //res.send(dbQuery)

    app.get('/user/:id', (req, res) => {
        console.log(req.params.id)
        res.send(200)
    })

})


//base case
app.listen(3000, () =>{
    console.log('The server is live and listening at http://localhost:3000') 
})


