import React,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WithdrawAmount } from '../state/action-creators/WithdrawAmount';
import { DepositAmount } from '../state/action-creators/DepositAmount';


const Navbar = () => {
    const [Value, setValue] = useState(0);
    const handleChange =(event)=>{
       return setValue(event.target.value)

   }
    const myState = useSelector((state) =>
     state
  )
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">iBanking</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      
          </ul>
      
   <div>
        <button disabled={true} className="btn btn-warning" type="submit">Your Balance: {myState}</button>
        </div>
    </div>
  </div>
</nav>
<div className='container'>
<button onClick={()=>dispatch(WithdrawAmount(Value))}><span> -</span></button>
        <input type="number" onChange={handleChange} />
        <button  onClick={() => dispatch(DepositAmount(Value))}><span> +</span></button>
        </div>
    </div>
  )
}

export default Navbar
