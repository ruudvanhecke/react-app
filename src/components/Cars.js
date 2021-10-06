import {COLORS} from "../data/data";
import {Section} from "./Section";
import {Card} from "./Card";


function ColoredElement(props) {
    const {name, value} = props;
    const specialStyle = {margin: "0.5em", backgroundColor: COLORS.find(element => element.dutch === value).english};
    if (!value) return null;
    return <div style={specialStyle}>{name} : {value}</div>

}

function Element(props) {
    const {name, value} = props;
    if (!value) return null;
    if (name === "kleur") {
        return <ColoredElement name="kleur" value={value}/>
    }
    return <div>{name} : {value}</div>


}


function Car(props) {
    const {car} = props;
    return <Card extraClass="big" title={car.name}>
        <Element name="merk" value={car.brand} />
        <Element name="type" value={car.type} />
        <Element name="kleur" value={car.color} />
    </Card>
}

export function Cars(props) {
    const {cars, title} = props;

    return <Section title={title}>
        {cars.map((c) => <Car car={c} key={c.name}/>)}
    </Section>
}