import React from 'react'
import { AiOutlineFire } from "react-icons/ai";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div>
            <AiOutlineFire /> <b>{props.title}</b>
          </div>
          <div>
            Time End at <b>11:30</b>
            <span className="header-timer">
              12m 30s
            </span>
          </div>
        </div>
      </div>
    </>
  )
}