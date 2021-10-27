import React from 'react';

const Select = (params) => {

    return (
        <form>
            {params.result.map(elem => (
                <label key={elem.n}>{elem.n}<input type="checkbox"></input></label>
            ))}
        </form>
    );
};

export default Select;