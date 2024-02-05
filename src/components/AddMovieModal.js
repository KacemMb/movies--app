import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import movieGenres from '../Data/Genres.json';
import language from '../Data/Language.json'
function AddMovieModal({onNewMovie}) {
  const [show, setShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setnewMovie] = useState({
    id: Math.random(),
    title: "",
    rating: 0,
    genre: '',
    langage: "EN",
    image: "",
    description: "",
  });
  const addNewMovie = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    addNewMovie(event)
  };
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    addNewMovie(event)
  };
  const handleSubmitClick = () =>{
    onNewMovie(newMovie)
    setnewMovie({})
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control name = "title" type="text" placeholder="Title..." onChange={(e) => addNewMovie(e)}/>{/*title form*/ }
        <Form.Control name = "image" type="text" placeholder="ImageUrl..." onChange={(e) => addNewMovie(e)}/>{/*image form */}
        <Form.Control name = "rating" type="number" placeholder="rating..." min="0" max="10" onChange={(e) => addNewMovie(e)}/>
        <Form.Select name = "genre" aria-label="Default select example" value={selectedGenre} onChange={handleGenreChange}>
            <option value="" disabled>Select Language</option>
            {movieGenres.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </Form.Select >
          <Form.Select name = "langage" aria-label="Default select example" value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="" disabled>Select Language</option>
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select >
          <Form.Control as="textarea" name="description" rows={3} placeholder='Write a short description' onChange={(e) => addNewMovie(e)}/>
        </Modal.Body>
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