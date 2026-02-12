import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "tasks.json";

// create file if not exist
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

app.post("/add-task", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE));
  tasks.push(req.body);
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));

  res.json({ message: "Task saved successfully" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
