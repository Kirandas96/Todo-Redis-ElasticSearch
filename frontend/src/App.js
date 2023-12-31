import { useEffect, useState } from "react";
import ToDo from "./components/Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo, searchToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState({title:"",description:""})
  const [des, setDes] = useState("")
  const [search, setSearch] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text.title}
            onChange={(e) => setText({...text,title:e.target.value})}
          />

          <input
            type="text"
            placeholder="Description..."
            value={text.description}
            onChange={(e) => setText({...text,description:e.target.value})}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

          <input
            type="text"
            placeholder="Search ToDos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="add"
            onClick={
              () => searchToDo(search,setToDo)}>
            Search
          </div>
        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          title={item.title}
          description={item.description}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;