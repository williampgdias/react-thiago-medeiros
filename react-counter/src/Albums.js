


import React, { useState, useEffect } from "react";

// Components
import Template from "./Template";
import Loading from "./Loading";

const Albums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setIsLoading(false);
      })
  }, [])

  return (
    <Template title='Albums'>
      <Loading visible={isLoading} />
      
      {
        albums.map(album => {
          return(
            <div>
              <spam>{ album.title } - id: { album.id }</spam>
            </div>
          )
        })
      }
    </Template>
  )
}

export default Albums;