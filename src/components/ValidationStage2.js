import React from "react"
const ValidationStage2 = props => {
    return (
        <>
            <div className="form-group row">
                <label htmlFor="inputLicense" className="col-sm-4 col-form-label">Prawo jazdy:</label>
                <div className="col-sm-8">
                    <input type="number" className="form-control" id="inputLicense" placeholder="Od ilu lat?" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="message" className="col-sm-4 col-form-label">Wiadomość</label>
                <div className="col-sm-8">
                    <textarea className="form-control" id="message" placeholder="Napisz dlaczego chcesz dołaczyć do naszego klubu" rows="3"></textarea>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-4 col-form-label">PŁEĆ</label>
                <div className="col-sm-8">
                    <select className="form-control form-control-sm" name="gender" id="gender">
                        <option value="start">Wybierz</option>
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                    </select>
                </div>
            </div>
            <button type="button" onClick={props.move.bind(null, 1)} className="btn btn-primary btnContinue">Wróc</button>
            <button type="button" onClick={props.move.bind(null, 3)} className="btn btn-primary btnContinue">Dalej</button>

        </>
    )
}
export default ValidationStage2