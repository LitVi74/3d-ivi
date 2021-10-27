import React from 'react';

const Input = (props) => {

    return (
        <label>{props.id}
            <input 
                onChange = {e=>props.update(props.id, e.target.checked)}
                type="checkbox">
            </input>
        </label>
    );
};

export default Input;