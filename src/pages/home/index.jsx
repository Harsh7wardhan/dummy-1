import React from 'react'

const Home = () => {
    return (
        <>
            <div className="relative w-full h-[700px] mt-8 p-[3rem]">
                <img src="/bg.png" className="w-full h-full object-cover opacity-30 rounded-md" alt="Background" />
                <div className="absolute inset-0 flex flex-col justify-center items-center ">
                    <div className='text-[60px] font-semibold'>MovieStreamer</div>
                    <div className='text-[40px] font-medium mb-8'>Enjoy Watching</div>
                    <div className='mx-[3rem]'>
                        <div className="text-center">
                            <p className="mt-4 text-lg text-black font-medium px-[3rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerc. </p>
                        </div>
                        <div className="text-center">
                            <p className="mt-4 text-lg text-black font-medium mx-[3rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerc. </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home