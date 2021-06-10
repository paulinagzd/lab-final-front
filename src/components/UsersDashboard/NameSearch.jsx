import React from "react";
import { Input,Row,Col } from "antd";

const Search = Input.Search;

export const NameSearch = ({ onSearch, ...props }) => (
  <div {...props}>
    <Row>
      <Col span={7} offset={16}>
        <Search 
          placeholder="Enter username "
          onSearch={onSearch}
        />
      </Col>
    </Row>
  </div>
);
