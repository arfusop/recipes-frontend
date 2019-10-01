import React from "react";
import { Button, Select } from "antd";
import { categories } from "../utils/options";

const DashHeader = () => {
  return (
    <div className="header">
      <div className="headerOptions">
        <div className="left">
          <span className="title">All Recipes</span>
          <div className="addNew">
            <Button size="medium" shape="circle" icon="plus" />
            <span>Add new</span>
          </div>
        </div>
        <div className="right">
          <div className="filterOptions">
            <Select showArrow mode="multiple" style={{ width: "100%" }}>
              {categories.map((cat, i) => (
                <Select.Option key={i} value={cat}>
                  {cat}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="headerDescription">Description</div>
    </div>
  );
};

export default DashHeader;
