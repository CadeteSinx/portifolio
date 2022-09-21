import React from 'react';
import '../css/blogthumb.css'

const typePalette = ['#6BF37D ', '#16CED8', '#C86BF3', '#F39C59',]


function Blogthumb(props) {
    var string = props.text;
    var text = string.substring(0, 200);
    let typeColor;
    let tag;
    switch (props.tag) {
        case 'HTML & CSS':
            typeColor = typePalette[0]
            tag = 'HTML-CSS'
            break;
        case "React & React Native":
            typeColor = typePalette[1]
            tag = 'React'
            break;
        case "Python":
            typeColor = typePalette[2]
            tag = 'Python'
            break;
        case 'Javascript':
            typeColor = typePalette[3] 
            tag = 'Javascript'
            break;
        default:
            typeColor = typePalette[0]
            break;
    }
    return (
        <article className='post-article' style={{borderTop: `2px solid ${typeColor}`}}>
            <a href={`/${props.id}`}>
                <div className='post-content'>
                    <a href={`/Archives/${tag}`} className='tag-link'>
                        <time className='post-date' style={{color: typeColor}}>{props.tag}</time>
                    </a>
                    <div className='post-title' >
                        <h5>{props.title}</h5>
                    </div>
                    <div className='blog-post-content'>
                        {text}
                    </div>
                </div>
            </a>    
        </article>
    );
}

export default Blogthumb;