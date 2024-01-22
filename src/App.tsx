import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import SideMenu from './components/Sidemenu';
import Content from './components/Contens';

const App:React.FC = ()=> {
  return (
    <div style={{display:'flex',flexDirection:'column',flex:1,height:'100vh' }}>

    <MyHeader/>
    <div style={{display:'flex',flexDirection:'row',flex:1}}>
    <SideMenu/>
    <Content/>
    </div>
    <MyFooter/>
    </div>
  );
}

export default App;
