import {useState} from "react";
import {Section} from "./Section";
import {Numbers} from "./Numbers";


function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);

    return <>
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <p>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</p>
    </>
}

function CounterDemo(props){

    const {stateCounter, setCounter} = props;

    return         <Section>
        <h3>de huidige waarde van counter is: {stateCounter}</h3>
        <button onClick={() => setCounter(stateCounter+1)}>verhoog</button>
        <button onClick={() => setCounter(stateCounter-1)}>verlaag</button>
        <button onClick={() => setCounter(stateCounter+1)}>+</button>
        <button onClick={() => setCounter(stateCounter-1)}>-</button>
    </Section>

}

export function StateDemo(props) {
    let [stateCounter, setCounter] = useState(0);

    const [favoriteNumbers, setFavoriteNumbers] = useState([]);
    let toggleFavoriteButtonText = favoriteNumbers.includes(stateCounter) ? " is niet langer een favoriet" : " is een favoriet";

    const addFavoriteNumber = () => {

        if (!favoriteNumbers.includes(stateCounter)) {
            toggleFavoriteButtonText = "is een favoriet";
            return [...favoriteNumbers, stateCounter];
        } else {
            toggleFavoriteButtonText = "is geen favoriet"
            return favoriteNumbers.filter(number => stateCounter !== number);

        }

    }


    return <Section title="state">
        <OnOffDemo/>

<CounterDemo stateCounter={stateCounter} setCounter={setCounter}/>
        <Numbers title="favorite numbers" numbers={favoriteNumbers}/>
        <button
            onClick={() => setFavoriteNumbers(addFavoriteNumber(stateCounter))}>{stateCounter} {toggleFavoriteButtonText} </button>


    </Section>
}