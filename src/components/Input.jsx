import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Input = (props) => {
    const [NewObj, setNewObj] = useState({
        category: "",
        id: ""
    })
    const history = useHistory();

    const handleEnter = (e) => {
        e.preventDefault();
        if(NewObj.category && NewObj.id) {
            history.push(`/${NewObj.category}/${NewObj.id}`)
        }
        else{
            alert("please fill out the form")
        }
    };
    const onChange = (e) => {
        setNewObj ({
            ...NewObj,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div>
            <form onSubmit={handleEnter}>
                <label htmlFor="category">Search:</label>
                <select 
                    value= {NewObj.category}
                    onChange={onChange}
                    name= "category"
                    type= "category">
                    <option hidden defaultValue>select an option</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">Id:</label>
                <input
                    name = "id"
                    type = "number"
                    onChange={onChange}
                    value = {NewObj.id}
                />
                
                <input type="submit" value="Search"/>
            </form>

        </div>
    )

}

export default Input;