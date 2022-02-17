import React from 'react';
import {useState} from 'react';

function Form(){
        const [data, setData] = useState([]);
        const [name,setName] = useState('');
        const [objective,setObjective] = useState('');

        const handleAddItem = (e) =>{
                e.preventDefault();
                var storeData=[...data]
                storeData.push({name,objective,});
                    setData(storeData)}  

        const handleDeleteItem = index => {
            alert("Are you Sure you want to delete it?")
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
        };
        
    return(
        <React.Fragment>
            <div className="form">
            <button onClick = {handleAddItem}>Click to Add Items to Table</button>
            <input placeholder = "Enter Name" className="name" value={name} defaultValue="Reset"
                    onChange={(e)=>{
                    setName(e.target.value)
                    }}></input>
            <input placeholder = "Enter User Name" className="username" value = {objective}
                    onChange={(e)=>{
                        setObjective(e.target.value)
                    }}></input><br></br>

            <table      border = "1" 
                        cellPadding ="10">
                    <tr>
                        <th> Name </th>
                        <th>User Name</th>
                        <th>Actions</th>
                    </tr>
                    {data.map((element,index)=>(
                    <tr key={index}> 
                        
                        <td>{element.name}</td>
                        <td>{element.objective}</td>
                        <td>
                        <button onClick = {()=>{handleDeleteItem(index)}}>Delete</button>
                        </td>
                    </tr>
                    ))}
        
                </table>
                </div>
        
        </React.Fragment>
    )
}

export default Form;