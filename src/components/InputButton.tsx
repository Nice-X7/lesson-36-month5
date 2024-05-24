interface buttonProps {
    todoText: string
}

export const Button: React.FC<buttonProps> = ({todoText}) => {

    return ( 
        <>
            {todoText === "" ? <button className="button" disabled>Добавить</button> 
            : <button className="button">Добавить</button>}
        </>
    )
}