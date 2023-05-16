import React, { useState } from 'react'
import { ImageView, UploadImage, Wrapper } from './ImageUploader.css'
import BlankImage from './blank_img.png';

const ImageUploader = () => {

  const[picture,setPicture] = useState(BlankImage);

  const handleChange=(e)=>{
    if (e.target.files) {
      setPicture(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>  
      <Wrapper>
      <ImageView>
        <img alt="" src={picture} className='img' />
      </ImageView> 
      <UploadImage accept= "image/*,.jpg,.png,.jpeg,.mov" onChange={(e)=>handleChange(e)}/>
      </Wrapper>
    </>
  )
}

export default ImageUploader
