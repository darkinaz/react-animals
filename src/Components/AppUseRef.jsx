import { useRef, useState, useEffect } from "react";

function App() {
    const counter = useRef(0);
    const crazyRef = useRef();
    const [turboCounter, setTurboCounter] = useState(0);



    const clicker = () => {
        counter.current++;
        
    }
    const turboClicker = () => {
        setTurboCounter(turboCounter + 1);
    }


    useEffect(() => {

        console.log(crazyRef.current);
        crazyRef.current.style.fontSize = "50px";

        document.querySelector('crazy').style.color = "blue"
    }, []);

    return (<>
        <h1>Ref: {counter.current}</h1>
        <h1>State: {turboCounter}</h1>
        <button onClick={clicker}>Ref: Ja Ja</button>
        <button onClick={turboClicker}>State: Ja Ja</button>
        <div className="crazy">CRAZY!!!</div>
    </>);
}
export default App;