import { useState } from 'react';
import Cursor from '../Cursor/Cursor';
import ModalForm from '../ModalForm/ModalForm';
import './contact.scss';
import ContactForm from './ContactForm';
import InfoBoxLeft from './InfoBoxLeft';
import InfoBoxRight from './InfoBoxRight';

function Contact() {
  const [isCursor, setIsCursor] = useState(true);
  return (
    <div className="contact">
      <ModalForm />
      <ContactForm setIsCursor={setIsCursor} />
      <InfoBoxRight />
      <InfoBoxLeft />
      {isCursor && (
        <Cursor />
      )}
    </div>
  );
}

export default Contact;
