import React from 'react'

const Card = ({item}) => {
  return (
    <div className='flex bg-white blur-sm  flex-col w-[20%] h-[20rem] hover:font-bold filter  hover:bg-black hover:blur-0 hover:text-white transition-all duration-100   border-r-[100%] text-black'>
        <img src={item.pic} className=' h-[70%] object-fit   '></img>
        <div className='flex h-[50%] space-x-3 my-4 px-3'>
        <h1 className=''>{item.name}</h1>
        <p>{item.price}</p>
        </div>
    </div>
  )
}

export default Card;