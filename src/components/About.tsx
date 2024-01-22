import React from "react";
import { Descriptions } from "antd";

const items = [
  {
    key: "1",
    label: "Developer",
    children: "toshkaaa",
  },
  {
    key: "2",
    label: "Telephone",
    children: "+7 999 888777",
  },
  {
    key: "3",
    label: "Live",
    children: "Lipetsk",
  },
  {
    key: "4",
    label: "Address",
    span: 2,
    children: "Lipetsk Region, Russia",
  },
  {
    key: "5",
    label: "Remark",
    children: "First version",
  },
];

const About:React.FC = () => (
  <div style={{ marginLeft: "120px", marginTop: "20px" }}>
    <Descriptions title="Information" layout="vertical" items={items} />{" "}
  </div>
);
export default About;
