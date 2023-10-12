import "./App.css";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Fields from "./Fields";

function App() {
  const [form, setForm] = useState({});

  const [search, setSearch] = useState({})
  const [data, setData] = useState([]);

  const addData = (event) => {
    // spread operator to not lose previous data
    setData([...data, form]);
    // console.log(form)
    // setForm({});
    setForm(form)
    // setMessage(event.target.value)
    // console.log(event.target.value);
    // console.log(form)
    
  
  };
  // const removeItem = (index) => {
  //   let arr = data;
  //   arr.splice(index, 1);
  //   setData([...arr]);
  // };
const handlePress=(event)=>{
  if(event.key=='Enter')
  addData(event)


}
const cleanSearch = () =>setSearch({})
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            onKeyPress={(e)=>handlePress(e)}
            value={form.name}
            onChange={(event) => setForm({...form,name:event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onBlur={cleanSearch}
          />
          <TextField
            onKeyPress={(e)=>handlePress(e)}
            value={form.email}
            onChange={(event) => setForm({...form,email:event.target.value})}
            id="outlined"
            label="E-mail"
            variant="outlined"
            onBlur={cleanSearch}
          />
          <Button variant="contained" color="error" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data section */}
      <div className="data">
        <div className="show_data">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
        data.map((element, index) => {
          return (
            //method 1
            // <div key={index} className="show_data" index={index}>      
            //   <h4>{element.name}</h4>
            //   <h4>{element.email}</h4>
            //   <Stack>
            //   <Button
            //     onClick={() => removeItem(index)}
            //     variant="contained"
            //     color="error"
            //   >
            //     <DeleteIcon />
            //   </Button>
            //   </Stack>
            // </div>
            //method 2 and optimise way
            <Fields name={element.name}email={element.email}index={element.index} data={data}
            setData={setData}/>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
