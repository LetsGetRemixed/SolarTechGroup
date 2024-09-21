import React from 'react';

const ImageModal = ({ image, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
                <img src={image} alt="Expanded view" className="max-w-full max-h-full" />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white text-black font-bold py-1 px-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
