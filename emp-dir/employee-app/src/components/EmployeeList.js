import React from "react";
import API from "../utils/API";
import EmployeeResults from "./EmployeeResults";
import EmployeeSearch from "./EmployeeSearch";



class EmployeeList extends React.Component {
    state = {
        employees: [],
        search: ""
    }

    handleInputChange = (e) => {
        // Put in code that handles input change
    }

    componentDidMount() {
        this.listSearch()
    }
    
    listSearch = () => {
        API.search()
        .then(res => this.setState({employees: res.data.results}))
        .catch( err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                <EmployeeSearch
                  handleInputChange={this.handleInputChange}
                  search={this.state.search} 
                />

                <EmployeeResults employees={this.state.employees} />
            </>
        )
    }
}




export default EmployeeList;