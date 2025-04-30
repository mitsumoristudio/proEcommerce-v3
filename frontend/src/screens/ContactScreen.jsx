
import React from 'react';
import {assets} from "../assets/assets";

export default function ContactScreen() {
    return (
        <div>
            <div className={'text-center text-2xl pt-10 text-gray-600'}>
                <p>CONTACT <span className={'text-gray-700 font-semibold'}>US</span></p>
            </div>

            <div className={'my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'}>

                <img className={'w-full md:max-w-[340px] rounded-md'} src={assets.waikiki} alt={''}/>

                <div className={'flex flex-col justify-center items-start gap-6'}>
                    <p className={'font-semibold text-lg text-gray-600'}>Our Office</p>
                    <p className={'text-gray-500'}>4924 Manassas Circle <br/> TN, USA</p>
                    <p className={'text-gray-500'}>TEL (615)-484-0567 <br/> Email: satmitsumori@gmail.com</p>
                    <p className={'font-semibold text-lg text-gray-600'}>Software Developer</p>

                </div>
            </div>

        </div>
    )
}