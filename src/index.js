const dotenv = require('dotenv');
const app = require('./server');

dotenv.config();
const port = process.env.PORT || 3001;

// stablish connection to DB
const { connectToDB } = require('./database');

connectToDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
