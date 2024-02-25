import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <MenuItem>
      <Image avatar spaced="right" src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"/>
      <Dropdown pointing="top" text='user'>
        <DropdownMenu>
          <DropdownItem text="Bilgilerim" icon="info"/>
          <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
        </DropdownMenu>
      </Dropdown>
      </MenuItem>
    </div>
  )
}
