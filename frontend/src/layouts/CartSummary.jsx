import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
} from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <DropdownMenu>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Russian</DropdownItem>
          <DropdownItem>Spanish</DropdownItem>
          <DropdownDivider/>
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
