const express = require('express')

const app = express();

const{products} = require('./Data')

app.get('/', (req,res)=>{

    res.send('<h1>Welcome<h1><a href = "/api/products/:ID"> products<a>')
})

app.get('/api/products/:ID', (req,res)=>{
    
    console.log(req)

    console.log(req.params)

    const{ID} = req.params;

    const singleProduct = products.find((product)=>product.id === Number(ID))

    if(!singleProduct){

        return res.status(404).send('Product not found.')
    }

    else{
    
        res.json(singleProduct)
        
    }

    app.get('/api/v1/query', (req, res)=>{

        console.log(req.query)

        res.send('Hello')
    })

})

app.listen(5000, ()=>{
    console.log('Server on port 5000')
})