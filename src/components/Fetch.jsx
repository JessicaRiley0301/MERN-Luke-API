import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import axios from 'axios';
import Obi from '../Assets/obiwan.jpeg'

const Fetch = (props) => {
    const { category, id} = useParams();
    const [ Obj, setObj ] = useState({});
    
    useEffect (() => {
        fetchData();
    }, [category,id]);

    const fetchData = () => {
        console.log("fetching");
        axios.get('https://swapi.dev/api/'+category+"/"+id)
        .then(response => {
            console.log(response.data)
            var first5 = {}
            let i = 0
            for(const [key,value] of Object.entries(response.data)) {
                first5[key] = value
                i++
                if(i===5)break;
            }
            setObj(first5)
        })
        .catch(error => {
            console.log(error);
        });
    }
    return(
        <div>
            {
            Obj!=="These aren't the droids you're looking for"?
            <div>
                    {Object.keys(Obj).map((key,i) => 
                        key==="name"?
                            <h1 key={i}>{Obj[key]}</h1>
                            :
                            <p key={i}>{key}:{Obj[key]}</p> 
                    )}
            </div>
            :
            <div>
                <img src={Obi} alt="obiwan"></img>
            </div>
            }
        </div>

    )
}

export default Fetch;
