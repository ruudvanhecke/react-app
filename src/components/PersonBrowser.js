import {Person} from "./Persons";
import {Section} from "./Section";
import {useState} from "react";


export function PersonBrowser(props) {
    const {title, persons} = props;
    let [showPerson, setShowPerson] = useState(persons[0]);
    let index = 0;

    return <Section title={title}>
        <button onClick={() => setShowPerson(showPerson-1)}>back</button>
        <Person person={showPerson}/>
        <button onClick={() => setShowPerson(showPerson+1)}>></button>
    </Section>
}