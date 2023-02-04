import "./details.css";
import { useState } from "react";
import Player from "../Player/Player";
const Details = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((pre) => !pre);
  };

  return (
    <div style={{ displa: "flex", flexDirection: "column" }}>
      <div className='details-div'>
        <img className='profile-image' src={data.image} alt='' />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px auto",
            position: "abolute",
            top: "50%",
          }}
        >
          <div className='movieTitle'>{data.title}</div>
          <div className='description'>{data.plot}</div>
          <span className='release_time'>Release Date {data.releaseDate}</span>
          <div className='btn'>
            <button
              onClick={() => setModalIsOpen(true)}
              className='play-trailer'
            >
              Play Trailer
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen && (
        <div>
          <Player
            toggleModal={toggleModal}
            url={data.trailer.linkEmbed}
            title={data.title}
          />
        </div>
      )}
    </div>
  );
};

export default Details;
