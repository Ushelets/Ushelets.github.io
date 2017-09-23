import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import VueNotifications from 'vue-notifications'

    export default (model) => {
        const errors = {};

        if (!Validator.isEmail(model.email)) {
            errors.email = true;
            VueNotifications.error({ message: 'Не верный формат почты!' })
        }
        if (isEmpty(model.password)) {
            errors.password = true;
            VueNotifications.error({ message: 'Введите пароль!' })
        }
        if (isEmpty(model.rePassword)) {
            errors.rePassword = true;
            VueNotifications.error({ message: 'Повторите пароль!' })
        }
        if (model.password !== model.rePassword){
            errors.different = true;
            VueNotifications.error({ message: 'Пароли не совпадают!' })
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
    }
