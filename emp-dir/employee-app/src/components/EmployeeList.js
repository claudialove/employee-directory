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

    searchEmployees = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };


      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };

    
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