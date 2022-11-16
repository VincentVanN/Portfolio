import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './contact.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFormMessage,
  setShowModal,
} from '../../feature/navigation.slice';
import GlitchElement from '../../GlitchElement/GlitchElement';
import AnimatedTextLetter from '../AnimatedTextLetter/AnimatedTextLetter';

function ContactForm() {
  const dispatch = useDispatch();
  const { formMessage } = useSelector((state) => state.navigation);
  const [buttonText, setbuttonText] = useState('');
  const [focus, setfocus] = useState('');
  const form = useRef();
  const buttonRef = useRef();
  const [buttonWidth, setButtonWidth] = useState(0);
  const updateDimensions = () => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.clientWidth);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    setButtonWidth(buttonRef.current.clientWidth);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  const RADIUS = (buttonWidth / 2) + 10;
  const inputVariants = {
    open: {
      color: '#fdfcf2',
      x: 10,
      y: -12,
      borderLeft: 'solid 1px #fdfcf2',
      borderRight: 'solid 1px #fdfcf2',
    },
    init: {
      color: '#dbdbda50',
      x: 0,
      y: 0,
    },
  };
  //
  console.log(formMessage);
  const sendEmail = () => {
    emailjs.sendForm(
      'service_0qe43eo',
      'template_qz14e1j',
      form.current,
      'LgmGeq9KNgellr_UM',
    )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            setbuttonText('message envoye - message envoye - ');
          }
        },
        (error) => {
          dispatch(setFormMessage(`une erreur est survenue: ${error.text}`));
        },
      );
  };
  const verifEmail = (e) => {
    e.preventDefault();
    if (!form.current.user_name.value) {
      console.log("erreur1");
      dispatch(setFormMessage('Votre nom est obligatoire.'));
    }
    if (!form.current.user_email.value) {
      console.log("erreur2");
      dispatch(setFormMessage('Votre email est obligatoire.'));
    }
    if (!form.current.message.value) {
      console.log("erreur3");
      dispatch(setFormMessage('Le texte est vide.'));
    }
    if (formMessage.length !== 0) {
      console.log("erreurglob");
      dispatch(setShowModal(true));
    }
    else {
      console.log("envoyé");
      sendEmail();
    }
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={verifEmail}>
        <div className="input-container">
          <input
            type="text"
            name="user_name"
            onFocus={() => setfocus('user_name')}
            onBlur={() => setfocus('')}
          />
          <motion.span
            className="inputSpan"
            animate={focus === 'user_name' ? 'open' : 'init'}
            variants={inputVariants}
            onClick={() => setfocus('user_name')}
          >
            <GlitchElement text="Nom et prénom" focus={focus === 'user_name'} element="span" />
          </motion.span>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="user_email"
            onFocus={() => setfocus('user_email')}
            onBlur={() => setfocus('')}
          />
          <motion.span
            className="inputSpan"
            animate={focus === 'user_email' ? 'open' : 'init'}
            variants={inputVariants}
            onClick={() => setfocus('user_email')}
          >
            <GlitchElement text="Email" focus={focus === 'user_email'} element="span" />
          </motion.span>
        </div>
        <div className="input-container-message">
          <textarea
            name="message"
            onFocus={() => setfocus('message')}
            onBlur={() => setfocus('')}
          />
          <motion.span
            className="inputSpan"
            animate={focus === 'message' ? 'open' : 'init'}
            variants={inputVariants}
            onClick={() => setfocus('message')}
          >
            <GlitchElement text="message" focus={focus === 'message'} element="span" />
          </motion.span>
        </div>
        <div className="contactForm-button-container">
          <motion.button
            className="formButton"
            type="submit"
            ref={buttonRef}
            whileTap={{
              scale: 0.95,
            }}
          />
          <AnimatedTextLetter
            text={buttonText || 'valider - valider -'}
            radiusRef={RADIUS + 5}
            direction="forward"
          />
        </div>

      </form>
    </div>
  );
}

export default ContactForm;
