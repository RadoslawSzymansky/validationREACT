import React from "react";
import "../styles/Join.scss"
import ValidationStage1 from "../components/ValidationStage1"
import ValidationStage2 from "../components/ValidationStage2"
import ValidationStage3 from "../components/ValidationStage3"
import Validation from "../components/Validation"
class Join extends React.Component {
    state = {
        activeStage: 1,
        userName: "",
        userSurname: "",
        licenseYears: 0,
        email: "",
        password: "",
        joinReasonMsg: "",
        gender: "",
        regAccept: false,
        newsAccept: false,
        passwordCheck: "",
        errors: {
            userName: false,
            userSurname: false,
            email: false,
            password: false,
            passwordCheck: false,
            licenseYears: false,
            joinReasonMsg: false,
            gender: false,
            regAccept: false
        },
        message: false
    }

    handleSubmitForm = () => {
        console.log('tu mozna zaczać wysylanie danych, walidacja po stronie klienta przebigla pomyslnie')
    }
    validateStage = stage => {
        console.log("walidauje etap", stage)
        const validation = Validation.validate(this.state, stage)
        console.log(validation)
        if (validation.correct) {
            console.log("ok")
            this.setState({
                correct: false,
                errors: {
                    userName: false,
                    userSurname: false,
                    email: false,
                    password: false,
                    passwordCheck: false,
                    accept: false,
                    licenseYears: false,
                    joinReasonMsg: false,
                    gender: false,
                    regAccept: false
                },
            })
            if (stage !== 3) {
                this.move(stage+1)
            }else{
                this.handleSubmitForm()
            }
        } else {
            this.setState({
                errors: {
                    userName: !validation.userName,
                    userSurname: !validation.userSurname,
                    email: !validation.email,
                    password: !validation.password,
                    passwordCheck: !validation.passwordCheck,
                    licenseYears: !validation.licenseYears,
                    joinReasonMsg: !validation.joinReasonMsg,
                    gender: !validation.gender,
                    regAccept: !validation.regAccept
                }
            })
        }

    }

    handleInputChange = e => {
        const value = e.target.value
        const name = e.target.name
        const type = e.target.type
        console.log(name,value)

        if (type === "checkbox") {
            const checked = e.target.checked
            this.setState({
                [name]: checked
            })
            return
        }
        this.setState({
            [name]: value
        })
    }
    move = num => {
        this.setState({
            activeStage: num
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmitFormClub} id="joinClub" action="submit">
                    <h3 className="mb-5">Wypełnij formularz</h3>
                    {this.state.activeStage === 1 ? <ValidationStage1 change={this.handleInputChange} state={this.state} errors={this.state.errors} validate={this.validateStage} move={this.move} /> : null}
                    {this.state.activeStage === 2 ? <ValidationStage2 change={this.handleInputChange} state={this.state} validate={this.validateStage} errors={this.state.errors} move={this.move} /> : null}
                    {this.state.activeStage === 3 ? <ValidationStage3 change={this.handleInputChange} state={this.state} errors={this.state.errors} validate={this.validateStage} nextStep={this.nextStep} move={this.move} /> : null}
                </form>

            </>
        )
    }
}
export default Join