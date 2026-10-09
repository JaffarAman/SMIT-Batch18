import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const App = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data, "data")


  console.log(errors, "errors");


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >

        <input type="text" {...register("userName", { required: true, minLength: 5, maxLength: 20 })} name='userName' />
        {errors.userName && <span>{errors?.userName?.message}</span>}
        <br />
        <input type="email" {...register("userEmail")} name='userEmail' />

        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App
