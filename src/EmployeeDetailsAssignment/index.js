import { Component } from "react";


class EmployeeDetails extends Component {
    constructor () {
        super();
        this.state = {
            employeeName: 'John Doe',
            employeeId: 'E12345',
            department: 'Engineering'
        };
    }

    render () {
        return (
            <div>
                <p>Emplyee ID: {this.state.employeeId}</p>
                <p>Emplyee name: {this.state.employeeName}</p>
                <p>Emplyee department: {this.state.department}</p>
            </div>
        )
    }
}

export default EmployeeDetails;
