import React from 'react'
import { useState } from 'react';
import { Card, Col, Row, Layout } from 'antd';
const { Meta } = Card;
import { Link } from 'react-router-dom'
import InfoModal from '../InfoModal/InfoModal';
import './Articles.css'
import { Button } from 'react-bootstrap'


const Articles = (props) => {
  const article = props.article;

  const handleClick = (e) => {
    const target = e.target;
    if (target.classList.contains('mBtn')) {
      e.preventDefault();
      return
    }
  };

  if(article.length === 0){
    return <div className="d-flex justify-content-center align-items-center vw-100 vh-100"><h1>Articles are loading!!</h1></div>
  }

  return (
<div className='m-4 d-flex justify-content-center'>
  <Row gutter={[16, 16]} justify="center">
    {props.article.map((desc, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index} className="d-flex justify-content-center ">
        <Link onClick={handleClick} className="styleLink" to={desc.link}>
          <Card
            key={desc.article_id}
            hoverable
            style={{
              borderRadius: 7,
              height: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            cover={
              desc.image_url ? (
                <img height="150" width="100%" src={desc.image_url} alt="news" />
              ) : (
                <img height="150" width="100%" src='/images/newsLogo.jpg' alt="news" />
              )
            }
          >
            <header>
              <h5 className='title text-center'>{desc.title}</h5>
            </header>
            <div data-id={desc.article_id} className='idGrab text-center mt-5'>
              <InfoModal article={article} />
            </div>
          </Card>
        </Link>
      </Col>
    ))}
  </Row>
</div>

  );
};


export default Articles;
