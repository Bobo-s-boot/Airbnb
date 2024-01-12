import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Типи номерів</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="name-rating">
        <span className="reveiews__name">{guestName}</span>
        <span className="reveiews__rating">Рейтинг: {rating}</span>
      </div>
      <span className="review">{review}</span>
    </Box>
  );
}
