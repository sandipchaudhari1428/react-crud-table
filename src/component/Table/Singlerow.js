import React,{useState,useEffect} from "react";
import {useStateValue} from '../../StateProvider';

function Singlerow(props) {
    const [{products},dispatch] = useStateValue();
    let {id,name,price,coupon = false,stock = false,iselected} = props.rowdata;
    let [select,setSelect] = useState(false);
    
    let [couponvalue,setCouponvalue] = useState(coupon);
    let [stockvalue,setStockvalue] = useState(stock);
    let [isEditing,setisEditing] = useState();
    let [NewPrice,setNewPrice] = useState(price)
    let [isNameEditing,setisNameEditing]=useState()
    let [NewName,setNewName] = useState(name)
    let [rowselected,setRowselected] = useState(iselected)
    const toggle = () => {
      setSelect({
        select : !select
      })
    }
    
    useEffect(() => {
      document.querySelector(`#check${id}`).checked = iselected;
      
    }, [iselected])

    const changeprice = e => {
      e.preventDefault();
      setisEditing(false);
    }

    const changename = e => {
      e.preventDefault();
      setisNameEditing(false);
    }

    const editname = e => {
      setNewName(e.target.value)
    }

    const editprice = e => {
      // console.log(e.target.value)
      setNewPrice(e.target.value)
      
    }

    const selectrow = () => {
      setRowselected(rowselected)
    }

    const handleCheckbox = () => {
      
      dispatch({
        type : 'SELECTED_PRODUCT',
        id : id
        
      })
    }

    

  return (
    <tr className="borderbottom">
      <td>
        <input type='checkbox' id={`check${id}`} onChange={handleCheckbox} defaultChecked={rowselected}  />
      </td>
      <td>
  <p>{id}</p>
      </td>
      
      <td onClick={()=>{setisNameEditing(true)}}>{
        isNameEditing ? <form  onSubmit={changename}><input type = "text" name="name"  className="nameinput" onChange={editname} defaultValue = {NewName} /><button>ok</button></form> : NewName
      }</td>
      <td onClick={()=>{setisEditing(true)}}>{
        isEditing ? <form  onSubmit={changeprice}><input type = "text" className="priceinput" name="price" onChange={editprice} defaultValue = {NewPrice} /><button>ok</button></form> : NewPrice
      }</td>
      <td onClick={()=>{setCouponvalue(!couponvalue)}}>{couponvalue.toString()}</td>
      <td onClick={()=>{setStockvalue(!stockvalue)}}>{stockvalue.toString()}</td>
      
    </tr>
  );
}

export default Singlerow;
