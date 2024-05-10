import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {


    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    
                    <strong>{props.posts.id}. {props.posts.title}</strong>
                    <div>
                        {props.posts.body}
                    </div>
                    <div className='post__btn'>
                        <MyButton onClick={()=>props.remove(props.posts)}>Удалить</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;