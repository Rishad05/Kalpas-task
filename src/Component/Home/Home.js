import React from 'react';
import HorizontalNews from '../HorizontalNews/HorizontalNews';
import Sidebar from '../Sidebar/Sidebar';
// import VerticalNews from '../VerticalNews/VerticalNews';
import './Home.css';

const Home = () => {
    return (
       <div>
            <div className="row g-2 mx-auto s">
            <div className="col-md-3 " style={{ paddingLeft:"calc(var(--bs-gutter-x) * .0)"}}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
                <HorizontalNews></HorizontalNews>
               {/* <VerticalNews></VerticalNews> */}
            </div>
        </div>
       </div>
    );
};

export default Home;