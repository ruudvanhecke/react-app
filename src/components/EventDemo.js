import {Section} from "./Section";

export function EventDemo(props) {
    const aangepastStyle = {margin: "0.5em", backgroundColor:"red"};

    return <Section title="Events">
        <div style={aangepastStyle} onClick={(e) => {alert('div is clicked'); e.stopPropagation()} }>
        <a onClick={(e) => {alert('Link is clicked'); e.preventDefault(); e.stopPropagation()}  } target='_blank' href="https://www.thomasmore.be/">dit is een link met een href - en - </a>
            <button onClick={(e) => {alert('button is clicked'); e.stopPropagation()}}>dit is een button</button>
        </div>
    </Section>

}