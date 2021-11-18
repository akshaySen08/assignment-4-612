import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
// import Post from './Components/Post';

function App() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    return fetch('https://dummyapi.io/data/v1/post', {
      headers: {
        "app-id": "61959c11c8855080728e076e"
      }
    }).then(data => {
      data.json().then(p => {
        setPosts(oldPosts => {
          return p.data
        })
      })
    })
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <section className="mainSection">
        <Main posts={posts}>
        </Main>
        <Nav></Nav>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
