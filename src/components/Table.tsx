import React from "react";
import { Table, Image, Row, Col, TableColumnsType, TableProps } from "antd";
import { useres } from "../data";

interface DataType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  job: string;
  avatar: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "FirstName",
    dataIndex: "first_name",
    key: "first_name",
    sorter: (a, b) => (a.first_name > b.first_name ? 1 : -1),
  },
  { title: "LastName", dataIndex: "last_name", key: "last_name" },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Age",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Job",
    dataIndex: "job",
    key: "job",
    filters: [
      {
        text: "Programmer",
        value: "Programmer",
      },
      {
        text: "Teacher",
        value: "Teacher",
      },
      {
        text: "Doctor",
        value: "Doctor",
      },
      {
        text: "Engineer",
        value: "Engineer",
      },
      {
        text: "Manager",
        value: "Manager",
      },
    ],
    onFilter:(value,record) => record.job.includes(value)
  },
  {
    title: "Photo",
    dataIndex: "avatar",
    key: "avatar",
    render: (image) => <Image src={image} />,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const dataSource: DataType[] = useres.map((item) => ({
  ...item,
  key: item.id,
}));

const MyTable: React.FC = () => (
  <Row>
    <Col xs={24} md={{ span: 24, offset: 10 }}>
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={{
          defaultPageSize: 3,
          showSizeChanger: true,
          pageSizeOptions: [1, 2, 3, 4, 5],
        }}
      />
    </Col>
  </Row>
);

export default MyTable;
