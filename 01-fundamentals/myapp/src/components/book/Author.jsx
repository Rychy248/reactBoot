
export default function Author({name, lastName}) {
    return <>
        <p
            className="card-text"
            style={{
                border:"solid 1px black"
            }}
        >{name} {lastName}</p>
    </>;
};