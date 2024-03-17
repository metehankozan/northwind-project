import React, { useState, useEffect } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result => setCategories(result.data.data));
  }, [])

  return (
    <div className='categories'>
      <Menu pointing vertical>
        {
          categories.map(category => (
            <MenuItem key={category.categoryId}><Link to={`/categories/${category.categoryName}`}>{category.categoryName}</Link></MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}
