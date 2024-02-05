import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import movieGenres from '../Data/Genres.json';
import language from '../Data/Language.json';

function FilterModal({onGenre , onlanguage , onrating}) {
  const [show, setShow] = useState(false);
  const [ratingFilter, setratingFilter] = useState('');
  const [languageFilter, setlanguageFilter] = useState('');
  const [genreFilter, setgenreFilter] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguageChange = (event) => {
    setlanguageFilter(event.target.value);
  };
  const handleGenreChange = (event) => {
    setgenreFilter(event.target.value);
  };
  const handleRatingChange = (event) => {
    setratingFilter(event.target.value);
  };
  const handleFilterClick = () =>{
    onGenre(genreFilter)
    onlanguage (languageFilter)
    onrating(ratingFilter)
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Filter
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control name = "rating" type="number" placeholder="rating..." min="0" max="10" onChange={handleRatingChange}/>
        <Form.Select name = "genre" aria-label="Default select example"  onChange={handleGenreChange}>
            <option value="" disabled>Select Language</option>
            {movieGenres.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </Form.Select >
          <Form.Select name = "langage" aria-label="Default select example" onChange={handleLanguageChange}>
            <option value="" disabled>Select Language</option>
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select >
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilterClick}>Filter</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterModal;