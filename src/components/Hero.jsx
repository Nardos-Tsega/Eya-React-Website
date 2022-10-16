import React from 'react';
import Eyalogo from '../assets/eyalogo.png';
import Underlay from '../assets/underlay.png';
import Mainnav from './Mainnav';
import Sociallinks from './Sociallinks';
import Smile from '../assets/SmilingKids.png';

const Hero = () => {
  return (
    <div className='grid grid-cols-2 min-h-screen'>
        <div className='flex pl-12 flex-col'>
            <img src={Eyalogo} width="103px" height="105px" alt='eya logo' />
            <img className='absolute pt-24' src={Underlay} alt="eya underlay logo"/>
            <h1 className='text-5xl font-bold pt-16 text-[#343434]'>The best way to find yourself is to lose yourself in the service of others</h1>
            <p className='pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
            <div className='mt-8'>
                <button className='bg-[#C2252E] text-white py-3 px-7 text-lg font-medium rounded'>Donate</button>
                <button className='border ml-4 border-[#C2252E] py-3 px-7 text-[#C2252E] text-lg font-medium rounded'>Volunteer</button>
            </div>
            <Sociallinks />
        </div>
        <div className='bg-[#343434] flex flex-col justify-between'>
            <Mainnav />
            <img className='max-w-[85%]' src={Smile} alt="Smiling kids" />
        </div>
    </div>
  )
}

export default Hero