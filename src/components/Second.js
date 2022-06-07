import React, {useEffect, useState} from 'react'
import '../App.css'

function Second() {
 const [data, setData] = useState ();
 const [error, setError] = useState ()
 const [loading, setLoading] = useState ()
 const [arranged, setArranged] = useState ()

 useEffect (() => {
  async function fetchData () {
      await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then(setData)
     
      .catch(setError)
      .finally(() => setLoading(false))
      
  }
  fetchData ()
 }, [])

 useEffect (() => {
    data && setArranged(data.products)
 }, [data])

console.log(arranged)
const dataAll = arranged && arranged.map((list,id) => {
    return (
        <div key={id}>
         <div>{list.title}</div>
         <div>{list.description}</div>
        </div>
    )
})



  return (
    <div className='second'>
    <h1>Second</h1>
    {dataAll}
    </div>
  )
}

export default Second