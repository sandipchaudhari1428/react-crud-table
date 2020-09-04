import React from 'react';
import {useStateValue} from '../../StateProvider';
import {action} from '../../reducer';

function Options() {
    const [{products},dispatch] = useStateValue();
    

    let emptyProduct = {
        id : (products.length <=0) ? 0 : products[products.length-1].id+1,
        name : '',
        price : 0,
        coupon: 'false',
        stock : 'false'
    }
    const addproduct = () => {
        dispatch({
            type : 'ADD_PRODUCT',
            product : emptyProduct
        })
        
    }

    const reset = () => {
        dispatch({
            type : 'RESET_TABLE'
        })
    }

    const removeproduct = () => {
        if(products.length <= 0){
            console.log('empty')
            return 
        }else {
            dispatch({
                type : 'REMOVE_FROM_PRODUCTS'
            })
        }
        
    }
    return (
        <div className="options">
            <button onClick={addproduct} className="addButton">ADD</button>
            <button onClick={removeproduct} className="delButton">DELETE</button>
            <button onClick={reset} className="resetButton">RESET</button>
        </div>
    )
}

export default Options
