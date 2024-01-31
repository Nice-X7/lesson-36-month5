import {Button} from "./button"

export const Content = ({todo, setTodo}) => {

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