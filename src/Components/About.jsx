import React from 'react';
import about1 from '../assets/about1.png';
// import about2 from '../assets/about12.jpg';
import membership from '../assets/membership.jpg';
import bank from '../assets/bank.jpg';
import booking from '../assets/booking.jpg';
import bank2 from '../assets/bank2.png'

const About = () => {
  return (
        <div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="about">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={about1} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-black font-semibold mb-4 wd:w-4/5'>
                   The Unseen Collections of World
                </h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam vero ad. Et dolorem dolorum excepturi, provident similique iste est repellat, aperiam accusantium maiores harum officiis, velit optio sint exercitationem magnam illo blanditiis aspernatur nemo placeat? Perferendis provident commodi incidunt alias voluptatibus unde quam. Fugit natus ex laborum soluta accusamus debitis minus similique perferendis quos nostrum necessitatibus quam, laboriosam corporis, quis numquam, suscipit deleniti? Nisi commodi, tempore, eveniet debitis ex rerum consectetur fugiat perferendis obcaecati nulla eius mollitia quos quidem esse officia assumenda est voluptatibus dolorum? Ab labore obcaecati aperiam suscipit illum omnis, totam ducimus distinctio odio, laudantium reprehenderit delectus!
                </p>
                <button className='btn-primary'>Learn More</button>
            </div>

        </div>
    </div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                 <div>
                    <div className='md:w-1/2'> 
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 wd:w-4/5'>
                    Most people join our schemes<br/><span className='text-brandPrimary'>to got a awesome jewels</span>
                </h2>
                <p className='md:w-3/4 text-sm text-black mb-8'>
                       We reached here with our hard work and dedication 
                </p>
                    </div>
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={membership} alt="" style={{ width: '70px', height: '70px' }}/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>22,345</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={booking} alt="" style={{ width: '70px', height: '70px' }}/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>222,345</h4>
                                <p>Scheme Bookings</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={bank} alt="" style={{ width: '70px', height: '70px' }}/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>22,345</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={bank2} alt="" style={{ width: '60px', height: '60px' }}/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>212,345</h4>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
    </div>
    </div>
  )
}

export default About