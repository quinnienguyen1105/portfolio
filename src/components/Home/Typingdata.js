import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'; 
const Typingdata = () => {
    const CONTENT = [
        'I have a strong passion on Website Development',
        3000,
        'I have a strong passion on Website Development, especially in terms of Frontend aspect,',
        2000,
        'I have a strong passion on Website Development, especially in terms of Frontend aspect, and dedicated to my work.',
        3000,
        '',
    ];
  return (
    <TypeAnimation
      cursor={true}
      speed={53}
      sequence={CONTENT}
      wrapper='p'
      repeat={Infinity}
      className='home_description'
    />
  )
}

export default Typingdata
