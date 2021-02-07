import React,{Component} from 'react';
import "./Form.scss";
import { MDBBtn } from "mdbreact";


class Form extends Component{
    state={
        // info : {
        //         fname: 'abc',
        //         lname: '',
        //         number:'',
        //         }
        fname: 'abc',lname: '',mnum: '',errormessage: ''}
    // state = this.initialState
    mySubmitHandler = (event) => {
        event.preventDefault();
        let mnum = this.state.mnum;
         if (!Number(mnum)) {
            alert("Your age must be a number");
         }
        alert("You are submitting " + this.state.fname + this.state.lname);
      }
      handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "mnum") {
            if (val !="" && !Number(val)) {
              err = <strong>Your age must be a number</strong>;
            }
          }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }
    
    render(){
        return(
            <div className="Form"> 
                <form onSubmit={this.mySubmitHandler}>
                <label /* className="font-effect-emboss" */> FIRST Name
                <input type="text"  name="fname" value={this.state.fname} 
                                    onChange={this.handleChange}/></label>
                <label> Last Name 
                <input type="text" name="lname" value={this.state.lname} 
                                    onChange={this.handleChange} /></label>
                <label> Mobile Number
                <input type="text" name="mnum" value={this.state.mnum}
                                    onChange={this.handleChange} /></label>
                
                 <div /* style={{backgroundColor:"#111222"}} */>
                 <div>Hello : {this.state.fname} {this.state.lname} {this.state.mnum}</div>
                 <input type="submit" value="Submit" />
                 <MDBBtn style={{}} color="primary">Primary</MDBBtn>
                 {/* <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
                 <MDBBtn color="blue-grey">Blue-grey</MDBBtn> */}
                 </div>
                 {this.state.errormessage}
                </form>
            </div>
        )
    }
}
export default Form;