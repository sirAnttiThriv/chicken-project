import express from 'express';
import chickenApi from './api/chicken.js';

const app = express();

// Your other middleware and routes here...

// Mount the API handler
app.use('/api', chickenApi);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
