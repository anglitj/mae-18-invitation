import React from "react";
import Image, { StaticImageData } from "next/image";
import { Modal } from "flowbite-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function ModalImage({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ModalProps) {
  return (
    <Modal
      show={isOpen}
      onClose={onClose}
      className="border border-gray-200 bg-transparent shadow-sm"
      popup
      // size="md"
    >
      <Modal.Header className=""></Modal.Header>
      <Modal.Body className="">
        <div className="relative h-[80vh] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}
