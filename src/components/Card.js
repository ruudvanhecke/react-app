export function Card(props){
    const {children,title,extraClass} = props;
    const cardClass = "card " + extraClass;
console.log(children)
    return <div className={cardClass} onClick={() =>  alert(title || (typeof children==='object' ? children[0].props.children : children))}>
        {title && <h4>{title}</h4>}
        {children}
    </div>
}