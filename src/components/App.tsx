import { useState } from "react"
import { Header } from "./header"
import { Input } from "./input"
import { Content } from "./Content"

interface Todo {
  text: string
  done: boolean
}

export const App: React.FC = () => {

  const [todo, setTodo] = useState<Array<Todo>>([])
  const [todoText, setTodoText] = useState<string>("")

  const putTodo = (todoText: string) :void => {
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