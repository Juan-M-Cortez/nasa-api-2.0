import React from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import TopThree from './TopThree/TopThree';
import Dates from './Dates/Dates';
import './Home.scss';

const Home = (props) => {
  const { imgURL, title, explanation } = props;
  // 🗺️--allows us to navigate react router
  // through nested components within Routes--🗺️
  let navigate = useNavigate();

  return (
    <section className='app__home'>
      <div className='app__home-banner'>
        <Banner imgURL={imgURL[9]} title={title[9]} explanation={explanation[9]} />
      </div>
      <div className='app_home-topthree'>
        <Dates />
        <TopThree imgURL={imgURL} explanation={explanation} title={title} />
      </div>
    </section>
  );
};

export default Home;

/* BUTTON TO THE OTHER PAGE---------------
<NavLink active={true} onClick={() => { navigate("/SpaceObjects") }} >
          <Button color="primary" >Near Earth Objects</Button>
        </NavLink>
*/