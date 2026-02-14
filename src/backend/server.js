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

  // push a data
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

//get a data
app.get("/tasks/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  const user = data.find(u => u.id === req.params.id);

  if (!user) return res.json({ tasks: [] });

  res.json({ tasks: user.tasks });
});

//delete a data
app.delete("/tasks/:userId/:taskId", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));

  const { userId, taskId } = req.params;

  const user = data.find(u => u.id === userId);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.tasks = user.tasks.filter(task => task.taskId !== taskId);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ message: "Task deleted successfully" });
});

//put the data
app.put("/tasks/:userId/:taskId", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));

  const { userId, taskId } = req.params;
  const { status } = req.body;

  const user = data.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const task = user.tasks.find(t => t.taskId === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = status;   // update here ✅

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ message: "Status updated successfully" });
});




app.listen(3000, () => console.log("Server running on port 3000"));
