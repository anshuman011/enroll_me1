import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Layout.css';
import Form from '../Form/Form';

const layout=(props)=>{
    return (
        <div className="Layout">
            <Toolbar showSideDrawerH={props.showSideDrawerHH}/>
            <div /* style={{marginTop:"-40%",marginLeft:"20%"}} */>
            <Form/>
            </div>
            {/* <SideDrawer/> */}
        </div>)
}

export default layout;