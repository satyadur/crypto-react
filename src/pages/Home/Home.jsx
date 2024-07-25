import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

//api key:- CG-kMPup9M7FVkj4cqEPnjTytYS
const Home = () => {

    let {allCoin, currency} = useContext(CoinContext) ;
   // console.log(currency);
    let [displayCoin, setDisplayCoin] = useState([]);
let [input, setInput] = useState("");

let inputHandler = (e) =>{
    setInput(e.target.value);
    if(e.target.value === ""){
        setDisplayCoin(allCoin)
    }
}

let searchHandler = async (e)=>{
    e.preventDefault();
    let coins=await allCoin.filter((item)=>{
      return  item.name.toLowerCase().includes(input.toLowerCase())
    })
    //bitcoin
    //bit
    setDisplayCoin(coins);
}

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])





  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world&apos;s largest cryptocurrency marketplace. Sign Up to explore more about cryptos.</p>
            <form action="" onSubmit={searchHandler}>
                <input onChange={inputHandler} value={input} type="text" placeholder='Search Crypto...' required list='coinlist'/>

                <datalist id='coinlist'>
                                {
                                    allCoin.map((item, index)=>(
                                                        <option value={item.name} key={index}/>
                                    ))
                                }
                </datalist>

                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {
                displayCoin.slice(0,10).map((item, index)=>(
                            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                                        <p>{item.market_cap_rank}</p>
                                        <div>
                                            <img src={item.image} alt="coin image" />
                                            <p>{item.name +" - "+ item.symbol}</p>
                                        </div>
                                        <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
                                        <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                            {Math.floor(item.price_change_percentage_24h*100)/100}
                                        </p>
                                        <p className='market-cap'>{currency.Symbol} {item.market_cap.toLocaleString()}</p>
                            </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home