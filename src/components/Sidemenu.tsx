import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    UnorderedListOutlined,
    UserOutlined,
    InfoCircleOutlined,
  } from "@ant-design/icons";

const SideMenu:React.FC = () => {
    const navigate = useNavigate()
    return (
        <Menu  
        onClick={({key}) => {
            navigate(key)
        }}
         items={[
            {label:'My Contacts',key:'/', icon:<UnorderedListOutlined />},
            {label:'My Profile',key:'/profile', icon: <UserOutlined /> },
            {label:'About',key:'/about', icon:<InfoCircleOutlined />},
        ]}>
        </Menu>
    );
};

export default SideMenu;