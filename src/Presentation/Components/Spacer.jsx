import React from 'react'

export default function Spacer(props) {
  return (
    <div className={`h-${props.num} md:h-0`}></div>
  )
}
