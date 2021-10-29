import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getUser ,removeUserSession } from '../Utils/Common';
import axios from 'axios';

function Nav(props) { 

    const user = getUser();
    
    let buttons; 
    if(user){
        return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className='container'>
                    <Link className='navbar-brand' to={'/'}>Trang chủ</Link>
                        <div className='collapse navbar-collapse justify-content-end'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' onClick={removeUserSession()} to={'/'}>Đăng xuất</Link>
                            </li>
                        </ul>  
                        </div>
                </div>
            </nav>
        );
    }else{
        return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className='container'>
                <Link className='navbar-brand' to={'/'}>Trang chủ</Link>
                    <div className='collapse navbar-collapse justify-content-end'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to={'/login'}>Đăng nhập</Link>
                            </li>
                        </ul>
                    </div>
            </div>
            </nav>  
        );
    }

    
}
export default Nav;

