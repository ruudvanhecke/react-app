import {Section} from "./Section";
import {Card} from "./Card";

function City(props) {
    const {city} = props;
    return <Card >
        <div>{city.stad}</div>
        <div>{city.numberOfPersons}</div>
    </Card>
}

export function Cities(props) {

    const {cities,title} = props;

    return    <Section title={title}> {cities.map((n) => <City city={n} key={n.stad}/>)}</Section>


}