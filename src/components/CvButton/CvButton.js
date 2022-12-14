import { useDispatch } from 'react-redux';
import { setFormMessage, setIsScale, setShowModal } from '../../feature/navigation.slice';

function CvButton() {
  const dispatch = useDispatch();
  const handleclick = () => {
    fetch('CV_Vincent_VanN.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_Vincent_VanN.pdf';
        alink.click();
        dispatch(setFormMessage(['CV téléchargé!']));
        dispatch(setShowModal(true));
      });
    });
  };
  return (
    <button
      type="button"
      onClick={handleclick}
      onMouseOver={() => dispatch(setIsScale(true))}
      onMouseOut={() => dispatch(setIsScale(false))}
    >
      CV
    </button>
  );
}

export default CvButton;
