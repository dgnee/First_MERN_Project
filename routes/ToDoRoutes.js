const { Router } = require("express");

const router = Router();

const {getToDo, saveToDo, deleteToDo, updateToDo} = require("../controllers/ToDoController");

router.get("/get-todo", getToDo);
// create a route
router.post("/save-todo". saveToDo); 
router.post("/delete-todo", deleteToDo);
router.post("/update-todo", updateToDo);

module.exports = router; // export the router