import { Button } from "./InputButton"
import { ClearAll } from "./clearAll"

interface Todo {
    text: string
    done: boolean
}

interface InputProps {
    todoText: string;
    setTodoText: React.Dispatch<React.SetStateAction<string>>;
    putTodo: (todoText: string) => void;
    setTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  }

export const Input: React.FC<InputProps> = ({setTodoText, todoText, putTodo, setTodo}) => {

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
                    setTodo={setTodo}
                    />

                </div>
            </form>
        </section>
    )
}