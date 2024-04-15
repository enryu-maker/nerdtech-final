import React from 'react';
import { IoDocumentAttach } from 'react-icons/io5';

export default function CareersForm() {
  const [data, setData] = React.useState({});
  return (
    <>
      <div className='flex flex-col justify-center md:px-44 gap-4 py-20 overflow-hidden '>
        <h1 className=' text-4xl text-blue-500 font-MundoI py-5'>
          Resume / CV
        </h1>
        <form>
          <div className=' grid md:grid-cols-2 gap-10 mb-5  '>
            <div>
              <div className='flex flex-col items-start'>
                <label
                  className='w-full cursor-pointer border-b-[1px] border-black md:text-2xl text-lg font-MundoRegular p-3'
                  for='cv-upload'>
                  ATTACH RESUME / CV
                </label>
                <p className='text-sm font-MundoI '>
                  Accepted file types: pdf, txt, doc, docx.
                </p>
              </div>

              <input
                type='file'
                name='uploadFile'
                id='cv-upload'
                placeholder='ATTACH RESUME / CV'
                className='hidden'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Applied for*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Name*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Phone*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='email'
                name=''
                id=''
                placeholder='Email*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Current Company*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Linkedin URL*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
            <div>
              <input
                type='text'
                name=''
                id=''
                placeholder='Portfolio URL*'
                className='w-full border-b-[1px] border-black outline-none placeholder:text-2xl placeholder:text-black placeholder:font-MundoRegular font-MundoRegular p-3'
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 '>
            <h2 className='text-2xl font-MundoRegular mt-5'>
              Additional information
            </h2>
            <textarea
              placeholder='Add cover letter or anything you want to share.'
              className=' outline-none border-[1px] border-black h-40 p-3 placeholder:text-black placeholder:font-MundoRegular font-MundoRegular'
            />
          </div>
          <div className='flex items-center justify-center mt-5'>
            <button className=' border-black text-base border-[1px] px-5 md:w-[250px] w-full py-5 cursor-pointer flex justify-center items-center uppercase hover:bg-blue-500 hover:text-white font-MundoI '>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
