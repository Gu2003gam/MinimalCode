import React from 'react';
import { useState, useRef } from 'react';
import {FaHeart, FaShoppingBag, FaSearch, FaDog, FaArrowRight, FaStar, FaPlus} from 'react-icons/fa'
import Pet from './assets/pet.jpg';
import Food from './assets/food.jpg';
import Toy from './assets/toy.jpg';
import Bed from './assets/bed.jpg'
import Shampoo from './assets/shampoo.jpg'
import './App.css'

function App({}) {
    const [count , setCount] = useState(0);
    return (
        <div className="app">
            <div className="header">
                <div className="navBar">
                    <nav>
                        <ul className='options'>
                            <div className="logo">
                                <h2>PetPlanet</h2>
                                <FaDog className='dog'/>
                            </div>
                            <li><a href="">Home</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <div className="options2">
                                <FaSearch />
                                <FaShoppingBag />
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="main">
                    <div className="content">
                        <h1>Everything Your Pet Needs, All in One Place</h1>
                        <p style={{width: '50%'}}>Premium pet supplies, grooming services, and expert care for your furry friends. Shop with confidence and give your pets the best.</p>
                        <div className="buttons">
                            <button className='shopButton'>Shop Now <FaArrowRight /></button>
                            <button className='servicesButton'>Our Services</button>
                        </div>
                    </div>
                    <div className="imageContainer">
                        <img src={Pet} alt="happyDog" className='happyDog' />
                        <button className="countButton" onClick={(e)=>setCount(count=>(count+1))}>
                            <FaHeart className='heart' />{count}
                        </button>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="products">
                    <h2>Featured Products</h2>
                    <p style={{color: 'blueviolet'}}>Our most popular items for your beloved pets</p>
                    <div className="showCase">
                        <div className="card">
                            <img src={Food} alt="food" style={{width: '300px', height: '300px'}} className='cardImage' />
                            <div className="label">
                                <h3>Premium Dog Food</h3>
                                <p><FaStar style={{color: 'gold'}} />4.6(412 reviews)</p>
                            </div>
                            <div className="cardBottom">
                                <p>$49.99</p>
                                <button className="buyButton" style={{color: 'white', background: 'blueviolet', borderRadius: '10px', border: 'none'}}><FaPlus />Add</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Toy} alt="toy" style={{width: '300px', height: '300px'}} className='cardImage' />
                            <div className="label">
                                <h3>Interactive Dog Toy</h3>
                                <p><FaStar style={{color: 'gold'}} />4.8(324 reviews)</p>
                            </div>
                            <div className="cardBottom">
                                <p>$24.99</p>
                                <button className="buyButton" style={{color: 'white', background: 'blueviolet', borderRadius: '10px', border: 'none'}}><FaPlus />Add</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Bed} alt="bed" style={{width: '300px', height: '300px'}} className='cardImage' />
                            <div className="label">
                                <h3>Cozy Pet Bed</h3>
                                <p><FaStar style={{color: 'gold'}} />4.9(567 reviews)</p>
                            </div>
                            <div className="cardBottom">
                                <p>$79.99</p>
                                <button className="buyButton" style={{color: 'white', background: 'blueviolet', borderRadius: '10px', border: 'none'}}><FaPlus />Add</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Shampoo} alt="shampoo" style={{width: '300px', height: '300px'}} className='cardImage' />
                            <div className="label">
                                <h3>Pet Shampoo</h3>
                                <p><FaStar style={{color: 'gold'}} />4.7(189 reviews)</p>
                            </div>
                            <div className="cardBottom">
                                <p>$39.99</p>
                                <button className="buyButton" style={{color: 'white', background: 'blueviolet', borderRadius: '10px', border: 'none'}}><FaPlus />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App