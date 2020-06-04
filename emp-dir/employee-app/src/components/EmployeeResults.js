import React from "react";

const EmployeeResults = (props) => {
    return (
        <table>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            </tr>
            {props.employees.map(employees =>
                (   <tr>
                    <img src={employees.picture.thumbnail}/>
                    <td>{employees.name.first} {employees.name.last}</td>
                    <td>{employees.phone}</td>
                    <td>{employees.email}</td>
                    <td>{employees.dob.date}</td>
                    </tr>
                )
                )}
            <style jsx="true">{`
                table {
                    padding-top: 20px; 
                    background: #ffe6ff;
                    width: 100%;
                    align: center;
                }
            `}</style>
        </table>
    )
}

export default EmployeeResults