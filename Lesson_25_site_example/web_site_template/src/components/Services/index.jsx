import React from 'react'
import { servicesData } from '../../data/servicesData'
import ServiceCard from '../ServiceCard'

export default function Services() {
  return (
    <div>
      {
        servicesData.map(el => <ServiceCard key={el.id} {...el} />)
      }
    </div>
  )
}
