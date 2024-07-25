import { createContext, useEffect, useState } from "react";

export let CoinContext = createContext()

let CoinContextProvider=(props)=>{
    
    let [allCoin, setAllCoin] = useState([]);
    let [currency,setCurrency] = useState({
        name: "usd",
        Symbol:"$"
    });

    let fetchAllCoin = async()=>{
        let options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-kMPup9M7FVkj4cqEPnjTytYS'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchAllCoin()
    },[currency])

    let contextValue = {
        allCoin,currency,setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;