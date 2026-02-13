import express from "express";
import fs from "fs";
import cors from "cors";
import crypto from "crypto";   // ✅ ADD THIS

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "tasks.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

app.post("/add-task", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));

  const { id, taskDetails } = req.body;

  // ✅ Add random unique ID to task
  const taskWithId = {
    ...taskDetails,
    taskId: crypto.randomUUID()
  };

  const user = data.find(u => u.id === id);

  if (user) {
    user.tasks.push(taskWithId);
  } else {
    data.push({
      id,
      tasks: [taskWithId]
    });
  }

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Task saved correctly", task: taskWithId });
});

app.listen(3000, () => console.log("Server running on port 3000"));
