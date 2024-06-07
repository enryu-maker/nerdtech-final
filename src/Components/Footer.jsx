import { motion } from "framer-motion";
import React from "react";
import { Images } from "../Assets/Images";
import { AboutData, ContactData } from "../data";
export default function Footer() {
  return (
    <div className="bg-black  w-full flex flex-col gap-5 justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="cursor-pointer flex justify-center items-center font-MundoBold sm:w-full mt-[100px] text-white self-center text-center font-bold"
      >
        <img
          src={Images.slogan}
          alt="Slogan"
          className="object-contain w-[92%] sm:w-1/2"
        />
      </motion.div>
      <div className="container mx-auto">
        {/* <hr className="border-t-1 border-gray-700 mb-5" /> */}
        <div className="grid grid-cols-1 place-items-center font-MundoRegular sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
          <div className="mb-6 md:mb-0">
            <img
              src={Images.foot}
              alt="NerdTech"
              className="w-[250px] h-auto sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]"
            />
          </div>
          <div className="grid grid-cols-2 md:space-x-12 gap-4">
            <div>
              <h3 className="font-bold text-xl mb-4 text-white">About</h3>
              <a href="tel:9405649047" className="block mb-2 text-lg text-white">
                +91 9405649047
              </a>

              {AboutData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block mb-2 text-lg text-white hover:text-blue-500"
                >
                  {" "}
                  {item.title}{" "}
                </a>
              ))}

              <a
                href="https://g.page/r/CVVoVIFfbppEEBM/review"
                target="_blank"
                rel="noreferrer"
                className="block mb-2 text-lg mt-5 text-white  hover:text-blue-500"
              >
                Google Map
              </a>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-white">Contact</h3>
              <a
                href="mailto:contact@nerdtech.in"
                className="block mb-2 text-lg text-white hover:text-blue-500"
              >
                contact@nerdtech.in
              </a>

              {ContactData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block mb-2 text-lg  hover:text-blue-500 text-white"
                >
                  {" "}
                  {item.title}{" "}
                </a>
              ))}
              <div className="flex gap-2">
                <a href="/" className="block mb-2 mt-5 text-lg hover:text-blue-500 text-white">
                  Cookies | 
                </a>
                <a href="/" className="block mb-2 mt-5 text-lg hover:text-blue-500 text-white">
                 Privacy 
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-700 mt-5" />
        <div className="container font-MundoI mx-auto mt-6 mb-5 text-start text-lg text-gray-500">
          © 2024 NerdTech. All rights reserved.
        </div>
      </div>
    </div>
  );
}
