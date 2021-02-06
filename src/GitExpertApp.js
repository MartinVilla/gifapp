import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

function GitExpertApp() {

    //const categories = ['VEGETA','GOKU','PICOLO']
    const [categories, setCategories] = useState(['Goku'])

    //const handleAdd = () => {
        /* setCategories([...categories, 'GOHAN']) */
        //setCategories( cats => [...cats, 'GOHAN'])
    //}

    return (
        <div>
            <h2>Experto en GIF's</h2>
            <AddCategory setCategories={  setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp;