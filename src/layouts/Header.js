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

  const timer = useRef()
  const [endTime, setEndTime] = useState(moment('15:30', "HH:mm"))
  const [visible, setVisible] = useState(false)

  const openTimePicker = () => {
    setVisible(true)
  }

  const closeTimePicker = () => {
    setVisible(false)
  }

  const setTime = () => {
    let h = document.getElementById("hour").value
    let m = document.getElementById("minute").value
    setEndTime(moment(`${h}:${m}`, "HH:mm"))
    closeTimePicker()
    timer.current.start()
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
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
              <Countdown ref={timer} date={endTime + 1000 * 60} renderer={renderer} />
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
          <div className="input-container">
            <input className="input" type="number" id="hour" placeholder="Hour" />
            <input className="input" type="number" id="minute" placeholder="Minutes" />
          </div>
          <button className="button" onClick={setTime}>Save</button>
        </div>
      </ReactModal>
    </>
  )
}