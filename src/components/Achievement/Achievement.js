import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOntitle, setIsScale } from '../../feature/navigation.slice';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import SideMenu from '../SideMenu/SideMenu';
import './achievement.scss';
import Card from './Card';

function Achievement() {
  const dispatch = useDispatch();
  const [objectToDisplay, setObjectToDisplay] = useState(0);
  const [isCursor, setIsCursor] = useState(true);
  useEffect(() => () => {
    dispatch(setIsOntitle(0));
    dispatch(setIsScale(false));
  }, []);
  return (
    <div className="achievement-container">
      <Nav />
      {isCursor && (
        <Cursor />
      )}
      <SideMenu setObjectToDisplay={setObjectToDisplay} setIsCursor={setIsCursor} />
      <Card objectToDisplay={objectToDisplay} />
    </div>
  );
}

export default Achievement;
