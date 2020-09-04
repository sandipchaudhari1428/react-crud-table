import React,{useEffect,useState} from 'react'
import Singlerow from './Singlerow';
import {useStateValue} from '../../StateProvider';
function Table() {
    const [{products,selectallproducts},dispatch] = useStateValue();
    const [newproducts,setNewproducts] = useState(products)
    const [filteredData,setFilterdData] = useState(products)
    

    const handlAllselect = () => {
        
        dispatch({
            type : 'SELECT_ALL_PRODUCTS',
        })
    }

   const filtertable = e => {
       if(e.target.value === ''){
        setNewproducts(products);
        console.log(products)
          
       }else {
           let filterProducts = products.filter(el => el.name.includes(e.target.value))
           console.log(filterProducts.length)
           setFilterdData(filterProducts);
    }
   }

   useEffect(() => {
       setNewproducts(products)
   }, [products])

   useEffect(() => {
    setNewproducts(filteredData)
}, [filteredData])






   return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    <th style={{width:'10px'}}>
                        <input type = "checkbox" onClick={handlAllselect} defaultChecked={false} />
                   </th>
                    <th style={{width:'50px'}}>
                        <p>ID</p>
                    </th>
                    <th style={{width:'350px'}}>
                        <p>Name</p>
                        <input type="text" placeholder="Enter name" onChange={filtertable}/>
                    </th>
                    <th style={{width:'150px'}}>
                        Price
                    </th>
                    <th style={{width:'100px'}}>
                        Coupon
                    </th>
                    <th style={{width:'100px'}}>
                        In Stock
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        newproducts.map((el,i) => <Singlerow key={i} rowdata={el}  />)
                    }
                </tbody>
            </table>
            
        </div>
    )

}

export default Table
