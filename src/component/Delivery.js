import React from "react";
import { Route, Link, useHistory } from 'react-router-dom'
import StepIndicator from "./StepIndicator";
import FirstStep from "./FirstStep/FirstStep";

const Delivery = () => {
    const history = useHistory();
    const handleFirstStep = () =>{
        history.push("/delivery/step1")
    }
    const handleNextStep = () =>{
        history.push("/delivery/step2")
    }
    const handleLastStep = () =>{
        history.push("/delivery/step3")
    }
    return (
        <div className="delivery">
            <div className="mainContainer">
                <StepIndicator/>
                <div className="output">
                    <Route exact path="/delivery/step1">
                        <FirstStep/>
                        <div className="btnContainer">
                            <button onClick={handleNextStep}>Next</button>
                        </div>
                    </Route>
                    <Route exact path="/delivery/step2">
                        Step 2
                        <div className="btnContainer">
                            <button onClick={handleFirstStep}>Back</button>
                            <button onClick={handleLastStep}>Next</button>
                        </div>
                    </Route>
                    <Route exact path="/delivery/step3">
                        Step 3
                        <div className="btnContainer">
                            <button onClick={handleNextStep}>Back</button>
                        </div>
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Delivery