const express = require("express");
const cors = require("cors"); // allows your frontend to access backend
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // enable CORS so frontend can call this API
app.use(express.json());

// Sample route for games
app.get("/api/games", (req, res) => {
  res.json([
    { name: "Cyber Adventure", price: 50 },
    { name: "Space Raiders", price: 30 },
    { name: "Mystery Quest", price: 20 }
  ]);
});

// Root route
app.get("/", (req, res) => {
  res.send("Gamebells Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});