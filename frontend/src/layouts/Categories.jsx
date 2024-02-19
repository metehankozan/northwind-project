import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div className='categories'>
      <Menu pointing vertical>
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'
        />
        <MenuItem
          name='friends'
        />
      </Menu>
    </div>
  )
}
