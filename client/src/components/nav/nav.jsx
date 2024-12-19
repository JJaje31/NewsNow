import './nav.css'
import React from 'react'
import { Menu,Layout } from 'antd'
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
const {Header} = Layout;



const nav = () => {
  return (
    <Header style={{display:'flex',alignItems:'center'}}>
   <div className='logo'>
    <div className='logoArea'>
        <img src='/images/newsLogo.jpg' height={'65px'} width={'75px'}/>
        <h5 className=' logoText'>News Now</h5>
        </div>
      </div>
      <Menu style={{flex:'1',justifyContent:'center'}} theme="dark" mode="horizontal" selectedKeys={[location.pathname]} items={[
        { key: '1', icon: <HomeOutlined />, label: <Link to="/">Search Page</Link> },
      ]}></Menu>
  
    </Header>
  )
}

export default nav;