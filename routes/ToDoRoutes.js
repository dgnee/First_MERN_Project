const { Router } = require("express");

const {getToDo, saveToDo, deleteToDo, updateToDo} = require("../controllers/ToDoController");


const router = Router();

// create a route
router.get('/', function(req,res){
    res.send('Hello World from ToDoRoutes.js');
});


router.get("/get-todo", getToDo);


router.post("/save-todo", saveToDo); 
router.post("/delete-todo", deleteToDo);
router.post("/update-todo", updateToDo);

module.exports = router; // export the router
