import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import people from "./logos/people.svg";
import bed from "./logos/bed.svg";
import bedroom from "./logos/bedroom.svg";
import bath from "./logos/bathroom.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="details__block">
      <Heading>Деталі властивості:</Heading>

      <ul className="details__list">
        <ListItem>
          <img src={people} alt="people" />
          <span className="details-content">{guests} гості</span>
        </ListItem>

        <ListItem>
          <img src={bedroom} alt="bedrooms" />
          <span className="details-content">{bedrooms} спальня</span>
        </ListItem>

        <ListItem>
          <img src={bed} alt="beds" />
          <span className="details-content">{beds} ліжко</span>
        </ListItem>

        <ListItem>
          <img src={bath} alt="baths" />
          <span className="details-content">{baths} ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
