import React, { useEffect, useState } from 'react';

const Items= ()=>{
    const API="deeb086a1fd040aca4d3651410f1373f";
    const [data, setData] = useState({ articles: [] });

    const getData = async() => {
        try{
            const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-08-06&sortBy=publishedAt&apiKey=${API}`);
            if(!response){
                throw new Error("Data not Fetched");
            }
            const responsedData = await response.json();
            setData(responsedData);
            console.log(responsedData);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    }, [])
    return (
        <div className="items">
            <div className='container'>
                <div className='tables'>
                  <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>title</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.articles.map((item)=>{
                            return <tr>
                                <td>{item.author}</td>
                            <td>
                            
                            {item.title}
                            </td>
                            <td>
                            
                            {item.description}
                            </td>
                           </tr>
                        })}
                       
                        
                    </tbody>
                  </table>
                </div>


            </div>
            </div>
    );
}

export default Items;