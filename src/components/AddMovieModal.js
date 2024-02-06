import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import movieGenres from '../Data/Genres.json';
import language from '../Data/Language.json';

// Component for adding a new movie
function AddMovieModal({ onNewMovie }) {
  // State variables
  const [show, setShow] = useState(false); // Modal visibility state
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Selected language state
  const [selectedGenre, setSelectedGenre] = useState(''); // Selected genre state
  const handleClose = () => setShow(false); // Function to close the modal
  const handleShow = () => setShow(true); // Function to show the modal
  const [newMovie, setnewMovie] = useState({ // State for new movie details
    id: Math.random(),
    title: "",
    rating: 0,
    genre: '',
    langage: "EN",
    image: "",
    description: "",
  });

  // Function to update new movie details
  const addNewMovie = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // Event handler for language selection change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    addNewMovie(event);
  };

  // Event handler for genre selection change
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    addNewMovie(event);
  };

  // Event handler for submit button click
  const handleSubmitClick = () => {
    onNewMovie(newMovie); // Call the parent component's function with new movie details
    setnewMovie({}); // Reset new movie state
    handleClose(); // Close the modal
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <Button variant="primary" onClick={handleShow}>
        Add
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
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        {/* Modal body */}
        <Modal.Body>
          {/* Form controls for movie details */}
          <Form.Control name="title" type="text" placeholder="Title..." onChange={(e) => addNewMovie(e)}/> {/* Title form */}
          <Form.Control name="image" type="text" placeholder="ImageUrl..." onChange={(e) => addNewMovie(e)}/> {/* Image form */}
          <Form.Control name="rating" type="number" placeholder="Rating..." min="0" max="10" onChange={(e) => addNewMovie(e)}/> {/* Rating form */}
          {/* Dropdown for selecting genre */}
          <Form.Select name="genre" aria-label="Default select example" value={selectedGenre} onChange={handleGenreChange}>
            <option value="" disabled>Select Genre</option>
            {/* Mapping through genre options */}
            {movieGenres.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          {/* Dropdown for selecting language */}
          <Form.Select name="language" aria-label="Default select example" value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="" disabled>Select Language</option>
            {/* Mapping through language options */}
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select>
          {/* Textarea for movie description */}
          <Form.Control as="textarea" name="description" rows={3} placeholder='Write a short description' onChange={(e) => addNewMovie(e)}/>
        </Modal.Body>
        {/* Modal footer with close and add buttons */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitClick}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;
