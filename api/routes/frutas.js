const fs = require('fs')
const express = require('express');
var router = express.Router();
const myJsonPath = __dirname + '/../frutas.json';
var store = JSON.parse(fs.readFileSync(myJsonPath));

router.get('/frutas',function(req, res){
  res.json(store);
});

router.post('/fruta',function(req, res){
  const { name, imageUrl, price } = req.body;
  store.push({
    id: store.length === 0 ? 1 : Number(store[store.length - 1].id) + 1,
    name,
    imageUrl,
    price
  });
  fs.writeFile(myJsonPath, JSON.stringify(store));
  res.json({message: 'fruta creada'});
});

router.get('/fruta/:fruta_id',function(req, res){
  const fruta = store.find( f => f.id == req.params.fruta_id);
  res.json(fruta);
});

router.delete('/fruta/:fruta_id',function(req, res){
  const newStore = store.filter( f => f.id != req.params.fruta_id);
  store = newStore;
  fs.writeFile(myJsonPath, JSON.stringify(newStore), () => {
    console.log('writed');
  });
  res.json(newStore);
});

router.put('/fruta/:fruta_id',function(req, res){
  const fruta = store.find( f => f.id == req.params.fruta_id);
  if (typeof fruta !== 'undefined'){
    for(var i = 0; i < store.length; i++) {
      if (store[i].id === fruta.id) {
          store[i]=req.body
          break;
       }
    }
    fs.writeFile(myJsonPath, JSON.stringify(store) , function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });
  }

  res.json(store);
});

module.exports = router;