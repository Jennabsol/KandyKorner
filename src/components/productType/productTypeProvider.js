import React, { useState, useEffect } from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([])

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then(res => res.json())
      .then(setProductTypes)
  }

  const addProductType = ProductType => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ProductType)
    })
      .then(getProductTypes)
  }


  useEffect(() => {
    getProductTypes()
  }, [])

  useEffect(() => {
    console.log("****  ProductType APPLICATION STATE CHANGED  ****")
  }, [productTypes])


  return (
    <ProductTypeContext.Provider value={{
      productTypes, addProductType
    }}>
      {props.children}
    </ProductTypeContext.Provider>
  )
}