import React from 'react'

const useFetch = () => {

    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(0)
    const [loading, setLoading] = React.useState(false);

    const fetchApi = async () =>{

        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${String(page)}`);
        const json = await response.json();
        setData(json);
        setLoading(false);

    }

    const previousPage = async () =>{

        if (page >= 20){
        setLoading(true);
        setPage(page-20);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${String(page)}`);
        const json = await response.json();
        setData(json);
        setLoading(false);
        }
    }

    const nextPage = async () =>{

        if (page < 1140){
        setLoading(true);
        setPage(page+20);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${String(page)}`);
        const json = await response.json();
        setData(json);
        setLoading(false);
        }
    }

  return {data, fetchApi, nextPage, previousPage, loading, page}
}

export default useFetch