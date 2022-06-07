import React, {useEffect, useState} from 'react'
import '../App.css'

function First() {
  const [data, setData] = useState ()
  const [error, setError] = useState ()
  const [loading, setLoading] = useState ()


useEffect (() => {
  async function fetchData () {
      await fetch ('https://picsum.photos/v2/list?page=19&limit=10')
      .then((response) => response.json())
      .then (setData)
      .catch (setError)
      .finally (()=> setLoading(false))
  }  
  fetchData()
}, [])
console.log(data)

const dataAll = data && data.slice(1,5).map ((list,id) => {
    return (
        
            <div key={id} className='row'>
            <div> {list.author}</div>
           <img src={list.download_url} alt='' width='50%' />
            
            </div>
        
    )
})

// const rowData = JSON.stringify(data)

  return (
    <div className='first'> <h1>First</h1>
     {loading?('loading'): error?('error'): 
     
     <div>
        {/* {rowData} */}
        {dataAll}
     </div>
     
    
     
     }
    
    
    </div>
  )
}

export default First