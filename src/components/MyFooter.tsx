import React from 'react';
import {Layout} from 'antd'

const {Footer} = Layout

const MyFooter:React.FC = () => {
    return (
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        FriendsContactApp ©{new Date().getFullYear()} Created by toshkaaa
      </Footer>
    );
};

export default MyFooter;