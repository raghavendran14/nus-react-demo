import React, { memo } from "react"
const CounterPure = React.memo(({ text }) => {
    console.log('Message rendered');
    return <p>{text}</p>;
});

export default CounterPure;