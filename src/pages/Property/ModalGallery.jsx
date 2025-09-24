import React, { useState } from 'react';
import Gallery from './Gallery';
import Modal from '../../components/Modal';

// Sample data for the images
const images = [
  { id: 1, url: 'https://new.slickrock.com/wp-content/uploads/2024/05/belize-private-island-115.jpg' },
  { id: 2, url: 'https://www.jasper-park-lodge.com/content/uploads/2022/11/Dine-Orso-Gallery-_DSF4881-Enhanced.jpg' },
  { id: 3, url: 'https://new.slickrock.com/wp-content/uploads/2024/05/belize-private-island-115.jpg' },
  { id: 4, url: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.discoverafrica.com/wp-content/uploads/2014/01/Jock-Safari-Lodge-Guest-Experience-8-Medium.jpg' },
  { id: 5, url: 'https://cdn0.hitched.co.uk/article/7377/3_2/1280/jpg/127737-aardvark-safaris-view-of-romantic-bath-overlooking-a-game-reserve.jpeg' },
];

const ModalGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openModal = (index) => {
    setInitialImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-sans ">
      <Gallery openModal={openModal} />
      {isModalOpen && (
        <Modal
          images={images}
          initialIndex={initialImageIndex}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ModalGallery;