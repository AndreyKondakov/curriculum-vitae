import React, {Component} from "react";
import './Home.scss';

class Home extends Component {

  // constructor(props) {
  //   super(props);
  // }


  render() {


    return (
      <main>
        <section className="about-me-section section" id="about-me-section">
          <div className="university">
            <ul className='img-list'>
              <li><i className="fas fa-atom"></i></li>
              <li><i className="fas fa-book"></i></li>
              <li><i className="fas fa-calculator"></i></li>
              <li><i className="fas fa-university"></i></li>
              <li><i className="fab fa-windows"></i></li>
            </ul>
            <p>2009 - 2013 Specialty: "Maintenance of machine tools with software control and
              systems" Qualification: electro mechanics, CPT (junior specialist)</p>
            <p>2013 - 2016 Faculty of Computer Technologies of Mechanical Engineering and
              Design. Qualification: engineer-designer, CSTU, (bachelor, specialist) diploma with
              honors.</p>
            <p>2017 - till now Ph.D., CSTU.</p>
            <i className="fas fa-frown smile"></i>
          </div>
          <div className="web">
            <ul className="img-list">
              <li><i className="fas fa-laptop"></i></li>
              <li><i className="fas fa-wifi"></i></li>
              <li><i className="fas fa-globe"></i></li>
              <li><i className="fab fa-chrome"></i></li>
              <li><i className="fab fa-ubuntu"></i></li>
            </ul>
            <p>Self learning web development :</p>
            <ol className="learning">
              <li>YouTube</li>
              <li>htmlbook.ru</li>
              <li>rusrails.ru</li>
              <li>learn.javascript.ru</li>
              <li>habr.com</li>
              <li>dou.ua</li>
            </ol>
            <i className="fas fa-smile-beam smile"></i>
          </div>
          <canvas id="tp2p" ></canvas>
        </section>
      </main>
    );
  }
}

export default Home;