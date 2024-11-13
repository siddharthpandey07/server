import express from 'express';

const app = express();
const port = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const response = await fetch('http://localhost/sayHello');
const data = await response.json();
console.log('Response from /sayHello:', data);