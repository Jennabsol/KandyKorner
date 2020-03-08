import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const productContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const productProvider = (props) => {
    const [products, setproducts] = useState([])

    const getproducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setproducts)
    }

    const addproduct = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getproducts)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getproducts()
    }, [])

    useEffect(() => {
        console.log("****  product APPLICATION STATE CHANGED  ****")
    }, [products])

    return (
        <productContext.Provider value={{
            products, addproduct
        }}>
            {props.children}
        </productContext.Provider>
    )
}