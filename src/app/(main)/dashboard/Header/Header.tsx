"use client";

import styles from "./Header.module.css";
import { useState, useCallback } from "react";
import Modal from "@/components/Modal";
import { useCategory, type Category } from "@/services/category";
import { useAccount, type Account } from "@/services/account";
import AddTransaction from "./AddTransaction";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return (
    <div className={styles.headerBox}>
      <p className={styles.mainTitle}>대시보드</p>
      <button className={styles.addButton} onClick={openModal}>
        <p>+</p>
        <p>거래 추가</p>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={"거래 추가"}>
        <AddTransaction onClose={closeModal} />
      </Modal>
    </div>
  );
}
export default Header;
