import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Card from '../components/Card'
import { restaurantsData } from '../dummy_data/restaurants'

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Content() {

  const [visible, setVisible] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState()
  const [selectedResto, setSelectedResto] = useState()

  const onMenuClick = (data) => {
    setSelectedMenu(restaurantsData[data.restaurant].menus[data.menu])
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  const onVote = (data) => {
    if (data === selectedResto) {
      setSelectedResto()
    } else {
      setSelectedResto(data)
    }
    //console.log(data)
  }


  return (
    <>
      <div className="container">

        {selectedResto !== undefined ? <div className="notification">
          You vote <b>{restaurantsData[selectedResto].name}</b>, you can unvote before end time
        </div> : ""}
        <div className="card-container">
          {restaurantsData.map((resto, index) => (
            <Card
              title={resto.name}
              phone={resto.phone}
              menus={resto.menus}
              img={resto.img}
              index={index}
              onMenuClick={onMenuClick}
              key={index}
              voted={selectedResto === index && selectedResto !== undefined ? false : true}
              onVote={onVote}
            />
          ))}
        </div><br /><br />
      </div>

      <ReactModal
        isOpen={visible}
        onRequestClose={closeModal}
        overlayClassName='overlay'
        style={customStyles}
        ariaHideApp={false}
      >
        {selectedMenu !== undefined ? <>
          <div align="center">
            {selectedMenu.name} - {selectedMenu.price} <br /><br />
            <img src={`img/${selectedMenu.img}`} alt={selectedMenu.name} width={400} height="auto" />
          </div>
        </> : ""}
      </ReactModal>
    </>
  )
}