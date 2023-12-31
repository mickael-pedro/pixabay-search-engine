import ImagesResult from './components/ImagesResult';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [field, setField] = useState("");
  const [images, setImages] = useState([]);

  function handleFieldChange(e) {
    setField(e.target.value);
  };

  useEffect(() => {
    const fetchImages = () => {
      if (field !== "") {
        (async () => {
            const query = field.replace(/ /g, '+');
            await axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${query}&image_type=photo&per_page=6&pretty=true/`).then(res => {
              setImages(res.data.hits);
            });
        })();
      } else {
        setImages(null);
      }
    };

    const timeout = setTimeout (() => fetchImages(), 500)
    return () => clearTimeout(timeout);
  }, [field]);


  return (
    <div class="container min-h-screen mb-5 mx-auto bg-gray-200 outline outline-gray-400 p-5">
      <h1 class="text-4xl font-extrabold">Pixabay Images Search</h1>
      <SearchBar value={field} onChange={handleFieldChange}/>
      <ImagesResult images={images}/>
    </div>
  );
}

export default App;
