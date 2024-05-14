import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { Images } from '../Assets/Images';
export default function Contact() {
  const [show, setShow] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [Message, setMessage] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [City, setCity] = React.useState("");
  const [Projects, setProjects] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [Sucess, setSucess] = React.useState(false);
  async function sendEmail() {
    setLoading(true);
    const data = {
      fullname: Name,
      phone: Phone,
      project:Projects,
      city:City,
      email: Email,
      message: Message,
    };
    await fetch(
      "https://formspree.io/f/xbjvrwqp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data);
        setSucess(true);
        setMsg("Thanks, We will contact you soon!!!:-)");
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);

        setSucess(false);
        setMsg("Something went wrong");
        setLoading(false);
      });
  }

  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);
  const text = "There's so much to be done.".split(' ');
  return (
    <>
      <Header show={show} />
      <motion.div
        initial={{ opacity: 0 }}
        whileFocus={() => {
          setShow(!show);
        }}
        whileInView={{
          // scale: [.75, .95, 1],
          // rotate: [-20, 20, 0],
          transition: { duration: 0.7, ease: 'linear' },
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.2, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className={`h-[100vh] w-full bg-black flex flex-col ${
          next ? ' items-end justify-end ' : 'items-center justify-center  '
        }  scroll-smooth overflow-hidden`}>
        {next ? (
          <motion.p className=' font-MundoBold self-start p-10 text-start text-6xl font-bold text-white '>
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
                className=''>
                {el}{' '}
              </motion.span>
            ))}
          </motion.p>
        ) : (
          <motion.p className=' font-MundoBold w-[78%] self-center text-start md:text-[160px] text-[100px] font-bold text-white '>
            Come,
            <br />
            say hello.
          </motion.p>
        )}
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex justify-center scroll-smooth'>
        <motion.div className=' font-MundoBold w-[78%] border-t flex justify-between py-20  self-center '>
          <p className=' font-MundoRegular md:text-5xl text-3xl tracking-wide  text-white'>
            Are you the best brand in India? Or in the world? Difficult to
            answer, right? We feel the same when someone asks, "are you the best
            software agency in India? Or in the world?" hmmm.... We can get
            there. We are sure. But not without you. <br /> <br />
            Let's talk.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className=' w-full pb-10 bg-black flex flex-col items-center justify-center scroll-smooth'>
        <p className=' text-white w-[68%] self-center font-MundoRegular md:text-5xl text-3xl tracking-wide  text-white'>{msg}</p>
        <div className=' md:w-[78%] w-full flex justify-between items-center flex-wrap space-y-5 self-center mt-5 '>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Name*'
              onChange={(e) => setName(e.target.value)}
              className='border-b-[1px] w-[450px]  border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Email*'
              onChange={(e) => setEmail(e.target.value)}
              className='border-b-[1px] w-[450px] border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Phone*'
              onChange={(e) => setPhone(e.target.value)}
              className='border-b-[1px] w-[450px] border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
          <div>
            <input
              type='email'
              name=''
              id=''
              placeholder='City*'
              onChange={(e) => setCity(e.target.value)}
              className='border-b-[1px] w-[450px] border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='project*'
              onChange={(e) => setProjects(e.target.value)}
              className='border-b-[1px] w-[450px] border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Message*'
              onChange={(e) => setMessage(e.target.value)}
              className='border-b-[1px] w-[450px] border-white text-white bg-black  outline-none placeholder:text-2xl  font-MundoRegular p-3'
            />
          </div>
        </div>
        <div className='flex items-center justify-center self-center mt-10'>
          <button 
          onClick={()=>{
            sendEmail()
          }}
          className=' border-black text-lg bg-white text-black border-[1px] px-5 md:w-[250px] py-5 cursor-pointer flex justify-center items-center uppercase hover:bg-blue-500 hover:text-white font-MundoI '>
            {
              Sucess?
              "Sent"
              :
              "Send?"
            }
          </button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
