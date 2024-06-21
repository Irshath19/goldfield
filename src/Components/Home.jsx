import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/img4.jpg';
import banner2 from '../assets/img3.jpg';
const Home = () => {
  return (
    <div className='bg-white' id="home">
   <div className='px-4 1g:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
        <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justift-between gap-12">
          <div className='md:w-1/2'>
            <img src={banner1} alt="" className='w-full md:w-auto' />
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
              Adorn yourself with elegance,
              <span className='text-brandPrimary leading-snug'>wear memories, and let every piece tell a story.</span>
            </h3>
            <button className='btn-primary'>Explore more</button>
          </div>
        </div>
        <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justift-between gap-12">
          <div className='md:w-1/2'>
            <img src={banner2} alt="" className='w-full md:w-auto' />
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
              Adorn yourself with elegance,
              <span className='text-brandPrimary leading-snug'>wear memories, and let every piece tell a story.</span>
            </h3>
            <button className='btn-primary'>Explore more</button>
          </div>
        </div>
        <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justift-between gap-12">
          <div className='md:w-1/2'>
            <img src={banner1} alt="" className='w-full md:w-auto' />
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
              Adorn yourself with elegance,
              <span className='text-brandPrimary leading-snug'>wear memories, and let every piece tell a story.</span>
            </h3>
            <button className='btn-primary'>Explore more</button>
          </div>
        </div>
        {/* Repeat similar modifications for other carousel items */}
      </Carousel>
    </div>

    </div>
  );
};

export default Home;
