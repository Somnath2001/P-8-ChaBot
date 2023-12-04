import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

const UserAvatar = () => {
  const config = genConfig() 
    
  return (
    <><Avatar style={{ width: '3rem', height: '3rem' }} {...config} /></>
  )
}

export default UserAvatar