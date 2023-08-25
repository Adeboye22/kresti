import { Carousel } from "@material-tailwind/react";
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'

 
function CarouselCustomNavigation() {
  return (
    <Carousel transition={{ duration: 2 }}>
      <img
        src={Img1}
        alt="image 1"
        className="h-full w-full object-cover blur-sm"
      />
      <img
        src={Img2}
        alt="image 2"
        className="h-full w-full object-cover blur-sm"
      />
      <img
        src={Img3}
        alt="image 3"
        className="h-full w-full object-cover blur-sm"
      />
     <img
        src={Img4}
        alt="image 4"
        className="h-full w-full object-cover blur-sm"
      />
    </Carousel>
  );
}

export default CarouselCustomNavigation;