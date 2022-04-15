import Image from "next/image";
import { createRef, useState, useEffect } from "react";
import { Tooltip } from './Tooltip';

import arrow_left from '../public/arrow-left.png'
import arrow_right from '../public/arrow-right.png'

import jules from '../public/JulesVoxel.png'
import paola from '../public/PaolaVoxel.png'
import sullivan from '../public/SullivanVoxel.png'
import clara from '../public/ClaraVoxel.png'

export const Carousel = ({ coll }) => {

  const [currentImage, setCurrentImage] = useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = coll.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const totalImages = coll.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  return (
		// Images are placed using inline flex. We then wrap an image in a div
		// with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
		// Finally the image itself will be 100% of a parent div. Outer div is
		// set with position relative, so we can place our cotrol buttons using
		// absolute positioning on each side of the image.
		<div className="lg:container px-5 lg:p-12 flex flex-wrap justify-center w-full items-center m-auto">
			<div className="relative w-full">
				<div className="carousel">
					{coll.map((img, i) => (
						<Frame key={i} imgProps={img} refs={refs[i]} />
					))}
				</div>
			</div>
		</div>
	);
};

const Frame = ({imgProps, refs}) => {
  return (
		<div
			className="lg:container px-5 w-full flex-shrink-0 flex flex-wrap justify-center"
			ref={refs}>
			{imgProps.map((img, i) => (
				<Tooltip key={i}>
					<Image
						key={i}
						src={img}
						className="w-full nft-piece"
						width="250"
						height="250"
					/>
				</Tooltip>
			))}
		</div>
	);
}

// const arrowStyle =
// 'absolute z-10 h-15 w-15 flex items-center ';
// const sliderControl = isLeft => (
//   <button
//     type="button"
//     onClick={isLeft ? previousImage : nextImage}
//     className={`${arrowStyle} ${isLeft ? 'left-0' : 'right-0'}`}
//     style={{ top: '40%' }}
//   >
//     <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
//       {isLeft ? 
//       <Image src={arrow_left} width="40" height="40" className='cursor-pointer'/> 	 
//       : <Image src={arrow_right} width="40" height="40" className='cursor-pointer'/> }
//     </span>
//   </button>
// );