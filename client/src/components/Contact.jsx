/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Avatar from './Avatar';

const Contact = ({ username, id, online, selected }) => {
  return (
    <div className={'border-b border-gray-100 flex items-center gap-2 cursor-pointer ' + (selected ? "bg-blue-950": "")}>
    {selected && <div className='w-1 bg-blue-700 h-12 rounded-r-md'></div>}
      <div className='flex gap-2 py-2 pl-4 items-center'>
      <Avatar 
      username={username}
      userId={id}
      online={online}
      />
      <span className='text-white'>{username}</span>
      </div>
    </div>
  )
}


export default Contact;   