import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOntitle, setIsScale } from '../../feature/navigation.slice';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import './achievement.scss';
import Card from './Card';

function Achievement() {
  const dispatch = useDispatch();
  const [objectToDisplay, setObjectToDisplay] = useState(0);
  useEffect(() => () => {
    dispatch(setIsOntitle(0));
    dispatch(setIsScale(false));
  }, []);
  return (
    <div className="achievement-container">
      <Nav />
      <Cursor />
      <SideBar setObjectToDisplay={setObjectToDisplay} />
      <Card objectToDisplay={objectToDisplay} />
    </div>
  );
}

export default Achievement;
