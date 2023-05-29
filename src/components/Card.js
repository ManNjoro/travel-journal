import{FaMapMarkerAlt}  from "react-icons/fa"
export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="Nairobi city" className="img"></img>
            <div className="card-content">
            <span className="location"><FaMapMarkerAlt color="orange"/>{props.location} <a href={props.link} className="link">VIEW ON GOOGLE MAPS</a></span>
                <span className="title"><h1>{props.title}</h1></span>
                <span className="date"><h4>{props.startDate} - {props.endDate}</h4></span>
                <span className="description"><p>{props.description}</p></span>
            </div>
        </div>
    )
}