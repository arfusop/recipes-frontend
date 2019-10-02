import React from "react";
import { Card, Icon, Rate } from "antd";

const RecipeCard = () => {
  return (
    <Card
      hoverable
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="delete" key="delete" />
      ]}
    >
      <div classBame="cardLeft">
        Title Category Author Date published/edited
      </div>
      <div classBame="cardRight">
        Rating: <Rate character={<Icon type="star" />} allowHalf />
        Difficulty: <Rate character={<Icon type="scissor" />} allowHalf />
      </div>
    </Card>
  );
};

export default RecipeCard;
