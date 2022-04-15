import Image from 'next/image';
import { Timer } from './Timer';
import fresque from'../public/fresque1.jpg'
import Link from 'next/link';
import arrow from '../public/arrow.svg'

export const Fresque = () => {
 
  return (
    <div className='w-full flex flex-col'>
      <Image src={fresque} className='fresque' width="1280px" height="720px" layout="responsive" objectFit="contain"/>
      <Timer/>
      <Link href="#presentation">
        <Image
          className='grow p-5 mt-5'
          src={arrow}
          alt="arrow logo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}