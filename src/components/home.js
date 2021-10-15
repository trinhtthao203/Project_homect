import React,{useState, useEffect} from 'react'
import { getUser, getToken ,removeUserSession } from '../Utils/Common';
import { Link } from 'react-router-dom';
import Map from './map';

function Home (props){
  
  const user = getUser();
  const token = getToken();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  console.log(user);
  console.log(token);

  let nav;
  if(getUser() && getToken()){
    nav =(
      <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className='container'>
                    <Link className='navbar-brand' to={'/'}>Trang chủ</Link>
                        <div className='collapse navbar-collapse justify-content-end'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' onClick={handleLogout} to={'/'}>Đăng xuất</Link>
                            </li>
                        </ul>  
                        </div>
                </div>
            </nav>
    );
  }else{
    nav = (
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
  if(user){
    return(
      <div>
        {nav}
        Welcome {user.fullname}!<br /><br />
        <h2>Welcome to my home page </h2>
        <Map/>
        {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      </div>
    );
  }
  else
  {
    return(
      <div className="">
        {nav}
        <h2>Ban chua dang nhap</h2>
      </div>
      
    );
  }
}

export default Home;