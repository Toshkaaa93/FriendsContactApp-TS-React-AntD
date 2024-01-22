import React from 'react';
import { Layout, Typography } from 'antd';
const { Header } = Layout;

const { Title } = Typography;

const MyHeader:React.FC
 = () => {
    return (
        <Header
        style={{display:'flex', alignItems: 'center', textAlign:'center', justifyContent:'center',marginBottom: '10px'}}
        className="site-page-header"
        title="Header"
      > 
      <Title style={{color:'white', textAlign:'center'}} level={4}>FriendsContactApp</Title>
      </Header>
    );
};

export default MyHeader;
    