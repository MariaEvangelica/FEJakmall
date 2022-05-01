import React from "react";
import {NavLink} from "react-router-dom"

const StepIndicator = () => {
    const steps = [
        {
            path:"/delivery/step1"
        },
        {
            path:"/delivery/step2"
        },
        {
            path:"/delivery/step3"
        }
    ]

    const category = [
        {
            subCategory:"1 Delivery"
        },
        {
            subCategory:"2 Payment"
        },
    ]

    const handleStop = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="stepIndicator">
            {steps.map((step, index) => {
                return(
                    <>
                        <NavLink onClick={handleStop} activeClassName="activeLink" key={index} to={step.path}>
                            {index+1}
                        </NavLink>
                        <br/>
                    </>
                )
            })}
        </div>
    )
}

export default StepIndicator;