import React from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


class Multiplication extends React.Component{
  constructor(){
    super();
    this.state={
      num1:'',
      num2:'',
      total:''
    }
  }

  handlenum1=(event) =>{
    this.setState({
      num1:event.target.value
    })
  }
  handlenum2=(event) =>{
    this.setState({
      num2:event.target.value
    })
  }

exe = (event)=>{
  this.setState({total:parseInt(this.state.num1)*parseInt(this.state.num2)})
   event.prevent.default();
}



  render() {
  return (
  <div>
   <h2>No of Rows '&' COloumns</h2>
   <form onSubmit={this.exe} >
     <Grid container spacing={2} >
     <Grid item xs={16} md={6}>
   <div >
      < TextField id="outlined-basic" input type="num" value={this.state.num1} placeholder="enter row" onChange={this.handlenum1} />
   </div>

   <div>
     < TextField id="outlined-basic"  input type="text" value={this.state.num2} placeholder="enter coloums" onChange={this.handlenum2} />
   </div>

   <div>
     <button type='submit'>add</button> 
   </div>
   </Grid>
   </Grid>
   </form>
    <TextField id="outlined-basic" label="result" variant="outlined" value={this.state.total}  />
    <TextField id="outlined-basic" label="category" variant="standard"   />

  
  </div>
  );
}
}
export default Multiplication;
