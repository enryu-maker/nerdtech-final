import React from 'react'
import Header from '../Components/Header'
import BlogCard from '../Components/BlogCard'
import axios from "axios";
import Footer from '../Components/Footer';
export default function Blog() {
    const [show, setShow] = React.useState(false)
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const getBlogs = async () => {
        setLoading(true)
        try {
            let response = await axios.get("https://nerdtech.pythonanywhere.com/blog/blogposts/");
            setData(response.data)
            console.log(response.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)

        }
    }

    React.useEffect(()=>{
        getBlogs()
    },[])

    return (
        <>
            <Header show={show} />
            <div className='w-full self-center flex flex-col items-center justify-center'>
                <div className='flex flex-wrap items-center justify-between w-[78%] mt-[100px] pb-5 sm:space-y-0 space-y-5'>
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
                    {
                        data?.map((item, index) => (
                            <BlogCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
