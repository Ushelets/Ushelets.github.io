import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default (email, password) => {
    const errors = {};

    if (!Validator.isEmail(email)){
        errors.emailError = 'Не верный формат почты!';
    }
    if (!Validator.isLength(password, {min:6})){
        errors.passwordLength = 'Длина пароля должна быть не менее 6 символов!';
    }
    if (isEmpty(password)) {
        errors.passwordEmpty = 'Введите пароль!';
    }
    if (isEmpty(email)) {
        errors.emailEmpty = 'Введите почтовый адрес!';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }

};