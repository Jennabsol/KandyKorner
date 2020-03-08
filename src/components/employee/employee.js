import React from "react"
import "./Locations.css"


export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
    </section>
)
