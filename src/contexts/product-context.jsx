import { useState, useEffect, createContext } from "react"


export const ProductContext = createContext({
  currentShopData: [],
  setCurrentShopData: ()=>{}
});

 export const ProductProvider = ({children})=>{

    const [currentShopData, setCurrentShopData] = useState([]);
    const value = { currentShopData, setCurrentShopData };

useEffect(()=>{

       const product = async () => {
         try {
           const response = await fetch(
             "https://api.escuelajs.co/api/v1/products?offset=0&limit=16"
           );
           const data = await response.json()
           setCurrentShopData(data);

         } catch (error) {
           console.log(error.message);
         }
       };
       product();


}, [])

return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>

};


