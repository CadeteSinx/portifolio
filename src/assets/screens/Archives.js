import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import logo from "../images/logo_only_transparent.png"
import "../css/archives.css"

import Blogthumb from '../components/Blogthumb';

//Firebase
import { collection, getDocs} from 'firebase/firestore';
import {db} from '../components/Firebase';

function Archives(props) {
  let { tag } = useParams(props);
  const [blogs, setBlogs] = useState([])

  const setupPage = async () => {
      if(tag == undefined){
        const data = await getDocs(collection(db, "blogs"))
        let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setBlogs(temp.reverse())
      }
      if(tag == "Javascript"){
        let tempArray = [];
        const data = await getDocs(collection(db, "blogs"))
        let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        temp.forEach(doc => {
          if(doc.tag == 'Javascript'){
            tempArray.push(doc)
          }
        });
        setBlogs(tempArray.reverse())
      }
      if(tag == "HTML-CSS"){
        let tempArray = [];
        const data = await getDocs(collection(db, "blogs"))
        let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        temp.forEach(doc => {
          if(doc.tag == 'HTML & CSS'){
            tempArray.push(doc)
          }
        });
        setBlogs(tempArray.reverse())
      }
      if(tag == "Python"){
        let tempArray = [];
        const data = await getDocs(collection(db, "blogs"))
        let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        temp.forEach(doc => {
          if(doc.tag == 'Python'){
            tempArray.push(doc)
          }
        });
        setBlogs(tempArray.reverse())
      }
      if(tag == "React"){
        let tempArray = [];
        const data = await getDocs(collection(db, "blogs"))
        let temp = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        temp.forEach(doc => {
          if(doc.tag == 'React & React Native'){
            tempArray.push(doc)
          }
        });
        setBlogs(tempArray.reverse())
      }
    } 

    useEffect(() => {
      setupPage()
    }, [])

    return (
        <div className='App'>
            <div className="App-container">
                <div className='Sidebar-archives'>
                    <a className='Sidebar-top-archives' href="/">
                        <div className='Logo-container-archives'>
                        <img src={logo} className='Logo-archives'></img>
                        </div>
                    </a>

                    <p>Tags</p>
                    <nav className='tags-navigation'>
                        <a rel="React & React Native" href="/Archives/React" style={{borderTop: '1px solid var(--bg-color)'}}>React & React Native</a>
                        <a rel="Python" href="/Archives/Python">Python</a>
                        <a rel="Javascript" href="/Archives/Javascript">Javascript</a>
                        <a rel="HTML & CSS" href="/Archives/HTML-CSS">HTML & CSS</a>
                    </nav>
                </div>

                <div className='main-bottom-container-archives'>
                  <ul className='blog-container-archives'>
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
    );
}

export default Archives;