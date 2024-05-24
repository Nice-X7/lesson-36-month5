interface Todo {
    text: string
    done: boolean
}

interface clearAllProps {
    setTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export const ClearAll: React.FC<clearAllProps> = ({setTodo}) => {
    const clear = () => setTodo([])

    return (
        <button className="clearAll" onClick={clear}>Удалить все</button>
    )
}