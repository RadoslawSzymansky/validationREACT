const Validation = {
    messages: {
        userName_inCorrect: "Niepoprawne imie. Minimum 4 znaki",
        userSurname_inCorrect: "Niepoprawne nazwisko. Minimum 4 znaki",
        email_inCorrect: "Niepoprawny email",
        licenseYears_inCorrect: "Musisz posiadać prawo jazdy przynajmiej 1 rok..",
        password_inCorrect: "Hasło musi sie składać z minimum 8 znaków",
        passwordCheck_inCorrect: "Hasła nie są takie same",
        checkbox_inAccept: "Nie zaakceptowałes regulaminu",
        joinReasonMsg_inAccept: "Wiadomość musi się składać z minimum 10 znaków",
        gender_inCorrect: "Wybierz płeć"
    },
    formValidation: (data) => {
        let userName = false;
        let userSurname = false;
        let email = false;
        let password = false;
        let passwordCheck = false;
        let accept = false;
        let correct = false;
        if (data.username.length < 4) {
            userName = true
        }
        if (data.email.indexOf("@") !== -1) {
            email = true
        }
        if (data.password.length >= 8) {
            password = true

        }
        if (data.accept) {
            accept = true
        }
        if (userName && email && password && accept) {
            correct = true
        }
        return ({
            userName,
            password,
            accept,
            email,
            correct
        })
    },
    stage1: (data) => {
        let userName = false;
        let userSurname = false;
        let correct = false;
        if (!(data.userName.length < 4)) {
            userName = true
        }
        if (!(data.userName.length < 4)) {
            userSurname = true
        }
        if (userName && userSurname) {
            correct = true
        }
        return ({
            userName,
            userSurname,
            correct
        })
    },
    stage2: (data) => {
        userName = false,
            userSurname = false,
            licenseYears = false,
            email = false,
            password = false,
            joinReasonMsg = false,
            gender = false,
            regAccept = false,
            newsAccept = false,
            if (data.gender === "male" || data.gender === "female") {
                gender = true
            }
        if (data.licenseYears <= 0) {
            licenseYears = true
        }
        if (data.joinReasonMsg.length < 10) {
            joinReasonMsg = true
        }
        return ({
            userSurname ,
            licenseYears ,
            email ,
            password ,
            joinReasonMsg ,
            gender ,
            regAccept ,
            newsAccept ,
        })
    }
}
export default Validation