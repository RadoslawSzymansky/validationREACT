import React from "react"
import Validation from "./Validation"
const ValidationStage2 = props => {
    return (
        <>
            <div className="form-group row">
                <label htmlFor="inputLicense" className="col-sm-4 col-form-label">Prawo jazdy:</label>
                <div className="col-sm-8">
                    <input onChange={props.change} value={props.state.licenseYears} name="licenseYears" type="number" className="form-control" id="inputLicense" placeholder="Od ilu lat?" />
                    {props.errors.licenseYears && <span className="warning">{Validation.messages.licenseYears_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="message" className="col-sm-4 col-form-label">Wiadomość</label>
                <div className="col-sm-8">
                    <textarea  onChange={props.change} value={props.state.joinReasonMsg} name="joinReasonMsg" className="form-control" id="message" placeholder="Napisz dlaczego chcesz dołaczyć do naszego klubu" rows="3"></textarea>
                    {props.errors.joinReasonMsg && <span className="warning">{Validation.messages.joinReasonMsg_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-4 col-form-label">PŁEĆ</label>
                <div className="col-sm-8">
                    <select onChange={props.change} value={props.state.gender} className="form-control form-control-sm" name="gender" id="gender">
                        <option value="start">Wybierz</option>
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                    </select>
                    {props.errors.gender && <span className="warning">{Validation.messages.gender_inCorrect}</span>}

                </div>
            </div>
            <button type="button" onClick={props.move.bind(null, 1)} className="btn btn-primary btnContinue">Wróc</button>
            <button type="button" onClick={props.validate.bind(null, 2)} className="btn btn-primary btnContinue">Dalej</button>
        </>
    )
}
export default ValidationStage2