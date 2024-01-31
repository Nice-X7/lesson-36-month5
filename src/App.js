import { useState } from "react"
import { Header } from "./components/header"
import { Input } from "./components/input"
import { Content } from "./components/Content"


export const App = () => {

  const [todo, setTodo] = useState([])
  const [todoText, setTodoText] = useState("")

  const putTodo = (todoText) => {
    if (todoText) {
      setTodo([...todo, { text: todoText, done: false }])
    }
  }


  return (
    <div className="app">
      <Header />

      <Input
        todoText={todoText}
        setTodoText={setTodoText}
        putTodo={putTodo}
        setTodo={setTodo}
      />

      <Content
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  )
}