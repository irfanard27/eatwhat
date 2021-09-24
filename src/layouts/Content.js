import React from 'react'
import Card from '../components/Card'
import { restaurantsData } from '../dummy_data/restaurants'

export default function Content() {
  return (
    <>
      <div className="container">
        <div className="card-container">
          {restaurantsData.map((resto, index) => (
            <Card
              title={resto.name}
              phone={resto.phone}
              menus={resto.menus}
              img={resto.img}
            />
          ))}
        </div><br /><br />
      </div>
    </>
  )
}