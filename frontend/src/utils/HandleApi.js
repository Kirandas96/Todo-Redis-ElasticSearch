import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    const{title,description}=text
console.log(title,description);
    axios
        .post(`${baseUrl}/save`, {title,description})
        .then((data) => {
            console.log(data);
            setText({title:"",description:""})
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const searchToDo = (search,setToDo) => {
    console.log(search)
    axios
        .get(`${baseUrl}/search?q=${search}`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

export { getAllToDo, addToDo, updateToDo, deleteToDo, searchToDo}