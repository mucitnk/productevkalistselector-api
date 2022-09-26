const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  // Enter your own database information here based on what you created
  client: 'pg',
  connection: {
    host : 'process.env.DATABASE_URL',
    ssl : true,
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
app.listen(process.env.PORT || 3000, ()=> {
  console.log('app is running on port ${process.env.PORT}');
})