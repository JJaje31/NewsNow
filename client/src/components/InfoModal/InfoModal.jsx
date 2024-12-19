import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InfoModal({ article }) {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState('')
  const [site, setSite] = useState('')


  const handleId = (e) => {
    if (e.target.classList.contains('mBtn')) {
      let element = e.currentTarget.parentElement
      setId(element.dataset.id)
      setModalIsOpen(true)
      setShow(true)
    }
  }

  const handleSite = () => {
    window.location.href = site;
  }



  const handleClose = () => {
    setModalIsOpen(false)
    close(true)
  }



  const handleShowDisplay = (id) => {
    let info = document.querySelector('.mDescription');
    let title = document.querySelector('.mTitle');
    for (const item of article) {
      if (item.article_id === id) {
        title.textContent = item.title;
        setSite(item.link)
        if (item.description === null) {
          info.textContent = 'There is no preview of this article. Please visit website for more details.'
          console.log('null')
        } else {
          info.textContent = item.description;
        }
        break;
      }
    }
  }
  useEffect(() => {
    if (modalIsOpen) {
      handleShowDisplay(id)
    }
  }, [modalIsOpen])

  return (
    <>
      <Button className="mBtn" variant="primary" onClick={handleId}>
        See Preview
      </Button>
      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title className='mTitle'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='mDescription'></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSite}>
            Visit Site
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  );
}

export default InfoModal;