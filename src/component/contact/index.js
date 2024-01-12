import "./index.css";
import ListItem from "../list-item";
import Heading from "../heading";
import logo from "./contact.svg";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <ListItem>
        <a href={image}>
          <img src={logo} alt="contact" />
        </a>
        <Heading>Господар - {name}</Heading>
      </ListItem>

      <div className="contact__sub-block">
        <span className="contact__sub-value">{phone}</span>

        <span className="contact__sub-value">{response_time} відкгуки</span>

        <span className="contact__sub-value">
          {response_rate}% відсотків швидкості відгуку
        </span>
      </div>

      {info && <span className="contact__sub-value">{info}</span>}
    </div>
  );
}
