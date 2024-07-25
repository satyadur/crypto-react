import React, { useContext } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import ArrowIcon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  let {setCurrency} = useContext(CoinContext);

  let currencyHandler=(e)=>{
    switch (e.target.value) {
      case 'usd':{
          setCurrency({name: "usd", Symbol:"$"})
          break;
      }
      case 'eur':{
        setCurrency({name: "eur", Symbol:"€"})
        break;
    }
    case 'inr':{
      setCurrency({name: "inr", Symbol:"₹"})
      break;
  }  
      default: setCurrency({name: "inr", Symbol:"₹"})
        break;
    }
  }

  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src={Logo} alt="LOGO" className='logo' />
      </Link>
        <ul>
          <Link  to={`/`}><li>Home</li></Link>  
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up <img src={ArrowIcon} alt="Arrow_Icon" /></button>
        </div>
    </div>
  )
}

export default Navbar