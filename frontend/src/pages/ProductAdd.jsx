import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utils/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 }
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur")
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className='ui form'>
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button color='blue' type='submit'>Ürün Ekle</Button>
      </Form>
    </Formik>
  )
}
