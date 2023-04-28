import React from "react";

function Hello(props) {
    return (
        <div style={{color: props.color}}>안녕 나는 "{props.name}"이라고 해!</div>
    )
}
Hello.defaultprops = {
    name:"무명"
}
export default Hello;