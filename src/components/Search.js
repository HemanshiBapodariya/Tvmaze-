import React, { useState } from 'react'
import Actor from './Actor';
import Show from './Show';
const Search = () => {

    const [actors, setActor] = useState(false);
    const [shows, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    return (
        <>
            <div className="container">
                <div className='heading'>
                    <h1>TVmaze <br/>
                        <span>Search your Favourite shows</span>
                    </h1>
                </div>
                <div className='select'>
                    <input type="radio" name="movie" onChange={() => setActorFilter()} /> 
                    <label className='name' > Actor </label>   &nbsp;  &nbsp;
                    <input type="radio" name="movie" onChange={() => setShowFilter()}/> 
                    <label className='name'> Show </label>
                </div>


            {actors ? <Actor /> : ""}
            {shows ? <Show /> : ""}
        
            </div>

        </>
        
    )
}

export default Search;


