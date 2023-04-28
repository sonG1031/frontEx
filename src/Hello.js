import React from "react";

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}안녕 나는 "{name}"이라고 해!
        </div>
    )
}
Hello.defaultProps = {
    name:"무명"
}
export default Hello;