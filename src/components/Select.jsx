import React, { useState } from 'react';
import Input from './Input';

const Select = (props) => {
    const [devicesArr, setArr] = useState([]);

    function updateArr (newArrElem, isAddition) {
        if (isAddition) {
            let newDeviesArr = [...devicesArr, newArrElem];
            setArr(newDeviesArr);
            props.getDevicesArray(newDeviesArr);
        } else {
            let newDeviesArr = devicesArr.filter(devise => devise !== newArrElem);
            setArr(newDeviesArr);
            props.getDevicesArray(newDeviesArr);
        }       
    }

    return (
        <form>
            {props.devices.map(device => (
                <Input 
                    update={updateArr}
                    key={device.n} 
                    id={device.n}
                />
            ))}
        </form>
    );
};

export default Select;