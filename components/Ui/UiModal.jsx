// components/Modal.js
import React from 'react';
import Image from 'next/image';

const UiModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          width={1000}
          height={600}
          alt="Modal Image"
          className=" max-w-[300px] md:max-w-[500px] max-h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UiModal;
