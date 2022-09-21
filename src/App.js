import './App.css';
import {useState, useEffect} from 'react';

import { Canvas} from '@react-three/fiber';
import Sphere from './assets/components/Sphere';
import Box from './assets/components/Box';

import { Suspense } from 'react';

//Components
import Sidebar from './assets/components/Sidebar';
import Blogthumb from './assets/components/Blogthumb';

//Firebase
import { collection, getDocs} from 'firebase/firestore';
import {db} from './assets/components/Firebase';


function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const setupPage = async () => {
      const data = await getDocs(collection(db, "blogs"))
      let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setBlogs(temp.reverse())
    }
    setupPage()
  }, [])

  /*
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let id = '';
  for (let i = 0; i < 4; i++){
      id += letters[Math.floor(Math.random() * letters.length)];
  }
  */

  return (
      <div className="App">        
          <div className="App-container">
            <Sidebar></Sidebar>

            <div className='Main'>
              <div className='Canvas'>
                <div className='main-top-container'>
                  <div className='Text-area'>
                    <h1 className='fakeHTML'>
                      <span className='Bouncy'>H</span>
                      <span className='Bouncy'>e</span>
                      <span className='Bouncy'>l</span>
                      <span className='Bouncy'>l</span>
                      <span className='Bouncy'>o</span>
                      <span className='Bouncy Highlight'>!</span>
                      <br></br>
                      <span className='Bouncy'>I</span>
                      <span className='Bouncy Highlight'>'</span>
                      <span className='Bouncy'>m</span>
                      <span className='Bouncy'> A</span>
                      <span className='Bouncy'>l</span>
                      <span className='Bouncy'>i</span>
                      <span className='Bouncy'>c</span>
                      <span className='Bouncy'>e</span>
                      <span className='Bouncy Highlight'>,</span>
                      <br></br>
                      <span className='Bouncy'>F</span>
                      <span className='Bouncy'>r</span>
                      <span className='Bouncy'>o</span>
                      <span className='Bouncy'>n</span>
                      <span className='Bouncy'>t</span>
                      <span className='Bouncy Highlight'>-</span>
                      <span className='Bouncy'>e</span>
                      <span className='Bouncy'>n</span>
                      <span className='Bouncy'>d</span>
                      <span className='Bouncy Light-Highlight'> D</span>
                      <span className='Bouncy Light-Highlight'>e</span>
                      <span className='Bouncy Light-Highlight'>v</span>
                      <br></br>
                    </h1>
                    <p>Front End Developer | ReactJS - React Native</p>
                  </div>
                </div>
                <Canvas className="Canvas" camera={{fov: 60}}>
                  <pointLight position={[-5, 0, 3]}/>
                  <Suspense fallback={null}>
                    <Sphere position={[-4.5, -1.5, 0]} map={'earth.jpg'} size={1.2}/>
                    <Sphere position={[1, 2, -10]} map={'jupiter.jpg'}size={4}/>
                    <Sphere position={[2, -1.5, -2]} map={'mars.jpg'}size={1.3}/>
                    <Sphere position={[6, -1, -2]} map={'mercury.jpg'}size={1}/>
                  </Suspense>
                </Canvas>
              </div>
              <div className='border'></div>
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
              <div className='border borderBottom'></div>
              <div className='main-bottom-container'>
                  <ul className='blog-container'>
                    {
                      blogs.map((element) => {
                          if(blogs.length == 0){
                            return(<div></div>)
                          }else{
                            return(
                              <Blogthumb tag={element.tag} text={element.text} title={element.title} id={element.id}/>
                            )
                          }
                      })
                    }
                  </ul>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
