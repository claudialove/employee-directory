import React from "react"
import EmployeeList from "./EmployeeList"

const EmployeeSearch = (props) => {

    return (
        <form>
            <input
                value={props.search}
                onChange={props.handleInputChange} 
                type="text"
                name="search"
            />
            <button>Search</button>

            <style jsx="true">{`
                form {
                    background: #ffe6ff;
                    height: 100%;
                }
                input {
                    margin: auto; 
                    border: 10px solid #ffe6ff;
                    padding: 10px;
                    display: block;
                }
                button {
                    margin-bottom: 20px;
                    border: 2px solid #ffe6ff;
                    padding: 10px;
                    background: rgb(185, 77, 185);
                    color: white;
                }
            `}</style>
        </form>
    )
}

export default EmployeeSearch
