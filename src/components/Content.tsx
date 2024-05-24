import {Button} from "./button"

interface Todo {
    text: string
    done: boolean
}

interface contentProps {
    todo: Todo[]
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Content: React.FC<contentProps> = ({todo, setTodo}) => {

    return (
        <section className="todos">
             
            {todo.map((item, index) => {
                return (
                    <div className="todo" key={index}>
                        <input type="checkbox" className="checkbox"/>

                        <span className="todoText"> {item.text} </span>

                        <Button todo={todo} setTodo={setTodo} index={index}/> 
                    </div>
                )
            })}
            
        </section>
    )
}