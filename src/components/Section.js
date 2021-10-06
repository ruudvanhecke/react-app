
export function Section(props){
        const {title,children} = props;

    return    <div className="section">
        <button onClick={() => alert('hallo')}>Klik hier</button>
        <h1>{title}</h1>
       {children}
    </div>

}