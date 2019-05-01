import React from "react"
import Validation from "./Validation"
const ValidationStage3 = (props) => {
    return (
        <>
            <div className="form-group row">
                <label htmlFor="emailInput" className="col-sm-3 col-form-label">Email:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={props.state.email} name="email" type="email" className="form-control" id="emailInput" placeholder="jan_kowalski@gmail.com" />
                    {props.errors.email && <span className="warning">{Validation.messages.email_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">Hasło:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={props.state.password} name="password" type="password" className="form-control" id="password" placeholder="Podaj hasło" />
                    {props.errors.password && <span className="warning">{Validation.messages.password_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="passwordCheck" className="col-sm-3 col-form-label">Powtórz:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={props.state.passwordCheck} name="passwordCheck" type="password" className="form-control" id="passwordCheck" placeholder="Powtórz" />
                    {props.errors.passwordCheck && <span className="warning">{Validation.messages.passwordCheck_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <input onChange={props.change} value={props.state.regAccept} className="form-check-input" name="regAccept" type="checkbox"  id="regAccept" />
                    <label htmlFor="regAccept" className="checkLabel">Czy akceptujesz regulamin</label>
                    {props.errors.regAccept && <p className="warning">{Validation.messages.regAccept_inCorrect}</p>}

                </div>
                <div className="col-sm-12">
                    <input className="form-check-input" name="newsAccept" type="checkbox"  id="newsAccept" />
                    <label htmlFor="newsAccept" className="checkLabel">Zapisz mnie na newsletter.</label>
                </div>
            </div>
            <div className="pagination">
            <button type="button" onClick={props.move.bind(null, 2)} className="btn btn-primary btnComeBack">Wróc</button>
            <button type="button" onClick={()=>{props.validate(3)}} className="btn btn-primary btnContinue">Dołącz!</button>
            </div>
            
        </>
    )
}
export default ValidationStage3