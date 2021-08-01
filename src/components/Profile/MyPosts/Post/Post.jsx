import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png" alt="Sorry" />
            
            <div className={s.like}>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;