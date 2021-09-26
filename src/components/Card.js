import React from 'react'

export default function Card(props) {

  const onMenuClick = (index) => {
    return props.onMenuClick({
      restaurant: props.index,
      menu: index
    })
  }

  const onVoteClick = (index) => {
    return props.onVote(index)
  }

  return (
    <>
      <div className="card" key={props.index}>
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

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button className={!props.voted ? "card-button-active" : "card-button"} onClick={() => onVoteClick(props.index)}>
            {props.voted ? "Vote" : "Unvote"}
          </button>
        </div>

      </div>
    </>
  )
}