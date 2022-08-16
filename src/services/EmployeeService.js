const urlList = 'http://localhost:8080/api/v1/list';
const urlCreate = 'http://localhost:8080/api/v1/create';
const urlGetById = 'http://localhost:8080/api/v1/update/';

 class EmployeeService {
     getAllEmployees(){
         return fetch(urlList)
                 .then(response => response.json())
                 .then(data => console.log(data));
     }

     createEmployee(Employee){
         fetch(urlCreate, {
             method: 'POST', // or 'PUT'
             body: JSON.stringify(Employee), // data can be `string` or {object}!
             headers:{
                 'Content-Type': 'application/json'
             }
         }).then(res => res.json())
             .catch(error => console.error('Error:', error))
             .then(response => console.log('Success:', response));
     }

     updateEmployee(Employeeid){
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");

         var requestOptions = {
             method: 'PUT',
             headers: myHeaders,
             redirect: 'follow'
         };

         fetch(`http://localhost:8080/api/v1/update/${Employeeid}`, requestOptions)
             .then(response => response.text())
             .then(result => console.log(result))
             .catch(error => console.log('error', error));
     }

     // getEmployeeById(EmployeeId){
     //     return fetch('http://localhost:8080/api/v1/update/' + EmployeeId)
     //             .then(response => response.json())
     //             .then(data => console.log(data));
     //     }

 //     const url = 'http://localhost:8080/api/v1/update/' + EmployeeId;
 //     console.log(url);
 //     return fetch(url, {
 //         method: 'PUT', // or 'PUT'
 //         headers:{
 //             'Content-Type': 'application/json'
 //         }
 //     }).then(response => response.json())
 // .then(data => console.log(data));
}

export default new EmployeeService();