import React, { useState } from "react";

const Services = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState('');
  const [age, setAge] = useState('');
  const [editing, setEdited] = useState('');
  const userData = [{
    id: "00014",
    name: "nagu@g",
    password: "123",
    age :'25'
  }];
  const [data, setData] = useState(userData);

  const handleSub = (e) => {
    e.preventDefault();
    
    
    if(email === "" & password === ""){
        setError("Please Enter Email Address");
    } else {
        if(!error){
            setData([...data, {id:Date.now(), name: email, password,age:age}])
            setEmail('');
            setPassword('');
            setAge('');
        }
    }
  };

function deleted(id){
    const deleted = data.filter((eachItem)=>eachItem.id !== id);
    setData(deleted);
}
const edited=(id)=>{
    setEdit(id);
    const editid = data.find((eachItem)=>eachItem.id === id);
    setEdit(editid);
}

  return (
    <>
    <div className="container">
      <div className="user">
        <h2>Welcome to User Data</h2>
        <form onSubmit={handleSub} style={{ width: "100%" }}>
          <div className="row">
            <div className="col-md-3">
              <label for="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="col-md-3">
              <label for="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>
            <div className="col-md-3">
              <label for="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                className="form-control"
                id="age"
                placeholder="Enter Age"
                name="age"
              />
            </div>
            <div className="col-md-3"><button type="submit" className="btn btn-primary " style={ {   marginTop: '35px'}}>
            Submit
          </button></div>
          </div>
         
          
        </form>
      </div>
      {error && <p style={{color:'red'}}>{error}</p>} 
      </div>
        
        <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Password</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Edit</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((eachItem) => (
            <tr key={eachItem.id}>
                <td>{eachItem.id}</td>
              <td>{eachItem.name}</td>
              <td>{eachItem.password}</td>
              <td>{eachItem.age >18 ?("Adult"):("Minor")}</td>
              <td><span onClick={()=>deleted(eachItem.id)}>Delete</span></td>
              <td><span onClick={()=>edited(eachItem.id)}>Edit</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Services;
