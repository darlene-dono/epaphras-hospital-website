'use client';

import { Icon } from '@iconify/react/dist/iconify.js';

export default function DiscoverProperties() {

    return (
        <section className='dark:bg-darkmode'>
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white" data-aos="fade-left">Our Core Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-8">
                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">General Consultation</p>
                        </div>
                    </div>

                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">Surgery</p>
                        </ div>
                    </div>

                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">Obstetrics & Gynecology</p>
                        </div>
                    </div>

                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">Laboratory & Diagnostics</p>
                        </div>
                    </div>

                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">Emergency Care</p>
                        </div>
                    </div>

                    <div className="image-item block" data-aos="fade-up" data-aos-delay="100">
                        <div className='group'>
                            <Icon icon="line-md:beer-alt-twotone-loop" stroke='1' width="96" height="96" style={{ color: '#5e9d0c' }}
                                className='p-4 border-2 rounded-lg border-green-200 dark:border-green-200 mb-6 group-hover:-translate-y-1 group-hover:duration-500'
                            />
                            <p className="text-md leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">Fertility / IVF</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}