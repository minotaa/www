export default function Button(props) {
    return (
        <a href={props.link} className="button">
            {props.display}
        </a>
    )
}