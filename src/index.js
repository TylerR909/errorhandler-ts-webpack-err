import express from 'express';
import errorhandler from 'errorhandler';

const app = express();

app.use(errorhandler());

app.get('/', (req, res) => {
  res.send('hi');
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
