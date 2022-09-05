export default function NextSubmitBtn(props) {
    return (
      <>
        <button onClick={props.handleClick} type="error" className={props.classWithName}>{props.name}</button>
      </>
    );
  }