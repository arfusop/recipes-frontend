import React from "react";
import { Card, Icon, Rate } from "antd";
import { format } from "date-fns";

const RecipeCard = () => {
  const stars = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
  const difficulty = Math.floor(Math.random() * (5 - 4 + 1)) + 4;

  return (
    <Card
      hoverable
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="delete" key="delete" />
      ]}
      cover={
        <img
          src="https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"
          alt="food"
        />
      }
    >
      <div className="cardBody">
        <div className="cardLeft">
          <span className="recipeTitle">Homemade Pizza</span>
          <span>Dinner</span>
          <span>{format(new Date(), "mm/dd/yyyy hh:mm a")}</span>
        </div>
        <div className="cardRight">
          Rating: <Rate allowHalf disabled defaultValue={stars} />
          Difficulty:{" "}
          <Rate
            disabled
            defaultValue={difficulty}
            character={<i className="fas fa-skull-crossbones" />}
            style={{ color: "tomato", fontSize: 20 }}
            allowHalf
          />
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
