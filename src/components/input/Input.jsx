import { Fragment } from "react";

const Input = (props) => {
    return(
     <Fragment>
        <input type={props.type} placeholder={props.placeholder}/>
     </Fragment>
    )
}

export default Input;