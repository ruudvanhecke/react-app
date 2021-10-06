import {Section} from "./Section";
import {Card} from "./Card";


export function Number(props) {
    const {number} = props;

    return <Card children={number}/>
}

export function Numbers(props) {

    const {numbers, title} = props;

    return  <Section title={title} >{numbers.map((val, key) => <Card key={key}>{val}</Card>)}</Section>

}

