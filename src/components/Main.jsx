import React,{ useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../store/slice/newsApiSlice'
import { FallingLines,Blocks,Grid } from 'react-loader-spinner'


const Main = () => {

   const dispatch=useDispatch();
   const state = useSelector((state)=>state)
   const { isLoading, data, isError } = useSelector((state) => state.news);
   console.log(state)
   useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  if (isLoading)
  {
    return <>
    <div className='nodata'>
    <Grid
  visible={true}
  height="80"
  width="80"
  color="#f"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
  
    </div>
  </>
    
  }
  if (!data) {

    return <>
      <div className='nodata'>
        <h1>Sorry NO News</h1>
        <FallingLines
      color="#ff"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
      />
      </div>
    </>

  }

  return (
    <div className='mainblock scroll'>
      {data.articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
};
  
   



export default Main
