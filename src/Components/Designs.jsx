import React,{useEffect,useState} from 'react';
import traditional from '../assets/traditional.png';
import western from '../assets/western.png';
import engagement from '../assets/engagement.png';
import {Link} from 'react-router-dom';
import '../App.css';
const Designs = () => {
    const [imageList, setImageList] = useState([
        { id:1,src: western, alt: 'Western', description: 'Tradition Meets Western' },
        { id:2,src: engagement, alt: 'Engagement', description: 'Engagement Day' },
        { id:3,src: traditional, alt: 'Traditional', description: 'Traditional Wear' },
      ]);
    
      useEffect(() => {
        let currentIndex = 0;
    
        function shuffleArray(array) {
          // Shuffle array using Fisher-Yates algorithm
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
    
        shuffleArray(imageList);
    
        const intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % imageList.length;
          setImageList((prevList) => {
            shuffleArray(prevList);
            return [...prevList];
          });
        }, 2000); // Change slide every 3 seconds (adjust as needed)
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [imageList]);
      // const handleImageClick = () => {
      //   // Redirect to the service page
      //   history.push('/traditionaldesign');
      // };
  return (
    <div>
<div className="flex items-center justify-center mt-4 mb-4">
      <p className="text-3xl font-cormorant-garamond font-medium text-center">
        FIND YOUR <br />
        WEDDING IDENTITY
      </p>
    </div>
        <div id="slideshow" className="flex flex-row items-center justify-center gap-4 overflow-hidden">
    {imageList.map((image) => (
      <div key={image.id} className="text-center">
        <img src={image.src} alt={image.alt} className="slideshow-image hover-float w-96 h-auto" />
        <p className="text-2xl text-brandPrimary font-semibold mt-4 mb-4">{image.description}</p>
      </div>
    ))}
  </div> 
 </div>
  )
}

export default Designs