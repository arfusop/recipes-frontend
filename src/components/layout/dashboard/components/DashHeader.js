import React from "react";
import { Button, Input, Select, Tooltip } from "antd";
import { categories } from "../utils/options";

const DashHeader = () => {
  return (
    <div className="header">
      <div className="headerOptions">
        <div className="left">
          <span className="title">All Recipes</span>
          <div className="addNew">
            <Tooltip title="Add new">
              <Button size="small" shape="circle" icon="plus" />
              {/* <span>Add new</span> */}
            </Tooltip>
          </div>
        </div>
        <div className="right">
          <div className="filterOptions">
            <Select
              showArrow
              mode="multiple"
              placeholder="Categories"
              style={{ width: "100%" }}
            >
              {categories.map((cat, i) => (
                <Select.Option key={i} value={cat}>
                  {cat}
                </Select.Option>
              ))}
            </Select>
            <Input.Search placeholder="Search keywords" enterButton />
          </div>
        </div>
      </div>
      <div className="headerDescription">Description</div>
    </div>
  );
};

export default DashHeader;
