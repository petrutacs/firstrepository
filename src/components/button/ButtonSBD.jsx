import { Fragment } from "react";

const ButtonSBD = (props) => {
    
    return (
      <Fragment>
        <button style={{ background: props.color }}>
            {props.textButton}
        </button>
        </Fragment>
    );
}

export default ButtonSBD;