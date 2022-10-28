import React from 'react'
import "./Main.css"
import {motion} from "framer-motion"
import { ReactComponent as PokeBall } from '../assets/poke-icon.svg';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';

const Main = ({data, loading, nextPage, previousPage, page, pokeId}) => {


    const carrousel = React.useRef(); 
    const [width, setWidth] = React.useState(0)

    React.useEffect(() =>{

        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    })

    const [pokeIds, setPokeIds] = React.useState(0);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


    if(data === null) return null

  return (
    <>
    <div className="main">

    <div className="qtd-pokemon">
        <PokeBall style={{marginRight: "8px"}}/>
        <span>{data.count} pokémons</span>
    </div>

        <motion.div className="poke-area" ref={carrousel} whileTap={{cursor: "grabbing"}}>
     
        <div className="swipe-icons">
        <SwipeLeftIcon/>
        <SwipeRightIcon/>
        </div>

        <motion.div className="images" drag="x" dragConstraints={{right: 0, left: -width}}>
        {loading && 
        <div className="loading-area">
            <div className="c-loader"></div>
        </div>
        }
        {!loading && data && data.results.map((item, index) => (
            
            <div key={index} className="info-area" >
            <div className="img-bg" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg")`}}></div>
            <p style={{textTransform: "capitalize", fontWeight: 700, color: "#333333"}}>{item.name}</p>
            </div>))
            
            
            }
        </motion.div>
            <div className="button-area">
                {loading ? <button disabled onClick={() => previousPage()}>Página anterior</button>
                : <button onClick={() => previousPage()}>Página anterior</button>}
                
                <span>Página {page} de 58</span>
        
                {loading ? <button disabled onClick={() => nextPage()}>Próxima página</button> :
                <button onClick={() => nextPage()}>Próxima página</button>}
            </div>
        </motion.div>

    </div>
    </>
  )
}

export default Main