import React, {useState,useEffect} from 'react';
import FriendForm from './Friend';
import Friendly from './Friendly';
import './App.css';

const ourTeam = [{name:"Billy",email:"bill123@yahoo.com",role:"Backend Engineer"},
{name:"Cassidy",email:"cass@yahoo.com",role:"Frontend Engineer"},
{name:"Z",email:"z@yahoo.com",role:"DevOps"},
]

const formVal = {
  name:'',
  email:'',
  role:'',
}
export default function App() {
  const [team,setTeam] = useState(ourTeam);
  const [newTeam,setNewTeam] = useState([]);
  const [formValues, setFormValues] = useState(formVal);
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }
  const submitForm = () => {
   const newFriend = [{
     name: formValues.name.trim(),
     email: formValues.email.trim(),
     role: formValues.role.trim(),
   }]
  setTeam(team.concat(newFriend))
   console.log("team",newFriend);
  }
  
  console.log(formValues);
  return (
    <div className="App">
       <h1>Form App</h1>
      <FriendForm values={formValues} 
      update={updateForm} 
      submit={submitForm}/>
   
   {
        team.map(member => {
          console.log("id",member.id)
          return (
      
            <Friendly key={member.id} details={member} />
          )
        })
      }
    </div>
  )
    }
