const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo, searchToDo } = require("../controllers/TodoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

router.get("/search",searchToDo)

module.exports = router;