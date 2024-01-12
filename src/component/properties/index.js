import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";

export default function Properties({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  check_in_instructions,
}) {
  return (
    <Box className="properties__block">
      <Heading>Додаткові властивості</Heading>

      <storng className="properties-title">Правила дому</storng>
      <ListItem>
        <span className="properties-content ">{house_rules}</span>
      </ListItem>

      <storng className="properties-title">Політика скасування</storng>
      <ListItem>
        <span className="properties-content">{cancellation_policy}</span>
      </ListItem>

      <storng className="properties-title">Місцевий транспорт</storng>
      <ListItem>
        <span className="properties-content">{local_transportation}</span>
      </ListItem>

      <storng className="properties-title">Мови хоста</storng>
      <ListItem>
        <span className="properties-content">{host_languages}</span>
      </ListItem>

      <storng className="properties-title">Спеціальні пропозиції:</storng>
      <ListItem>
        <span className="properties-content">{special_offers}</span>
      </ListItem>

      <storng className="properties-title">Інструкції щодо реєстрації</storng>
      <ListItem>
        <span className="properties-content">{check_in_instructions}</span>
      </ListItem>
    </Box>
  );
}
