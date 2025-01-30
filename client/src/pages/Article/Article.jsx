import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import Nav from '../../components/nav/nav'
import Article from '../../components/Articles/Articles'
import {Layout} from 'antd';
const {Content,Footer} = Layout;
import './Article.css'
const backendUrl = import.meta.env.VITE_URL_API;


function News() {
const [news,setNews] = useState([])
  const getNews = () => {
    axios.get(backendUrl)
    .then(res =>{
if(res.data.results === undefined){
  window.location.href = '/error'
} else {
  setNews(res.data.results)
}
    })
    .catch(error => {
      console.log(error)
  })



    
  }



  useEffect(() => {
    getNews()
  },[])

  return (
    <>
  
    <Nav/>
    <Layout>
  <Content>
<Article article={news}/>
  </Content>
    </Layout>
    <Nav/>
   
    </>
    
    
  )
}

export default News