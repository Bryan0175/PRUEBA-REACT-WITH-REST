import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import EmployeeService from "../services/EmployeeService";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])


    useEffect(()=>{
        fetch('http://localhost:8080/api/v1/list')
            .then(res => res.json())
            .then((result)=>{
                setEmployees(result);
            })
    }, [])


    useEffect(() => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data)
                console.log(response.data);
        }).catch(error =>{
                console.log(error)
        })
    }, [])

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className="Container">
                    <h2>Table Employees</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">FirstName</TableCell>
                                    <TableCell align="right">LastName</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employees.map((employee) => (
                                    <TableRow
                                        key={employee.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {employee.id}
                                        </TableCell>
                                        <TableCell align="right">{employee.firstName}</TableCell>
                                        <TableCell align="right">{employee.lastName}</TableCell>
                                        <TableCell align="right">{employee.emailId}</TableCell>
                                        <TableCell align="right"><Button color="success" variant="outlined"></Button></TableCell>
                                        <TableCell align="right"><Button color="error" variant="outlined">Delete</Button></TableCell>
                                        <NavLink to={`/edit-employee/${employee.id}`}>Update</NavLink>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default ListEmployeeComponent