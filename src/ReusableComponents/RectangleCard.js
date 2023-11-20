export default function RectangleCard(props){
    const myClass = `rectangle ${props.type}`

    return(
        <div >
        <span>
        {props.selected ? <button className={myClass + " selected"} >{props.content} </button> : <button className={myClass} onClick={props.onClick}>{props.content}</button>}
        </span>
        </div>
    )
}