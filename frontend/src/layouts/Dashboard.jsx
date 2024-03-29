import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='top-right'/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:name' element={<ProductDetail />} />
              <Route path='/cart' element={<CartDetail />} />
              <Route path='/product/add' element={<ProductAdd />} />
              <Route path='/categories/:category' element={<ProductList />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
