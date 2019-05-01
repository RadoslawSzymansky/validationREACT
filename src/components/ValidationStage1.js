import React from "react"
import Validation from "./Validation"
const ValidationStage1 = props => {
    return (
        <>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-4 col-form-label">IMIĘ</label>
                <div className="col-sm-8">
                    <input onChange={props.change} name="userName" type="text" className="form-control" id="inputName" placeholder="np. Jan " />
                    {props.errors.userName && <span className="warning">{Validation.messages.userName_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputSurname" className="col-sm-4 col-form-label">NAZWISKO</label>
                <div className="col-sm-8">
                    <input onChange={props.change} name="userSurname" type="text" className="form-control" id="inputSurname" placeholder="np. Kowalski" />
                    {props.errors.userSurname && <span className="warning">{Validation.messages.userSurname_inCorrect}</span>}
                </div>
            </div>
            <button type="button" onClick={props.validate.bind(null, 1)} className="btn btn-primary btnContinue">Dalej</button>
        </>

    )
}
export default ValidationStage1