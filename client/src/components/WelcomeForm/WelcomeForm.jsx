import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './WelcomeForm.css'
const backendUrl = import.meta.env.VITE_URL_SEARCH


function Welcome() {
  const [searchData, setSearchData] = useState('')


  const newsSearch = async (e) => {
    if (searchData.results === 'intro' || searchData === '') {
      window.location.href = '/'
    } else {
      e.preventDefault()
      await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchData)
      })
        .then(response => response.json())
        .then(window.location.href = `/search`)
    }
  }

  const handleChange = (e) => {
    setSearchData({ results: e.target.value })
  }
  return (
    <div className="formBox vw-100">
      <Form>
        <Form.Group>
          <Form.Control  className="text-center"as="select" value={searchData.results} onChange={handleChange} placeholder="Choose News Articles To View">
            <option value="intro">Choose News Articles To View</option>
            <option value="business">Business</option>
            <option value="crime">Crime</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="environment">Environment</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="politics">Politics</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="tourism">Tourism</option>
            <option value="world">World</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Button className="mt-3" variant="primary" onClick={newsSearch}>
        Search
      </Button>


    </div>
  );

}

export default Welcome;