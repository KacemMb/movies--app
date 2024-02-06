import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import movieGenres from '../Data/Genres.json';
import language from '../Data/Language.json';

// Component for filtering movies
function FilterModal({ onGenre, onLanguage, onRating }) {
  // State variables for filters and modal visibility
  const [show, setShow] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  // Function to close the modal
  const handleClose = () => setShow(false);
  // Function to show the modal
  const handleShow = () => setShow(true);

  // Event handler for language selection change
  const handleLanguageChange = (event) => {
    setLanguageFilter(event.target.value);
  };

  // Event handler for genre selection change
  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  // Event handler for rating input change
  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  // Event handler for filter button click
  const handleFilterClick = () => {
    // Call parent components' functions with filter values
    onGenre(genreFilter);
    onLanguage(languageFilter);
    onRating(ratingFilter);
    // Close the modal
    handleClose();
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <Button variant="primary" onClick={handleShow}>
        Filter
      </Button>

      {/* Modal component */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* Modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        {/* Modal body */}
        <Modal.Body>
          {/* Form controls for filters */}
          {/* Rating input */}
          <Form.Control
            name="rating"
            type="number"
            placeholder="Rating..."
            min="0"
            max="10"
            onChange={handleRatingChange}
          />
          {/* Dropdown for selecting genre */}
          <Form.Select
            name="genre"
            aria-label="Default select example"
            onChange={handleGenreChange}
          >
            <option value="" disabled>
              Select Genre
            </option>
            {/* Mapping through genre options */}
            {movieGenres.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          {/* Dropdown for selecting language */}
          <Form.Select
            name="language"
            aria-label="Default select example"
            onChange={handleLanguageChange}
          >
            <option value="" disabled>
              Select Language
            </option>
            {/* Mapping through language options */}
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select>
        </Modal.Body>
        {/* Modal footer with close and filter buttons */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilterClick}>
            Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterModal;
