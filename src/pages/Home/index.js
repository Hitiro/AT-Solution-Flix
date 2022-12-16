import { useEffect, useState } from 'react';
import api from '../../services/api';

///movie/now_playing?api_key=673345f12c42415b28b7b1e0eb56c22d&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "673345f12c42415b28b7b1e0eb56c22d",
          language: "pt-BR",
          page: 1,
        }
      })

      console.log(response.data.results);

    }

    loadFilmes();

  }, [])

  return (

    <div>BEM VINDO A HOME</div>
  )
}

export default Home;