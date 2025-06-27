import React, { useEffect } from "react";

const Counter = ({ count1, updateCount }) => {

    useEffect(() => {
        console.log(" Mouniting the component");

        return () => {
            console.log("Unmounting --");

        }
    }, [])
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