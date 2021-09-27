import React from 'react'

export default function SelectedCard(props) {

  const onMenuClick = (index) => {
    return props.onMenuClick({
      restaurant: props.index,
      menu: index
    })
  }

  return (
    <>
      <div className="card2" key={props.index}>
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
          {props.menus.map((mns, index) => (
            <div className="card-menu-list" key={index} onClick={() => onMenuClick(index)}>
              <div className="list-container">
                <div className="list-thumbnail">
                  <img src={`img/${mns.img}`} alt="img" />
                </div>
                <div>
                  {mns.name}<br />
                  <small>{mns.price}</small>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}