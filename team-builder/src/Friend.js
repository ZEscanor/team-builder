import React from 'react';
import "./Friend.css";



export default function FriendForm(props){
   const{ values, update, submit} = props;
   //console.log(values);
   const onChange = evt =>{
    const {name,value} = evt.target
    update(name,value);
  
    }
    const onSubmit = evt => {
    evt.preventDefault()
    submit()
    }

    return(
     
        <form className='form container' onSubmit={onSubmit}>
         <div className="form-group inputs">
          <label>Username :   
           <input 
           type='text'
           name='name'
           value={values.name}
           onChange={onChange}
           placeholder="type a team"
           maxLength='30'

          
           ></input>
           </label>
           <label> email:   
           <input 
           type='text'
           name='email'
           value={values.email}
           onChange={onChange}
           placeholder="email"
           maxLength='30'

          
           ></input>
           </label>
           <label>Role :   
           <input 
           type='text'
           name='role'
           value={values.role}
           onChange={onChange}
           placeholder="type a team"
           maxLength='30'

          
           ></input>
           </label>
           <select name='role' value={values.role} onChange = {onChange} >
             <option value="">--select role--</option>
             <option value="Backend Developer">Backend Developer</option>
             <option value="Dev Ops">Dev Ops</option>
             <option value="Frontend Developer">Frontend Developer</option>

           </select>
           <div className="submit">
             <button>submit</button>
           </div>
         </div>
       </form>


    )
   





}