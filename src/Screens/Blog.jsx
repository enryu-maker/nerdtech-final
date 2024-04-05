import React from 'react'
import Header from '../Components/Header'
import BlogCard from '../Components/BlogCard'
export default function Blog() {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <Header show={show} />
            <div className='w-full self-center flex flex-col items-center justify-center'>
                <div className='flex flex-wrap items-center justify-between w-[78%] mt-[100px] pb-5'>
                    <select className=' focus:outline-none font-MundoRegular py-2 font-semibold border-b w-[250px] text-black text-lg'>
                        <option defaultChecked value="volvo">Select Cateogory</option>
                        <option value="volvo">Advertising</option>
                        <option value="saab">Branding</option>
                        <option value="mercedes">Technology</option>
                        <option value="audi">Branding</option>
                        <option value="audi">Marketing</option>

                    </select>
                    <input
                        className='h-[30px] border-b text-lg py-2  font-MundoRegular font-semibold w-[250px] text-black placeholder:text-black'
                        placeholder='Search blogs...'
                    />
                </div>
                <div className='flex flex-wrap items-start justify-between  w-[78%] '>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </>
    )
}
