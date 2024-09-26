import { createSignal, type Component } from "solid-js";

interface Props {
    initValue: number;
}

export const Counter: Component<Props> = (props) => {

const [counter,setCounter] = createSignal(props.initValue);

return (
   <> 
<h1>Counter</h1>
<h3>Value: {counter()}</h3>
<button 
onclick={()=> setCounter(prev => ++prev)}
class="bg-blue-500 p-2 mr-2 rounded">+1</button>
<button
onclick={()=> setCounter(prev => --prev)}
class="bg-blue-500 p-2 mr-2 rounded">-1</button>
</>)
}