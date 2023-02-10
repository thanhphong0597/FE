import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    defaultValues: {
      name: ''
    }
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} />
      {errors.name && errors.name.message && <p>{errors.name.message}</p>}

      <input name="email" ref={register} />
      {errors.email && errors.email.message && <p>{errors.email.message}</p>}

      <input name="password" type="password" ref={register} />
      {errors.password && errors.password.message && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  )
}

const data = { name: 'John', email: 'john@example.com', password: '123456' }

schema.validate(data, { abortEarly: false }).catch(errors => {
  console.log(errors)
})
