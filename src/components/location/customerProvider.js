import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const customerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const customerProvider = (props) => {
    const [customers, setcustomers] = useState([])

    const getcustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setcustomers)
    }

    const addcustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getcustomers)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getcustomers()
    }, [])

    useEffect(() => {
        console.log("****  customer APPLICATION STATE CHANGED  ****")
    }, [customers])

    return (
        <customerContext.Provider value={{
            customers, addcustomer
        }}>
            {props.children}
        </customerContext.Provider>
    )
}