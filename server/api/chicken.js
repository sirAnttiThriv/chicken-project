import express from 'express';
const app = express();

app.get('/data', (req, res) => {
  const data = { message: 'This is an example API endpoint in Nuxt 3!' };
  res.json(data);
});

export default app;