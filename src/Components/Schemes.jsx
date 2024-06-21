import React from 'react';
import { useNavigate } from 'react-router-dom';
import scheme from '../assets/saving.jpg';
// import about1 from '../assets/about1.png';
// import about2 from '../assets/about12.jpg';
// import membership from '../assets/membership.jpg';
// import bank from '../assets/bank.jpg';
// import booking from '../assets/booking.jpg';
// import bank2 from '../assets/bank2.png'

const Schemes = () => {
    const navigate=useNavigate();
      const handleClick = () => {
        navigate('/goldschemes');
      };
  return (
        <div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="scheme">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={scheme} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-black font-semibold mb-4 wd:w-4/5'>
                   Join Our Schemes To Save Your Money
                </h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam vero ad. Et dolorem dolorum excepturi, provident similique iste est repellat, aperiam accusantium maiores harum officiis, velit optio sint exercitationem magnam illo blanditiis aspernatur nemo placeat? Perferendis provident commodi incidunt alias voluptatibus unde quam. Fugit natus ex laborum soluta accusamus debitis minus similique perferendis quos nostrum necessitatibus quam, laboriosam corporis, quis numquam, suscipit deleniti? Nisi commodi, tempore, eveniet debitis ex rerum consectetur fugiat perferendis obcaecati nulla eius mollitia quos quidem esse officia assumenda est voluptatibus dolorum? Ab labore obcaecati aperiam suscipit illum omnis, totam ducimus distinctio odio, laudantium reprehenderit delectus!
                </p>
                <button className='btn-primary' onClick={handleClick}>Join Schemes</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Schemes