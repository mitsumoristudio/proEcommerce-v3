
import React from 'react';
import {assets} from "../assets/assets";

export default function AboutUsScreen() {
    return (
        <div>
                 <div className={"text-center text-2xl pt-10 text-gray-600"}>
                     <p>ABOUT <span className={'text-gray-700 font-medium'}>US</span></p>
                 </div>

            <div className={'flex flex-col my-10 md:flex-row gap-10 px-4'}>
                <img className={'w-full md: max-w-[400px] rounded-lg shadow-md'} src={assets.fuji} alt={''}/>


                         <div className={'flex flex-col justify-center gap-6 md: w-2/4 text-sm text-gray-600 '}>
                             <p>Welcome to Muji inspired Ecommerce website. Concept came from shopping for book cabinets on their
                                 website and
                                 found this would be ideal project to utilize React and MongoDB</p>
                             <p>Built by taking examples from common Ecommerce platform such as REI and TJMax</p>
                             <b className={'text-gray-800'}>Our Mission </b>
                             <p>Provide user friendly shopping experience</p>
                         </div>
            </div>

            <section className={"flex flex-col justify-center px-4"}>
                <div className={'text-2xl my-4'}>
                    <p>WHY <span className={'text-gray-800 font-semibold'}>PROJECT WAS CHOSEN</span></p>
                </div>

            <div className={'flex flex-col md:flex-row mb-20'}>
                <div
                    className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
                    <b>Show your work</b>
                    <p>Continue development journey by building in public. Anticipation to build robust application.</p>
                </div>

                <div
                    className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
                    <b>Concepts learned</b>
                    <p>Payment checkout with Paypal and building custom authentication</p>
                </div>

                <div
                    className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
                    <b>Personalization</b>
                    <p>Utilized Tailwindcss for drafting the CSS and ease of use</p>
                </div>
            </div>
            </section>

        </div>

        //         <div className={'flex flex-col justify-center gap-6 md: w-2/4 text-sm text-gray-600 '}>
        //             <p>Welcome to Muji inspired Ecommerce website. Concept came from shopping for book cabinets on their
        //                 website and
        //                 found this would be ideal project to utilize React and MongoDB</p>
        //             <p>Built by taking examples from common Ecommerce platform such as REI and TJMax</p>
        //             <b className={'text-gray-800'}>Our Mission </b>
        //             <p>User friendly components and positive shopping experience</p>
        //         </div>
        //
        //         <div className={'text-xl my-4'}>
        //             <p>WHY <span className={'text-gray-700 font-semibold'}>PROJECT WAS CHOSEN</span></p>
        //         </div>
        //
        //         <div className={'flex flex-col md:flex-row mb-20'}>
        //             <div
        //                 className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
        //                 <b>Efficiency</b>
        //                 <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        //             </div>
        //
        //             <div
        //                 className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
        //                 <b>Convenience</b>
        //                 <p>Access to a network of trusted healthcare professional in your area</p>
        //             </div>
        //
        //             <div
        //                 className={'border px-10 md:px-16 py-8 sm: py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 text-gray-600 cursor-pointer '}>
        //                 <b>Personalization</b>
        //                 <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}