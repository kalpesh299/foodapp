const mongoose = require('mongoose');
const express = require ("express");
const app = express();
const fs = require('fs');
app.use(express.json());

const PORT= 8000;


const DBS ='mongodb+srv://kalpesh:patil@cluster0.eibp4.mongodb.net/yourorder?retryWrites=true&w=majority'
mongoose.connect(DBS,{ 
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology:true,
      useFindAndModify:false
}).then(()=>{
      console.log(`connection succesfull`)
}).catch((err)=> console.log(`no connection`));

   const userschema= new mongoose.Schema({

      name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }

   })

   var order = mongoose.model('order',userschema);

   app.post('/addcart', (req, res) => {
      var saveorder = new order({
          name: req.body.name,
          image: req.body.image,
          price: req.body.price,
          description: req.body.description
      });
  
      saveorder.save().then((result) => {
          console.log('Success', result)
      }, (err) => {
          console.log(err)
      })
      res.json({ result: 'Success' })
  });
  
  app.get('/cart', (req, res) => {
      order.find({}, (err, data) => {
          res.json(data)
      })
  })
  
  app.get('/fooddata', (req, res) => {
      fs.readFile('data.json', "UTF-8", (err, data) => {
          var obj = JSON.parse(data);
          res.send(obj);
      })
  })

  //for delete  
  app.delete('/deleteitem', function (req, res) {
  
      order.deleteOne({ _id: req.body._id }).then((result) => {
          console.log(result);
          res.json(result); 
      }, (err) => console.log(err));
  })
  
  app.delete('/deletemany', function (req, res) {
  
      order.deleteMany().then((result) => {
          console.log(result);
          res.json(result);
      }, (err) => console.log(err));
  })
  

app.listen(8000,()=>{
      console.log(`listning on port no ${PORT} `)
})