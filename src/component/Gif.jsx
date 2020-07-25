import React from 'react'

export default function Gif({id,title,image}){
  return(
    <div key={id}>
      <h4 className='App'>{title}</h4>
      <img alt={title} src={image} />
    </div>
  )
}