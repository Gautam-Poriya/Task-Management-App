
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user-routes");
const taskRouter = require("./routes/task-routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./database");
const app = express();
// app.use(cors());

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/task",taskRouter)
// app.use("/api", (req, res) => {
//   res.status(200).json({
//     message: "Hello express",
//   });
// });

app.listen(5001, () => {
  console.log(`server is running at: http://localhost:5001`);
});
