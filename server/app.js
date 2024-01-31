const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

//Default items list
const tasksList = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: false,
  },
];

// WebSockets logic
const wss = new WebSocket.Server({ port: 8080 });

let webSocketInstance = null;

wss.on("connection", function connection(ws) {
  console.log("Connected");
  webSocketInstance = ws;
  ws.on("message", function incoming(message) {
    console.log(`Message received: ${message}`);
  });

  ws.on("close", function close() {
    console.log("Connection close");
  });
});

//Get Tasks list
app.get("/tasks", (req, res) => {
  res.status(200).json(tasksList);
});

//Create new task
app.post("/task", (req, res) => {
  const newUid = Date.now();
  const task = { ...req.body, status: "open", id: newUid };
  tasksList.push(task);

  refreshDataBySocket(webSocketInstance, tasksList);

  res.status(200).json(tasksList);
});

//Delete task by Id
app.delete("/task/:id", (req, res) => {
  const taskId = +req.params.id;
  const indexToDelete = tasksList.findIndex((item) => item.id === taskId);
  tasksList.splice(indexToDelete, 1);
  refreshDataBySocket(webSocketInstance, tasksList);
  res.status(200).json(tasksList);
});

//Update task by Id
app.put("/task/:id", (req, res) => {
  const taskId = +req.params.id;
  const task = req.body;

  const index = tasksList.findIndex((item) => item.id === taskId);

  tasksList[index] = { ...task };

  refreshDataBySocket(webSocketInstance, tasksList);

  res.status(200).json(tasksList);
});

const refreshDataBySocket = (wsInstance, data) => {
  if (wsInstance) {
    wsInstance.send(
      JSON.stringify({
        type: "Refresh",
        body: data,
      })
    );
  }
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
