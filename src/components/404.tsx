import React from 'react';
import { Empty } from 'antd';

const NotFound:React.FC = () => {
    return (
        <div style={{ color:'white', marginLeft:'550px' }}>
            <Empty description={false}/>
                <div style={{backgroundColor:'GrayText', marginLeft:'20px'}}>404 Page Not Found</div>
        </div>
    );
};

export default NotFound;
