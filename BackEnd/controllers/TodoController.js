const ToDoModel = require("../models/TodoModel");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err));
}



module.exports.searchToDo=async (req, res) => {
    const query = req.query.q; // Get the search query from the request query parameters
  console.log(query);
    try {
      // Use the $text operator to perform the full-text search on the 'title' and 'content' fields
      const result = await ToDoModel.find({ "$or":[
        {text:{$regex:query}}
      ]});
  console.log(result);
      res.send(result);
    } catch (err) {
      console.error('Error searching documents:', err);
      res.status(500).send({ error: 'An error occurred while searching documents' });
    }
  }
  