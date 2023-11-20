
export default function RoundButton(props) {
  const myClass = `button ${props.type}`;
  return (
    <div>
      {props.disabled ? (
        <button disabled className="button disabled" onClick ={props.onClick}>
          {props.content}
        </button>
      ) 
      :
      JSON.stringify(props.selectedArray) === JSON.stringify([false, false, false, false]) ? (
        <button disabled className="button nextDisabled" onClick ={props.onClick}>
          {props.content}
        </button>
      )
      :
      (
        <button className={myClass} onClick={props.onClick}>
          {props.content}
        </button>
      )}
    </div>
  );
}

