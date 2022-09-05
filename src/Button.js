export default function Button(props) {
    return (
      <>
        <button onClick={props.navFn} className="Each--Button">{props.name}</button>
      </>
    );
  }