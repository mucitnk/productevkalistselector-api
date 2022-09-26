const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  // Enter your own database information here based on what you created
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'muncitk',
    password : '147258369Aa',
    database : 'muncitk'
  }
});
const app = express();
app.use(cors())
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!
app.get('/prosgett', (req, res) => {
  const { id } = req.params;
  db.select('no', 'name', 'photo', 'weblink', 'sku').from('product_table').then(data => {
      res.json(data);
    })
})
app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})