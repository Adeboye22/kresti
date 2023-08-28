import React from 'react';
import Carousel from './Carousel';
import SvgThumb from '../assets/SvgThumb.png';
import SvgCar from '../assets/SvgCar.png';
import SvgBadge from '../assets/SvgBadge.png';
import SvgStar from '../assets/SvgStar.png';
import Img10 from '../assets/Img10.jpg';
import Img3 from '../assets/Img3.jpg';
import Review1 from '../assets/Review1.jpg';
import Review2 from '../assets/Review2.jpg';
import Review3 from '../assets/Review3.jpg';
import Review4 from '../assets/Review4.jpg';

const Home = () => {
    return(
        <div className='bg-blue min-h-screen'>
            <main>
                <section>
                    <div className='bg-gradient-to-l from-yellow-100 from-100% to-white  h-100 overflow-hidden relative'>
                        <div className='h-full absolute mix-blend-darken'>
                            <Carousel />
                        </div>
                    </div>
                </section>
                <section className='flex p-20 justify-between'>
                    <div className='flex flex-col'>
                        <img src={SvgBadge} alt="badge" className='h-8 w-8 bg-white rounded self-center'/>
                        <span className='pt-6 text-white text-lg'>Regulatory Compliance</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgCar} alt="Car" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Integrated Company</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgStar} alt="star" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Exceptional User Experience</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgThumb} alt="thumb" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Affordable Insurance</span>
                    </div>
                </section>
                <section className='bg-white'>
                    <div className='flex flex-col p-8'>
                        <h1 className='text-center text-gray text-xl font-bold'>What would you like to insure?</h1>
                        <div className='flex flex-row justify-between px-16 pt-16'>
                            <div className='flex flex-col'>
                                <div className='rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2'>
                                    <img src={Img3} alt="" className='w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>Automobile</span>
                            </div>
                            <div className='flex flex-col'>
                                <div className='rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2'>
                                    <img src={Img10} alt="" className='w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>House</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-12 flex flex-row justify-evenly'>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review1} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Mary Reeves</h3>
                        <span className='text-center font-bold'>"lkjhgf"</span>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review2} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>White Cryer</h3>
                        <span className='text-center text-gray font-bold'>lkjhgf</span>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review3} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Veronica Harrington</h3>
                        <span className='text-center text-gray font-bold'>lkjhgf</span>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review4} alt="" className='object-contain' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Benny Young</h3>
                        <span className='text-center text-gray font-bold'>lkjhgf</span>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;