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
        errors: {
            username: false,
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
        message: false
    }

    handleSubmitFormClub = e => {
        e.preventDefault()
        console.log('a')
    }
    validateStage = stage => {
        console.log("walidauje etap", stage)
        // if (stage === 1) {
        //     const validation = Validation["stage" + stage](this.state)
        //     console.log(validation)
        //     if (validation.correct) {
        //         console.log('pomyslon')
        //         this.setState({
        //             errors: {
        //                 userName: false,
        //                 userSurname: false,
        //             }
        //         });
        //         this.move(2)
        //     } else {
        //         this.setState({
        //             errors: {
        //                 userName: !validation.userName,
        //                 userSurname: !validation.userSurname,
        //             }
        //         })
        //     }
        // }
        const validation = Validation["stage" + stage](this.state)
        console.log(validation)
        if (validation.correct) {
            console.log('pomyslon')
            this.setState({
                errors: {
                    userName: false,
                    userSurname: false,
                }
            });
            this.move(2)
        } else {
            this.setState({
                errors: {
                    userName: !validation.userName,
                    userSurname: !validation.userSurname,
                }
            })
        }

    }

    handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        const type = e.target.type
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
                    {this.state.activeStage === 1 ? <ValidationStage1 change={this.handleChange} errors={this.state.errors} validate={this.validateStage} move={this.move} /> : null}
                    {this.state.activeStage === 2 ? <ValidationStage2 nextStep={this.nextStep} move={this.move} /> : null}
                    {this.state.activeStage === 3 ? <ValidationStage3 nextStep={this.nextStep} move={this.move} /> : null}
                </form>

            </>
        )
    }
}
export default Join