import Delete from "../assets/garbage.svg"

export const Button = ({todo, setTodo, index}) => {
    
    const remove = (ind) => {
        setTodo(todo.filter((item, id) => {
            if(ind === id) {
                return false 
            } 
            return item
        }))
    }

    return (
        <button className="delete" onClick={() => remove(index)}><img src={Delete} /></button>
    )
}