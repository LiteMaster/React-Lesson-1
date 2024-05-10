import './App.css';
import React, { useRef, useState } from 'react';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';

function App() {


  const [languages, setLanguages] = useState([
    { id: 1, title: 'JavaScript', body: 'Это язык программирования для браузера' },
    { id: 2, title: 'php', body: 'Это серверный язык программирования' },
    { id: 3, title: 'sql', body: 'Язык для работы с базами данных' }
  ])

  const [frameworks, setFrameworks] = useState([
    { id: 1, title: 'JavaScript', body: 'Это язык программирования для браузера' },
    { id: 2, title: 'php', body: 'Это серверный язык программирования' },
    { id: 3, title: 'sql', body: 'Язык для работы с базами данных' }
  ])


  const createPost = (newPost) => {
    console.log(newPost.id = languages.length + 1);
    setLanguages([...languages, newPost]);
  }

  const removePost = (post) => {
    setLanguages(languages.filter(p => p.id !== post.id))
  }


  const removeFrameworks = (post) => {
    setFrameworks(frameworks.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">


      <PostForm create={createPost} />
      {languages.length !== 0
        ? <PostList remove={removePost} posts={languages} title="Языки программирования" />
        : <h2 style={{ textAlign: 'left', color: 'red' }}>Посты на тему "Языки программирования" не найдены</h2>
      }


      {frameworks.length !== 0
        ? <PostList remove={removeFrameworks}  posts={frameworks} title="Популярные фреймворки" />
        : <h2 style={{ textAlign: 'left', color: 'red' }}>Посты на тему "Популярные фреймворки" не найдены</h2>
      }

      

    </div>
  );

}

export default App;
