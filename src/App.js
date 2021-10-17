import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CITIES, NUMBER_DATA, PERSON_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";
import {CARS} from "./data/data";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Persons";
import {Cities} from "./components/City";
import {EventDemo} from "./components/EventDemo";
import {StateDemo} from "./components/StateDemo";
import {PersonBrowser} from "./components/PersonBrowser";
import "./services/firestore";


function App() {
    const citiesFromPersons = [...new Set(PERSON_DATA.map(p => p.city))].map(c => ({stad: c}));


    citiesFromPersons.forEach(c => {
        let teller = 0;
        for (let i = 0; i < PERSON_DATA.length; i++){
            let personCity = PERSON_DATA[i].city;
            if (c.stad === personCity){
                teller++;
            }
        }
        c.aantal = teller;

    })




    return (
        <>
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
            <Numbers numbers={NUMBER_DATA.filter((n) => n > 6)} title="Numbers>6"/>


            <Cars cars={CARS} title="cars"/>
            <Persons persons={PERSON_DATA} title="Persoon"/>
            <Persons persons={PERSON_DATA.sort((n, b) => n.age - b.age)} title="Personen volgens leeftijd"/>
            <Numbers numbers={PERSON_DATA.map((n) => n.age).sort((n, b) => n.age - b.age)}
                     title="leeftijden van de personen"/>
            <Cities cities={CITIES} title="City"/>
            <Cities cities={citiesFromPersons} title="Steden"/>
            <EventDemo title="events"/>
            <StateDemo />
            <PersonBrowser title="Person Browser" persons={PERSON_DATA}/>
        </>


    );
}


export default App;
