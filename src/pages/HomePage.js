
import MovieIntro from '../components/MovieIntro';
import { DataMoviesSlider } from '../DataMoviesSlider';
import Modal from "react-modal";
import {  useState } from 'react';
import MoviesSlider from '../components/MoviesSlider';

function HomePage() {

  const [modalIsOpen, setIsOpen] = useState(false);


  const customStyles = {
    content: {
      backgroundColor: "red",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <MovieIntro />
      <div className="movies-container">
        {DataMoviesSlider.map((e, index) => {
          return (
            <MoviesSlider MovieKind={e.MovieKind} api={e.api} key={index} />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h1>hello</h1>
      </Modal>
    </>
  );
}

export default HomePage