import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import './modalForm.scss';
import { deleteFormMessage, setShowModal } from '../../feature/navigation.slice';

function ModalForm() {
  const dispatch = useDispatch();
  const { formMessage, showModal } = useSelector((state) => state.navigation);
  const modalFormVariants = {
    open: {
      right: '10%',
    },
    init: {
      right: '-20%',
    },
  };
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        dispatch(setShowModal(false));
        dispatch(deleteFormMessage());
      }, 3500);
    }
  }, [showModal]);
  return (
    <motion.div
      className="modalForm"
      animate={showModal ? 'open' : 'init'}
      variants={modalFormVariants}
    >
      {formMessage.map((element) => (
        <p
          key={element}
        >
          {element}
        </p>
      ))}
    </motion.div>
  );
}

export default React.memo(ModalForm);
