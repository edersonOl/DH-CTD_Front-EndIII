export function QuintaAulaItem(props) {

    return (

        <li>
            <img src={props.item.image} />
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
        </li>

    )

}