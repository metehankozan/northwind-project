import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField } from 'semantic-ui-react'

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
        <FormField>
          <Field name="productName" placeholder="Ürün Adı"></Field>
        </FormField>
        <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
        </FormField>
        <Button color='blue' type='submit'>Kayıt Et</Button>
      </Form>
    </Formik>
  )
}
