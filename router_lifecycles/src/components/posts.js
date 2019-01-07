import React from 'react';
import { Link } from 'react-router-dom'


const Posts = () => {

    const ids = [
        {id: '1', name: 'Post1'},
        {id: '2', name: 'Post2'},
        {id: '3', name: 'Post3'},
    ];

    const list = ids.map(item => {
        return (
            <span key={item.id}>
                <Link to={'/posts/' + item.id}>{item.name}</Link><br/>
            </span>
        )
    })


    return (
        <div>
            {list}
        </div>
    )

    // return [
    //    <div  key="1">Hello</div>,
    //    <div key="2">i am</div>,
    //    <div key="3">a react app</div>
     
    // ]
}

export default Posts;