const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
PORT = 8080;

app.use(cors());
app.use(express.json());

API_URL = `http://localhost:${PORT}`;

let quizData = [];

const getQuizData = () => {
  fs.readFile("./data/quiz.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    quizData = JSON.parse(data);
  });
};

getQuizData();

app.get("/quiz", (req, res) => {
  res.json(quizData);
});

app.get("/quiz/:id", (req, res) => {
  let quiz = quizData;
  let questionId = req.params.id;

  const quizQuestion = quiz.find((question) => {
    return questionId === question.id;
  });

  if (quizQuestion) {
    res.json(quizQuestion);
  } else {
    res.status(404).send("this quiz question does not exist");
  }
});

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
