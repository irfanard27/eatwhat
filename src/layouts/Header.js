import moment from 'moment';
import React, { useRef, useState } from 'react'
import Countdown from 'react-countdown';
import { AiOutlineFire } from "react-icons/ai";
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Header(props) {

  const getTime = localStorage.getItem("timer") !== null ? moment(localStorage.getItem("timer"), "HH:mm") : moment("11:30", "HH:mm")
  const timer = useRef()
  const [endTime, setEndTime] = useState(getTime)
  const [visible, setVisible] = useState(false)

  const openTimePicker = () => {
    setVisible(true)
  }

  const closeTimePicker = () => {
    setVisible(false)
  }

  const setTime = () => {
    let time = document.getElementById("time").value
    setEndTime(moment(time, "HH:mm"))
    localStorage.setItem("timer", time)
    closeTimePicker()

    let isTimesUp = document.getElementsByClassName("header-timer")[0].textContent
    if (isTimesUp === "Times Up") {
      window.location.reload()
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      props.timesUp(true)
      return "Times Up"
    } else {
      return <span>{hours}h {minutes}m {seconds}s</span>
    }
  }


  return (
    <>
      <div className="header">
        <div className="header-content">
          <div>
            <AiOutlineFire /> <b>{props.title}</b>
          </div>
          <div onClick={openTimePicker} style={{ cursor: 'pointer' }}>
            Time End at <b><span>{endTime.format("HH:mm")}</span></b>
            <span className="header-timer">
              <Countdown ref={timer}
                date={endTime} renderer={renderer} />
            </span>
          </div>
        </div>
      </div>

      {/* Modal For edit end time */}
      <ReactModal
        isOpen={visible}
        onRequestClose={closeTimePicker}
        style={customStyles}
        className="modal"
        overlayClassName="overlay"
      >
        <div style={{ width: 300, textAlign: "center" }}>
          Set a End Time <br />
          <form onSubmit={setTime}>
            <div className="input-container">
              <input type="time" format="HH:mm" className="input" id="time" style={{ width: 100 }} />
            </div>

            <button className="button" type="submit">Save</button>
          </form>
        </div>
      </ReactModal>
    </>
  )
}