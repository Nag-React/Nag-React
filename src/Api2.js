import React, { useEffect } from 'react';

const Api2= ()=>{
    // const {product, setProduct} = useState [''];
    const dataFetch = async () => {
        try {
            const nagababu = await fetch('https://dummyjson.com/products');
            if(!nagababu.ok){
                throw new Error(`server error:$(nagababu.status)`);
            }
            const result  = await nagababu.json();
            console.log(result);
        }
        catch(error){
                console.log('something there is a problem');
        }
    };
    useEffect (() => {
        dataFetch();
    },[]);
    return (
        
            <div className='container'>
                <div className='row'>
                    <h2>Get API Data & CRED Operations</h2>
                    <table className=''></table>
                </div>
            </div>
            
    );
}

export default Api2;