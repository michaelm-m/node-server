var express = require('express');

const app = express();
const port = 8081;

app.get('/', (req, res) => {
  const responseText = 'Hello from the api server';
  res.send(responseText);
});

app.get('/products', (req, res) => {
  const responseText = `I will return all products`;
  res.send(responseText);
});

app.get('/products/:productId', (req, res) => {
  const responseText = `I will return product: ${req.params.productId}`;
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
