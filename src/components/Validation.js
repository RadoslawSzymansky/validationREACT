const Validation = {
    messages: {
        userName_inCorrect: "Niepoprawne imie. Minimum 4 znaki",
        userSurname_inCorrect: "Niepoprawne nazwisko. Minimum 4 znaki",
        email_inCorrect: "Niepoprawny email",
        licenseYears_inCorrect: "Musisz posiadać prawo jazdy przynajmiej 1 rok..",
        password_inCorrect: "Hasło musi sie składać z minimum 8 znaków",
        passwordCheck_inCorrect: "Hasła nie są takie same",
       regAccept_inCorrect: "Nie zaakceptowałes regulaminu",
        joinReasonMsg_inCorrect: "Wiadomość musi się składać z minimum 10 znaków",
        gender_inCorrect: "Wybierz płeć"
    },
    validate: (data, stage) => {
        let userName = false;
        let userSurname = false;
        let licenseYears = false;
        let email = false;
        let password = false;
        let passwordCheck = false;
        let joinReasonMsg = false;
        let gender = false;
        let regAccept = false;
        let newsAccept = false;
        let correct = false;
        if (!(data.userName.length < 4)) {
            userName = true
        }
        if (!(data.userSurname.length < 4)) {
            userSurname = true
        }
        if (data.gender === "male" || data.gender === "female") {
            gender = true
        }
        if (data.licenseYears > 0 ) {
            licenseYears = true
        }
        if (data.joinReasonMsg.length > 10) {
            joinReasonMsg = true
        }
        // 3
        if (data.email.indexOf("@") !== -1) {
            email = true
        } 
        if (data.password === data.passwordCheck) {
            passwordCheck = true
        }
        if (data.password.length >= 8) {
            password = true

        }
        // stage 1
        if (stage === 1) {
            if (userName && userSurname) {
                correct = true
            }
        }
        // stage 2
        if (stage === 2) {
            if (gender && joinReasonMsg && licenseYears) {
                correct = true
            }
        }
        // stage 3
        if (stage === 3){
            if (email && password && passwordCheck) {
                correct = true
            }
        }
        return ({
            userName,
            userSurname,
            licenseYears,
            email,
            password,
            joinReasonMsg,
            gender,
            regAccept,
            newsAccept,
            correct
        })
    }
}
export default Validation