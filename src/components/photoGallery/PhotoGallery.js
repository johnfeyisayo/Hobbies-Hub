import React, { useState } from 'react';
import './PhotoGallery.css';
import Coding from '../images/Coding.jpg';
import Football from '../images/Football.jpg';
import Movies from '../images/Movies.jpg';
import Music from '../images/Music.jpg';
import Gaming from '../images/Gaming.jpg';
import Dance from '../images/Dance.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PhotoGallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: Coding
    },
    {
      id: 2,
      imgSrc: Football
    },
    {
      id: 3,
      imgSrc: Music
    },
    {
      id: 4,
      imgSrc: Movies
    },
    {
      id: 5,
      imgSrc: Gaming
    },
    {
      id: 6,
      imgSrc: Dance
    }
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <h1 className="photogallery-heading">Photo gallery</h1>
      <h2 className="photogallery-paragraph">
        Well, you found my Photo Gallery!, this showcases my hobbies and interests.
      </h2>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempImgSrc} />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PhotoGallery;
