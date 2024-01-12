import Heading from "../heading";
import Box from "../box";
import "./index.css";
import { Fragment } from "react";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <Box className="amenities__block">
      <Heading>Пам'ятки поблизу</Heading>

      <ul className="amenities__list">
        {list.map(({ id, ...rest }) => (
          <ListItem key={id}>
            <Item {...rest} />
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <Fragment>
      <a href={link}>
        <span className="amenities__name">{name}</span>{" "}
      </a>
    </Fragment>
  );
}
