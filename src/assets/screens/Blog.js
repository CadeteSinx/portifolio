import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';

import ReactMarkdown from 'react-markdown'
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../components/Firebase';

//imgs

import "../css/Blog.css"

function Blog(props) {
    const [title, setTitle] = useState('')
    const [markdown, setMarkdown] = useState('')
    const [image, setImage] = useState()

    useEffect(() => {
        const docRef = doc(db, 'blogs' + window.location.pathname)
        getDoc(docRef).then((doc) => {
            switch (doc.data().tag) {
                case 'Python':
                    setImage(require('../images/python.png'))
                    break;
                case 'Javascript':
                    setImage(require('../images/javascript.jpg'))
                    break;
                case 'React & React Native':
                    setImage(require('../images/react.jpg'))
                    break;
                case 'HTML & CSS':
                    setImage(require('../images/htmlcss.jpg'))
                    break;
                default:
                    break;
            }
            let t = doc.data().text
            const result = t.replaceAll('\\n' , '\n') 
            setTitle(doc.data().title)
            setMarkdown(result)
        })
    }, [])

    return (
        <div className="App">        
            <div className="App-container">
                <Sidebar></Sidebar>

                <div className='Blog-container'>
                    <h1 className='Blog-title'>{title}</h1>
                    <img className='Blog-banner' src={image}></img>
                    <ReactMarkdown className='Markdown-text-main'>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default Blog;