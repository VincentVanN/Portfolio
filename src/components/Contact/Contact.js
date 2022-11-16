import Cursor from '../Cursor/Cursor';
import ModalForm from '../ModalForm/ModalForm';
import './contact.scss';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact">
      <ModalForm />
      <ContactForm />
      <Cursor />
    </div>
  );
}

export default Contact;
