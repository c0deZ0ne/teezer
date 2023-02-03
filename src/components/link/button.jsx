import React from "react";

export const button = ({children}) => {
  return (
    <div>
      <h1 className='movieshub'>MoviesHub</h1>
      <Link className='trending-link' to={"/"}>
        <Hot className='hot-icon' />
        <h2 className='trending'>Trendings</h2>
      </Link>
    </div>
  );
};
