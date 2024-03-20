import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='logo'>
        <img id='logo'
          src='https://wsapp01.winnersoft.co.th/Runtime/Image.ashx?ImID=224'
          alt='' />
      </div>
      <div className='systemName'>
        <div id='system_name'>Winnersoft Portal</div>
      </div>
      <div className='userLogin'>
        <div className='userLoginBox'>
          <img id='user_icon'
            src='https://wsapp01.winnersoft.co.th/Runtime/Image.ashx?ImID=189'
            alt='' />
          <div id='login_name'>Wasan Senkha(WINNERSOFT\Wasan.s)</div>
          <div id='logout_button'>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;