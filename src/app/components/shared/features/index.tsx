"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

export default function Features() {

    return (
        <section className='dark:bg-darkmode'>
            <div className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
                    <div className='mb-8 md:mb-0 flex-1'>
                        <div className='relative' data-aos="fade-right">
                            <Image
                                src="/images/features/features_iimage.jpg"
                                alt='property'
                                width={640}
                                height={615}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <div className="lg:max-w-96 max-w-37.5 absolute bottom-0 mx-auto left-0 right-0 lg:mr-3.75">
                                <div className="bg-white shadow-lg rounded-t-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                                    <div className='relative'>
                                        <Image
                                            src=""
                                            alt="Property Image"
                                            height={235}
                                            width={370}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 '>
                        <div className="lg:pl-20 flex flex-col justify-center h-full">
                            <p className='mb-8 md:mb-3.75 text-4xl font-bold text-midnight_text dark:text-white' data-aos="fade-left">Why People Choose Property</p>
                            <div className='flex mb-8 md:mb-3.75 items-center gap-8' data-aos="fade-left" data-aos-delay="100">
                                <div className="bg-primary/20 p-4 rounded-full flex justify-center items-start">
                                    <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="40" height="40" style={{ color: '#5e9d0c' }} />
                                </div>
                                <div className='flex-col'>
                                    <p className='text-2xl mb-2'>Great Experience</p>
                                    <p className='text-gray text-base'>Add your description here....</p>
                                </div>
                            </div>

                            <div className='flex mb-8 md:mb-3.75 items-center gap-8' data-aos="fade-left" data-aos-delay="100">
                                <div className="bg-primary/20 p-4 rounded-full flex justify-center items-start">
                                    <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="40" height="40" style={{ color: '#5e9d0c' }} />
                                </div>
                                <div className='flex-col'>
                                    <p className='text-2xl mb-2'>Great Experience</p>
                                    <p className='text-gray text-base'>Add your description here....</p>
                                </div>
                            </div>

                            <div className='flex mb-8 md:mb-3.75 items-center gap-8' data-aos="fade-left" data-aos-delay="100">
                                <div className="bg-primary/20 p-4 rounded-full flex justify-center items-start">
                                    <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="40" height="40" style={{ color: '#5e9d0c' }} />
                                </div>
                                <div className='flex-col'>
                                    <p className='text-2xl mb-2'>Great Experience</p>
                                    <p className='text-gray text-base'>Add your description here....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
