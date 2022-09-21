import React from 'react';
import logo from "../images/logo_only_transparent.png"
import Box from '../components/Box';

import { Canvas} from '@react-three/fiber';

import Sidebar from '../components/Sidebar';

function About(props) {
    return (
        <div className="App">        
            <div className="App-container">
                <Sidebar></Sidebar>
                <div className='Main'>
                  <div className='main-mid-container'>
                    <div className='Text-area'>
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
                        <div className='Canvas2'>
                          <Canvas>
                            <ambientLight intensity={0.35}/>
                            <Box size={2} position={[1, 1, 1]}/>
                            <Box size={1}position={[-2, -1, 0]}/>
                            <Box size={0.5} position={[1, -1.8, 2]}/>
                          </Canvas>
                        </div>

                        <p>
                          I started to learn programming when i was around 14, mostly because of an amazing game called Minecraft. After that i never stopped. I'm always trying to improve my skills and my knowledge.
                        </p>
                    </div>
                  </div>
                </div>
                
                
            </div>    
        </div>
    );
}



export default About;