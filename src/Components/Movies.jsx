import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'


const Movies = ({handleAddToWatchList,handleRemoveFromWatchList,watchlist}) => {

const[movies, setMovies]=useState([])
const[pageNo,setPageNo]=useState(1)

const handlePrev=()=>{
if(pageNo===1){
  setPageNo(pageNo)
}else{
  setPageNo(pageNo-1)
}
}

const handleNext=()=>{
  setPageNo(pageNo+1)
}


useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4faa8a3bab85d55ae00e7be0ba025615&language=en-US&page=${pageNo}`).then(function(res){
    setMovies(res.data.results)
    console.log(res.data.results)
  })
},[pageNo])



  return (
    <div>
        <div className='text-2xl m-5 font-bold text-center'>
          Trending Movies
          </div>
          <div className='flex m-4 gap-3 flex-row flex-wrap justify-around'>
            {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
            })}
            
          </div>
          <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
//