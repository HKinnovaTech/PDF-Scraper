'use client'
import React from 'react'
import './Preview.css'; // Import the custom CSS file

interface PreviewProps {
  responseData: string;
}

const Preview = ({ responseData }: PreviewProps) => {
  return (
    <div className='min-h-screen p-12 h-full w-[60%]'>
      <div className='bg-[#000B16]/70 border-1 border-[#27d2f070] rounded-4xl bg-opacity-48 h-full p-6 overflow-auto custom-scrollbar' dangerouslySetInnerHTML={{ __html: responseData }}></div>
    </div>
  )
}

export default Preview