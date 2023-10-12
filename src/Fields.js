import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';

function Fields({name,email,index,data,setData}) {

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="show_data">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button variant="contained" color="error" onClick={removeItem}>
              <DeleteIcon/>

            </Button>
        </div>
  )
}

export default Fields