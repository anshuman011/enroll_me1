import React from "react";
import './AddUserForm.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer className="AddUserForm">
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Add Yourself Here!</p>
        <label style={{float:"left"}} htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    SAVE
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

//     export default FormPage;


// controlled components..read saved site
import React, { useState } from 'react';
 
const App = () => {
  const [value, setValue] = useState('Hello React');
 
  const handleChange = event => setValue(event.target.value);
 
  return (
    <div>
      <label>
        My controlled Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>
 
      <p>
        <strong>Output:</strong> {value}
      </p>
    </div>
  );
};
 
export default App;