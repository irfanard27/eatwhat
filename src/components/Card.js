import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-thumbnail">
          <img src={`img/${props.img}`} alt={props.img} />
        </div>

        <div style={{ textAlign: "center" }}>
          <b>{props.title}</b><br />
          <small>{props.phone}</small>
        </div><br />

        <div style={{ marginBottom: 10 }}>
          <small>
            Menus List
          </small>
        </div>

        <div>
          {props.menus.map(mns => (
            <div className="card-menu-list">
              <div className="list-container">
                <div className="list-thumbnail">

                </div>
                <div>
                  {mns.name}<br />
                  <small>{mns.price}</small>
                </div>
              </div>
            </div>
          ))}
          <br />
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="button">Vote</button>
        </div>

      </div>
    </>
  )
}