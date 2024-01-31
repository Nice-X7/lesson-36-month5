import { Button } from "./InputButton"
import { ClearAll } from "./clearAll"

export const Input = ({setTodoText, todoText, putTodo, todo, setTodo}) => {

    const handleChangeText = (e) => {
        setTodoText(e.target.value)
    }

    return (
        <section>
            <form
            onSubmit={e => {
                e.preventDefault();
                setTodoText("")
                putTodo(todoText)
            }}
            >
                <div className="section">
                    <input 
                    type="text" 
                    placeholder="Введите текст..." 
                    value={todoText} 
                    className="input" 
                    onChange={(e) => handleChangeText(e)}
                    />

                    <Button todoText={todoText}/>

                    <ClearAll 
                    todo={todo} 
                    setTodo={setTodo}
                    />

                </div>
            </form>
        </section>
    )
}