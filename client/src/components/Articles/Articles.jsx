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
    <div className='m-4'>
      <Row gutter={[16, 16]}>
        {props.article.map((desc, index) => (
          <Col col={8} key={index}>
            <Link onClick={handleClick} className="styleLink" key={index} to={desc.link}>
              <Card key={desc.article_id}
                hoverable
                style={{
                  borderRadius: 7,
                  height: 500,
                  width: 300
                }}
                cover={desc.image_url ? (<img height="150" width="50" src={desc.image_url} />) :

                  (<img height="150" width="50" src='/images/newsLogo.jpg' />)
                }
              >
                <header>
                  <h5 className='title'>{desc.title}</h5>
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
