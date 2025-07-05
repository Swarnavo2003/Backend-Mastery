import express from "express";

const app = express();

// middleware
app.use(express.json());

// dummy data
const data = [
  { id: 1, name: "Swarnavo", email: "swarnavo@gmail.com" },
  { id: 2, name: "Aditya", email: "aditya@gmail.com" },
  { id: 3, name: "Rupak", email: "rupak@gmail.com" },
];

// GET
app.get("/api/v1/welcome", (req, res) => {
  console.log("Request is coming");

  res.status(200).send("Welcome to our API Endpoint");
});

// GET - Dummy Data
app.get("/get-users", (req, res) => {
  res.status(200).json(data);
});

// GET - Using Params
app.get("/get-user/:id", (req, res) => {
  const { id } = req.params;
  const user = data.find((user) => user.id === Number(id));
  res.status(200).json(user);
});

// GET - Using Query
app.get("/get-user", (req, res) => {
  const { name, age } = req.query;
  res.status(200).json({ name, age });
});

// POST
app.post("/create-user", (req, res) => {
  const { name, email } = req.body;

  data.push({ id: data.length + 1, name, email });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data,
  });
});

app.put("/update-user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = data.find((user) => user.id === parseInt(id));

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data,
  });
});

app.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;
  const newData = data.filter((user) => user.id !== parseInt(id));

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    newData,
  });
});

app.listen(8000, () => {
  console.log("Server running on port number 8000");
});
