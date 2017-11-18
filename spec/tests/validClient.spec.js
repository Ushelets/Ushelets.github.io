import valid from '../../src/system/validators'
import modelClient from '../data/authClient'

const key = 'reg';

describe('Проверка модуля validators на клиенте:', () => {
    it('Все поля верно заполнены!', () => {
        expect(valid(modelClient[0]).isValid).toBe(true);
        expect(valid(modelClient[0]).errors).toEqual({})
    });
    it('Пароль не заполнен!', () => {
        expect(valid(modelClient[1]).isValid).toBe(false);
        expect(valid(modelClient[1]).errors).toEqual({ passwordLength: 'Длина пароля должна быть не менее 6 символов!', passwordEmpty: 'Введите пароль!' })
    });
    it('Почтовый адрес не заполнен!', () => {
        expect(valid(modelClient[2]).isValid).toBe(false);
        expect(valid(modelClient[2]).errors).toEqual({ emailError: 'Не верный формат почты!', emailEmpty: 'Введите почтовый адрес!' })
    });
    it('Не верный формат почты!', () => {
        expect(valid(modelClient[3]).isValid).toBe(false);
        expect(valid(modelClient[3]).errors).toEqual({ emailError: 'Не верный формат почты!' })
    });
    it('Пароль не верен!', () => {
        expect(valid(modelClient[4], key).isValid).toBe(false);
        expect(valid(modelClient[4], key).errors).toEqual({ different: 'Пароли не совпадают!' }, { passwordLength: 'Длина пароля должна быть не менее 6 символов!' })
    })
});
