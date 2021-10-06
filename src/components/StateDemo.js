import {useState} from "react";
import {Section} from "./Section";

export function StateDemo(props) {
    const [isOn, setIsOn] = useState(false);
    let [stateCounter, setCounter] = useState(0);

    return <Section title="state">
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <Section>
        <h3>de huidige waarde van counter is: {stateCounter}</h3>
        <button onClick={() => setCounter(stateCounter++)}>verhoog</button>
        <button onClick={() => setCounter(stateCounter--)}>verlaag</button>
        <button onClick={() => setCounter(stateCounter++)}>+</button>
        <button onClick={() => setCounter(stateCounter--)}>-</button>
</Section>




    </Section>
}