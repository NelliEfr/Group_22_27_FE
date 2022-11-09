import React, { useContext } from 'react'
import s from './index.module.css'
import FormItem from '../FormItem'
import { Context } from '../../context'
import { CloseOutlined } from '@ant-design/icons'

export default function FormModal() {

  const { modalActive,  setModalActive} = useContext(Context);

  return (
    <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
      <div className={s.modal_content}>

        <CloseOutlined className={s.crossIcon} onClick={() => setModalActive(false)} />

        <FormItem 
          title={'Registration'}
          button={{submit: 'Registration', redirect: 'Login'}}
          info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
          form_type={'registration'}
        />
      </div>
    </div>
  )
}
