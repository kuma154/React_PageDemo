import React,{useState,useEffect} from 'react'
import axios from 'axios'

import Posts1 from './components/Posts1';
import Page from './components/Page';


function App() {

  const [posts,setPosts] = useState([])
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPage,setPostsPage]=useState(8);
  const [loading,setLoading]=useState(false);
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false);
    } 
    fetchPosts()
  },[])

  //获取当前页面显示的posts
  const indexOfLastPost=currentPage*postsPage; //1*10 =10
  const indexOfFirstPost=indexOfLastPost-postsPage; //10-10=0
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost); //

  const changeCurrentPage=(res)=>{
    setCurrentPage(res);
  }
  return (
    <div className="container mt-5">
        <h1 className='text-primary mb-3'>
          我的博客
        </h1>
    
        <Posts1 loading={loading} posts={currentPosts}></Posts1>
        <Page changeCurrentPage={changeCurrentPage} posts={posts} postsPage={postsPage}></Page>
    </div>
  );
}

export default App;
