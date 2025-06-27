import React from "react";

const Counter = ({ count1, updateCount }) => {
    console.log("I am in Counnter");

    return (
        <React.Fragment>
            <button
                value={count1}
                onClick={(() => {
                    let newCount = count1 + 1;
                    updateCount(newCount)
                })}
            >
                Counter1 {count1}
            </button>
        </React.Fragment>
    )
}

export default Counter;