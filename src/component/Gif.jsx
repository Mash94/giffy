import React from 'react'

export default function Gif({id,title,image}){
  return(
    <a href={'#'+id} key={id} style={styles.div}>
      <h4 className='App' style={styles.img}>{title}</h4>
      <img alt={title} src={image} />
    </a>
  )
}

const styles = {
  div: {
    border: '1px solid #eee',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    padding: '32px',
    width: '100%' 
  },
  img: {
    objectFit: 'contain'
  }
  
}