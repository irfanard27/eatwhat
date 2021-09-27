import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Card from '../components/Card'
import SelectedCard from '../components/SelectedCard';
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

export default function Content(props) {

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
        {props.isTimesUp ?
          selectedResto !== undefined ?
            <div>
              <h1>You Vote</h1>
              <SelectedCard
                title={restaurantsData[selectedResto].name}
                phone={restaurantsData[selectedResto].phone}
                menus={restaurantsData[selectedResto].menus}
                img={restaurantsData[selectedResto].img}
                index={0}
                onMenuClick={onMenuClick}
                key={0} />
            </div> :
            <div className="notification">
              Times up, update the timer above and vote restaurant
            </div>

          :
          <>

            {selectedResto !== undefined ?
              <div className="notification">
                You vote <b>{restaurantsData[selectedResto].name}</b>, you can unvote before end time
              </div> :
              ""
            }

            <div className="grid-container">
              {restaurantsData.map((resto, index) => (
                <div className="grid-item">
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
                </div>
              ))}
            </div>

          </>
        }
        <br /><br />
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