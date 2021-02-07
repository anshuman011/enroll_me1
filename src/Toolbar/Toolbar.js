import React from 'react';
import "./Toolbar.css";
import {FaBars,FaSearch} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";
import img1 from '../Asset/Images/img1.jpg'

const toolbar=(props)=>{
    return (
        <div className="Toolbar">
            <div style={{marginTop:"20px",marginRight:"50px"}}>
                <FaBars  onClick={props.showSideDrawerH}/></div>
            <ul >
                <li><form /* action="/action_page.php" */>
                <FaSearch><button type="submit"></button></FaSearch>
                <input type="text" placeholder="Search Dashboard" name="search" autoFocus>
                </input>
                </form></li>
            </ul>
            
            <ul >
            <li><img src={img1} alt="face"/></li>
            <li><p >Admin</p></li>
            <li><AiFillSetting/></li>
            </ul>
        </div>
    )
}

export default toolbar;