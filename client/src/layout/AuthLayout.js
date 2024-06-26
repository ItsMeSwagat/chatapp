import React from 'react'
import logo from '../assets/chatMeLogo.png'

const AuthLayout = ({children}) => {
  return (
    <>
      <header>
        <img src={logo} alt='logo' className='' />
      </header>

      {children}
    </>
  )
}

export default AuthLayout