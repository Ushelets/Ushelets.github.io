import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


    export default (model, key = '') => {
        const errors = {};

        if (isEmpty(model.password)) {
            errors.passwordEmpty = 'Введите пароль!';
        }
        if (isEmpty(model.email)) {
            errors.emailEmpty = 'Введите почтовый адрес!';
        }
        if (!Validator.isEmail(model.email)){
            errors.emailError = 'Не верный формат почты!';
        }

        if (!Validator.isLength(model.password, {min:6})){
            errors.passwordLength = 'Длина пароля должна быть не менее 6 символов!';
        }
        if (key === 'reg') {
            if (isEmpty(model.rePassword)) {
                errors.rePassword = 'Повторите пароль!';
            }
            if (model.password !== model.rePassword){
                errors.different = 'Пароли не совпадают!';
            }
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
    }
