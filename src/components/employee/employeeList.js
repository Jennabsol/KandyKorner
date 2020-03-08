import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
// import "./employees.css"

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            {employees.map(employee => (
                <Employee key={employee.id} employee={employee} />
            ))}
        </div>
    )
}
