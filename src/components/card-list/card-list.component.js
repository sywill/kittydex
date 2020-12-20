import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.kitties.map((kitty) => (
        <Card key={kitty.id} kitty={kitty} />
      ))}
    </div>
  );
};
