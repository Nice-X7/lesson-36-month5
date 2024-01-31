export const ClearAll = ({setTodo}) => {
    const clear = () => setTodo([])

    return (
        <button className="clearAll" onClick={clear}>Удалить все</button>
    )
}