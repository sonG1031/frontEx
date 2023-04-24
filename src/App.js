import { useState } from "react";

const App = () => {
    var itemDataArray = [
      {
        name:"CPU",
        price:"462984",
        quantity:1,
      },
      {
        name:"MainBoard",
        price:"112053",
        quantity:1,
      },
      {
        name:"Memory",
        price:"79608",
        quantity:2,
      }
    ]
    
    const [items, setItems] = useState(itemDataArray);
    const totalprice = items.reduce(function(sum,item) {
      return sum + item.price * item.quantity
    }, 0);

    return (
      <>
        <ul>
        {items.map((item)=> (
          <li key={item.name}>
            {item.name}:{item.price} x {item.quantity} = {item.price * item.quantity}원
          </li>
        ))}
       </ul>
       <p>합계: {totalprice}원</p>
      </>
    )
};

export default App;