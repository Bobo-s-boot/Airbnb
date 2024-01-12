import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import "./index.css";
import pool from "./logos/pool.svg";
import gym from "./logos/gym.svg";
import breakfast from "./logos/breakfast.svg";
import wi_fi from "./logos/wi-fi.svg";
import parking from "./logos/parking.svg";
import pet from "./logos/pet.svg";
import transfer from "./logos/transfer.svg";
import concierge from "./logos/concierge.svg";
import child from "./logos/child.svg";
import service from "./logos/service.svg";

export default function Amenities() {
  return (
    <Box className="amenities__block">
      <Heading>Зручності</Heading>

      <ul className="amenities__list">
        <ListItem>
          <img src={pool} alt="pool" />
          <span className="amenities-content">Басейн</span>
        </ListItem>
        <ListItem>
          <img src={gym} alt="gym" />
          <span>Cпортзал</span>
        </ListItem>
        <ListItem>
          <img src={breakfast} alt="breakfest" />
          <span className="amenities-content">Безкоштовний сніданок</span>
        </ListItem>
        <ListItem>
          <img src={wi_fi} alt="Wi-Fi" />
          <span className="amenities-content">Безкоштовний Wi-Fi</span>
        </ListItem>
        <ListItem>
          <img src={parking} alt="parking" />
          <span className="amenities-content">
            Безкоштовний вулечний паркінг
          </span>
        </ListItem>
        <ListItem>
          <img src={pet} alt="pet" />
          <span className="amenities-content">
            Дозволено розміщення з домашніми тваринами
          </span>
        </ListItem>
        <ListItem>
          <img src={transfer} alt="transfer" />
          <span className="amenities-content">Трансфер до/з аеропорту</span>
        </ListItem>
        <ListItem>
          <img src={concierge} alt="concierge" />
          <span className="amenities-content">Консьєрж-сервіс</span>
        </ListItem>
        <ListItem>
          <img src={service} alt="service" />
          <span className="amenities-content">Обслуговування номерів</span>
        </ListItem>
        <ListItem>
          <img src={child} alt="child" />
          <span className="amenities-content">Підходить для дітей</span>
        </ListItem>
      </ul>
    </Box>
  );
}
