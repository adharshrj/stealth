import React from 'react'
import {ErrorMessage , useField} from 'formik'


function CustomField({label, change, ...props}) {
    const [field , meta] = useField(props);

  return (
    <div className='mt-2'>
        <label htmlFor={field.name}>{label}</label>
        <input onChange={change} className= {`form-control shadow-none mt-1 ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete='off'/>
        <ErrorMessage component='div' name={field.name} style={{color:"red" , fontSize:"12px"}}/>
    </div>
  )
}

export default CustomField