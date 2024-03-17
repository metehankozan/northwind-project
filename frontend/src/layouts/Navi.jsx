import React, { useState } from 'react'
import CartSummary from './CartSummary'
import {
  MenuMenu,
  MenuItem,
  Menu,
  Container,
} from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {

  const { cartItems } = useSelector(state => state.cart)

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <MenuItem><Link to={"/"}>Home</Link></MenuItem>

          <MenuMenu position='right'>
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  )
}
