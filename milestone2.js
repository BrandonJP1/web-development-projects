const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ✅ Serve static files from the "Milestone Project" folder
app.use(express.static(path.join(__dirname, 'Milestone Project')));

// ✅ Handle form submission (optional, but useful)
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submitted:', { name, email, message });
  res.send('Thanks for your message!');
});

// (Optional) Redirect "/" to the contact page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Milestone Project', 'contact.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
