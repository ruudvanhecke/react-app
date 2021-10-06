import {Section} from "./Section";
import {Card} from "./Card";


function Person(props) {
    const {person} = props;
    return <Card title={person.name}>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </Card>
}

export function Persons(props){
    const {persons,title} = props;

    return   <Section title={title}>{persons.map((n) => <Person person={n} key={n.id}></Person>)}</Section>


}

export function PersonsAge(props){
    const {persons,title} = props;

    return    <div className="section">
        <h1>{title}</h1>
        {persons.map((n) => <Person person={n} key={n.id} />)}

    </div>

}