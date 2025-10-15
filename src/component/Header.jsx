import React from 'react'
import Arrow from '../assets/Arrow.png'
import Gradient from '../assets/Gradient.png'
import Me from '../assets/Me.png'
import Ellipse5 from '../assets/Ellipse 5.png'

export default function Header() {
    return (
        <>
            {/* Mobile and Tablet Layout (hidden on lg and xl) */}
            <div className='w-[90%] sm:w-[80%] md:w-[70%] h-max m-auto bg-ed-500 pt-4 lg:hidden'>
                {/* Mobile Header */}
                <div className='text-center mb-6'>
                    <h3 className='text-white text-[18px] sm:text-[20px] font-medium !font-preahvihear mb-4'>Hello! I Am <span className='text-[#7127BA]'>Ibrahim Memon</span></h3>
                    <img src={Arrow} alt="" className='mx-auto mb-6 hidden' />
                </div>

                {/* Mobile Hero Section */}
                <div className='w-[100%] h-max bg-ble-500 mb-6'>
                    <div className='flex flex-col items-center text-center'>
                        <img src={Me} alt="" className='w-[200px] sm:w-[250px] mb-6' />
                        <div className='w-[100%] relative'>
                            <h3 className='text-white text-[16px] sm:text-[18px] font-normal mb-2'>A Developer Who</h3>
                            <div className='flex justify-center mb-4 hidden'>
                                <img src={Ellipse5} alt="" className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]' />
                            </div>
                            <p className='text-white text-[24px] sm:text-[28px] font-medium mb-2'>Judges a book by its <span className='text-[#7127BA]'>cover</span>...</p>
                            <p className='text-white text-[14px] sm:text-[16px]'>Because if the cover does not impress you what else can?</p>
                        </div>
                    </div>
                </div>

                {/* Mobile About Section */}
                <div className='w-[100%] h-max bg-rd-500 pt-8 pb-8'>
                    <h2 className='text-[24px] sm:text-[28px] font-medium text-white mb-4'>I'm a Software Engineer.|</h2>
                    <p className='text-white text-[14px] sm:text-[16px] font-normal mb-4'>currently I'm a Software Engineer at <span className='text-[#1877F2]'>Facebook</span>.</p>
                    <p className='text-white text-[14px] sm:text-[16px] font-normal'>
                        A self-taught Ul/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </p>
                </div>
            </div>

            {/* Desktop Layout (lg and xl only) */}
            <div className='w-[60%] h-max m-auto bg-ed-500 pt-1 hidden lg:block'>
                <h3 className='text-white text-[16px] font-medium !font-preahvihear ml-[15rem] mt-[7rem]'>Hello! I Am <span className='text-[#7127BA]'>Ibrahim Memon</span></h3>
                <img src={Arrow} alt="" className='ml-[8.7rem] mt-[-41px]' />
                <div className='w-[100%] h-[200px] bg-ble-500 mt-[-10px] flex items-center'>
                    <img src={Me} alt="" />
                    <div className='w-[100%] h-[100%] bg-rd-500 pt-8 relative'>
                        <h3 className='text-white text-[15px] font-normal'>A Developer Who</h3>
                        <div className='w-[100%] h-[100%] absolute top-[63%] left-[12.5%] transform '>
                            <img src={Ellipse5} alt="" className='w-[16%] h-[22%]' />
                        </div>
                        <p className='text-white text-[40px] font-medium w-[35%]'>Judges a book by its <span className='text-[#7127BA]'>cover</span>...</p>
                        <p className='text-white text-[12px]'>Because if the cover does not impress you what else can?</p>

                    </div>
                </div>
                <div className='w-[100%] h-max bg-rd-500 pt-20'>
                    <h2 className='text-[40px] font-medium text-white'>I'm a Software Engineer.|</h2>
                    <p className='text-white text-[16px] font-normal'>currently I'm a Software Engineer at <span className='text-[#1877F2]'>Facebook</span>.</p>
                    <p className='text-white text-[16px] font-normal mt-10 w-[53.7%]'>
                        A self-taught Ul/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </p>

                </div>


            </div>
        </>
    )
}