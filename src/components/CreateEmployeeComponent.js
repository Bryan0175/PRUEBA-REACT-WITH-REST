import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmployeeService from "../services/EmployeeService";
import {useParams} from 'react-router-dom';

const CreateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const {id} = useParams();

    useEffect(()=>{
        EmployeeService.updateEmployee(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const saveEmployee = (e) => {

      e.preventDefault();

      const employee = {firstName, lastName, emailId}

      EmployeeService.createEmployee(employee);
    }

    const title = () => {
      if (id){
          return <h2>Update Employees</h2>
      }else {
          return <h2>Register Employees</h2>
      }
    }

  return(
      <Box
          component="form"
          noValidate
          autoComplete="off"
      >
          <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                  <div className="Container">
                      {title()}
                      <TextField id="outlined-basic" label="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} variant="outlined" /><br/>
                      <TextField id="outlined-basic" label="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} variant="outlined" /><br/>
                      <TextField id="outlined-basic" label="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} variant="outlined" /><br/>
                      <Button variant="outlined" onClick={(e) => saveEmployee(e)} >Register</Button>
                  </div>
              </Container>
          </React.Fragment>
      </Box>
  );
}

export default CreateEmployeeComponent;