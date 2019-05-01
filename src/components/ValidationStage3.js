import React from "react"
const ValidationStage3 = (props) => {
    return (
        <>
            <div className="form-group row">
                <label htmlFor="emailInput" className="col-sm-3 col-form-label">Email:</label>
                <div className="col-sm-9">
                    <input type="email" className="form-control" id="emailInput" placeholder="jan_kowalski@gmail.com" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">Hasło:</label>
                <div className="col-sm-9">
                    <input type="password" className="form-control" id="password" placeholder="Podaj hasło" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="passwordCheck" className="col-sm-3 col-form-label">Powtórz:</label>
                <div className="col-sm-9">
                    <input type="password" className="form-control" id="passwordCheck" placeholder="Powtórz" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-check-input" type="checkbox" value="" id="regAccept" />
                    <label htmlFor="regAccept" className="checkLabel">Czy akceptujesz regulamin</label>

                </div>
                <div className="col-sm-12">
                    <input className="form-check-input" type="checkbox" value="" id="newsAccept" />
                    <label htmlFor="newsAccept" className="checkLabel">Zapisz mnie na newsletter.</label>
                </div>
            </div>
            <button type="" onClick={props.move.bind(null, 2)} className="btn btn-primary btnContinue">Wróc</button>
            <button onClick={props.move.send} className="btn btn-primary btnContinue">Dalej</button>

        </>
    )
}
export default ValidationStage3