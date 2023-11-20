export default function SquareCard(props){
    const myClass = `square ${props.type}`
    return(
        <div >
        <span>
        {props.disabled ? <button  disabled className="square disabled">{props.content} {props.img}</button> : <button onClick ={props.onClick} className={myClass}>{props.content} {props.img}</button>}
        </span>
        </div>
    )
}