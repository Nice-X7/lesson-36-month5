export const Button = ({todoText}) => {

    return ( 
        <>
            {todoText === "" ? <button className="button" disabled>Добавить</button> 
            : <button className="button">Добавить</button>}
        </>
    )
}