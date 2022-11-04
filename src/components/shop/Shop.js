import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';

function Shop() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)


    return (
        <>
            {/* without using bindActionCreators
<div >
                <button className="btn btn-outline-success" type="submit" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} >-</button>
                handle balance
                <button className="btn btn-outline-success" type="submit" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
            </div>
*/}


            <div >
                <button className="btn btn-outline-success" type="submit" onClick={() => { withdrawMoney(100) }} >-</button>
                handle balance
                <button className="btn btn-outline-success" type="submit" onClick={() => { depositMoney(100) }}>+</button>
            </div >
        </>
    )
}
export default Shop