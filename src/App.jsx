import React from 'react';
import { AiFillHtml5, AiFillInstagram, AiOutlineGlobal } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import images from './assets/images.jpeg';
import Footer from './components/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <Header/>
    <div className="bg-green-600"><nav className="mt-0">
        <div className="flex justify-between max-w-7xl mx-auto p-4">
          <div>
            <span className="text-gray-50 text-4xl">IMPACT</span>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">Home</a>
              </li>
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">About</a>
              </li>
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">Services</a>
              </li>
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">Portfolio</a>
              </li>
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">Blog</a>
              </li>
              <li className="menu border-b-4 border-transparent hover:border-gray-50">
                <a href="#" className="text-gray-50">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    
      <div className="p-14">
      <div className="flex justify-between items-start">
        <div className="max-w-md">
          <p className="mr-8 mb-6 text-justify">
            In common language usage, fruit normally means the seed-associated fleshy structures. In common language usage, fruit normally means the seed-associated fleshy structures. In common language usage, fruit normally means the seed-associated fleshy structures.fruit normally means the seed-associated fleshy structures. In common language usage, fruit normally means the seed-associated fleshy structures. In common language usage.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Get Started
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Watch Video
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center  mr-8 mb-6">
          <img
            src={images}
            alt="Sample Image"
            className="w-96 h-64 object-cover"
          />
        </div>
      </div>
    </div>

</div>

<div>
<div className="flex justify-between items-center p-14 bg-white">
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="text-center items-center">
      <AiFillHtml5 className="mx-auto" />
      <br></br>
      <p>About Noteworthy technology</p>
      <br />
      <p className="mb-2 text-2xl font-thin tracking-tight text-gray-900 dark:text-white">
        Learn more 
        <br></br><BsArrowRightCircleFill className="inline" />
      </p>
    </div>
  </a> 
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="text-center items-center">
      <AiFillInstagram className="mx-auto" />
      <br></br>
      <p>About Machine learning algorithms</p>
      <br />
      <p className="mb-2 text-2xl font-thin tracking-tight text-gray-900 dark:text-white">
        Learn more 
        <br></br><BsArrowRightCircleFill className="inline" />
      </p>
    </div>
  </a>
  <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="text-center items-center">
      <AiOutlineGlobal className="mx-auto" />
      <br></br>
      <p>About Supervised Learning Algorithm</p>
      <br />
      <p className="mb-2 text-2xl font-thin tracking-tight text-gray-900 dark:text-white">
        Learn more
        <br></br>
    <BsArrowRightCircleFill className="inline" />
      </p>
    </div>
  </a>
</div>
</div>
<Footer/>
</div>
    


    
    
  )
}

export default App
