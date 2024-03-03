import React from 'react';
import { Table } from 'antd';
import "./style.css";
const columns1 = [
      {
        title: '验证延时',
        key: 'data1',
        dataIndex:"data1"
      },
      {
        title: '验证吞吐',
        key: 'data2',
        dataIndex:"data2"
      },
      {
        title: '验证开销',
        key: 'data3',
        dataIndex:"data3"
      }
];
const data1 = [
    {
        data1:"x",
        data2:"y",
        data3:"z",

    },
   
];


const MyLeftTopComponent = () => (
    <div>
        <Table className="table-transparent"
            columns={columns1}
            dataSource={data1}
            pagination={false}
            bordered={true}
            
        />
    </div>

  
);
export default MyLeftTopComponent;