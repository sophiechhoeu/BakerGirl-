console.log('env is: ', process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = require('./app');
const port = 7000;
app.listen(port, () => {
  console.log(`Cakes API Server running on ${port}`);
});
