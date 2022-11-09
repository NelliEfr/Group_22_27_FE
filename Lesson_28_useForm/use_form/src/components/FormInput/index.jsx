import React, { forwardRef } from 'react'
import s from './index.module.css'

const FormInput = forwardRef((props, ref) => {
  return (
    <input {...props} className={s.form_input} ref={ref} />
  )
})

export default FormInput;
