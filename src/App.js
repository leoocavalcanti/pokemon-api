import React from 'react'
import useFetch from './api/useFetch'
import Header from './components/Header';
import Main from './components/Main';
import "./App.css"
import Footer from './components/Footer';

const App = () => {

  const {data, fetchApi, nextPage, previousPage, loading, page: qtd} = useFetch();
  const [page, setPage] = React.useState(1);
  const [pokeId, setPokeId] = React.useState(1);

  React.useEffect(() => {

    fetchApi();

  }, [qtd]);
  
  const pageAfter = () => {

    if(page < 58){

      setPage(page + 1);
      setPokeId(pokeId + 20);
      nextPage()
    }

  }

  const pageBefore = () => {

    if(page > 1){

      setPage(page - 1);
      setPokeId(pokeId - 20);
      previousPage()
    }
  }

  return (
    <div>
      <Header/>
      <Main data={data} fetchApi={fetchApi} loading={loading} nextPage={pageAfter} previousPage={pageBefore} page={page} pokeId={pokeId}/>
      <Footer/>
    </div>
  )
}

export default App