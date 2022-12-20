import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import s from './index.module.css'

export default function Layout() {
  return (
    <div>
      <Nav />
      <main className={s.outlet}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
