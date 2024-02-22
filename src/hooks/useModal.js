import { useState, useCallback } from "react";

export const useModal = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  // `useCallback` нужен для того, чтобы зафиксировать ссылку на функцию.
  
  const openModal = useCallback((data) => {
    if (data) {
      setIsModalOpen(true);
      setModalData(data);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalData({});
  }, []);

  return {
    isModalOpen,
    modalData,
    openModal,
    closeModal,
  };
};
