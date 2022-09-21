import React from 'react';

import Sidebar from '../components/Sidebar';
import '../css/Skills.css'


function Skills(props) {
    return (
        <div className="App">        
            <div className="App-container">
                <Sidebar></Sidebar>
                <div className='Main'>
                  <div className='main-mid-container'>
                    <div className='Text-area' id='text-area-skills'>
                        <h2 className='fakeHTML'>
                          <span className='Bouncy'>A</span>
                          <span className='Bouncy'> L</span>
                          <span className='Bouncy'>i</span>
                          <span className='Bouncy'>t</span>
                          <span className='Bouncy'>t</span>
                          <span className='Bouncy'>l</span>
                          <span className='Bouncy'>e</span>
                          <span className='Bouncy'> S</span>
                          <span className='Bouncy'>o</span>
                          <span className='Bouncy'>m</span>
                          <span className='Bouncy'>e</span>
                          <span className='Bouncy'>t</span>
                          <span className='Bouncy'>h</span>
                          <span className='Bouncy'>i</span>
                          <span className='Bouncy'>n</span>
                          <span className='Bouncy'>g</span>
                          <br></br>
                          <span className='Bouncy'>A</span>
                          <span className='Bouncy'>b</span>
                          <span className='Bouncy'>o</span>
                          <span className='Bouncy'>u</span>
                          <span className='Bouncy'>t</span>
                          <span className='Bouncy'> m</span>
                          <span className='Bouncy'>e</span>
                        </h2>
                        <p>
                          I started to learn programming when i was around 14, mostly because of an amazing game called Minecraft. After that i never stopped. I'm always trying to improve my skills and my knowledge.
                        </p>
                    </div>

                    <div className='skills-details'>
                      <div className='chart' id='React-Native'>
                        <span>React Native</span>
                        <footer>
                          <div></div>
                        </footer>
                      </div>

                      <div className='chart' id='React'>
                        <span>React</span>
                        <footer>
                          <div ></div>
                        </footer>
                      </div>

                      <div className='chart' id='Javascript'>
                        <span>Javascript</span>
                        <footer>
                          <div></div>
                        </footer>
                      </div>

                      <div className='chart' id='HTML-CSS'>
                        <span>HTML & CSS</span>
                        <footer>
                          <div></div>
                        </footer>
                      </div>

                      <div className='chart' id='Python'>
                        <span>Python</span>
                        <footer>
                          <div></div>
                        </footer>
                      </div>

                    </div>
                  </div>
                </div>
                
                
            </div>    
        </div>
    );
}



export default Skills;