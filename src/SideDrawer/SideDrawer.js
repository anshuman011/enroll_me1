import React,{Component} from 'react';
import './SideDrawer.scss';
import {FaHome ,FaUsers ,FaUserPlus, FaFileDownload ,FaKey ,FaInfo} from "react-icons/fa";
import classNames from 'classnames';

const SideDrawer =(props)=>{
    
    // const [isHovered, setIsHovered] = useState(false);


    let attachedClasses=classNames('SideDrawer','Close');
    let title=<p style={{marginBottom:"30px",marginTop:"30px",marginLeft:"80%",
                        fontWeight:"700",fontSize:"20px"}}>
                EDB</p>
    let ull=(
        <ul className="Hover" style={{marginLeft:"85%"}}>
            <li><FaHome/><a href="/abc">Home</a></li>
            <li><FaUsers/><a href="/abc">ENROLLED So Far</a></li>
            <li><FaUserPlus/><a href="/abc">Add User</a></li>
            <li><FaFileDownload/><a href="/abc">Download The Info</a></li>
            <li><FaKey/><a href="/abc">Password</a></li>
            <li><FaInfo/><a href="/abc">What is This About</a></li>     
        </ul>

    )
    if(props.showSideDrawer){
        attachedClasses=classNames('SideDrawer','Open');
        title=<p style={{marginBottom:"30px",marginTop:"30px",fontWeight:"700",fontSize:"20px"}}>
                Enrollment DB</p>
        ull=(
            <ul>
                <li><FaHome style={{marginRight:"10px"}}/><a>Home</a></li>
                <li><FaUsers style={{marginRight:"10px"}}/><a>ENROLLED So Far</a></li>
                <li><FaUserPlus style={{marginRight:"10px"}}/><a>Add User</a></li>
                <li><FaFileDownload style={{marginRight:"10px"}}/><a>Download The Info</a></li>
                <li><FaKey style={{marginRight:"10px"}}/><a>Password</a></li>
                <li><FaInfo style={{marginRight:"10px"}}/><a>What is This About</a></li>
            </ul>
    
        )
    // console.log(attachedClasses)
    }
    // const abc=()=>{console.log("abc")}
    return(
        <button /* onMouseOver={this.abc} */>
        <div className={attachedClasses}> 
            {title}
            {ull}     
        </div>
        </button>
        
    )
}

export default SideDrawer;