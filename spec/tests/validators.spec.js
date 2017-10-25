import validClient from '../../src/system/validators'
import { AuthValid } from '../../server/modules/validators'

const key = 'reg';

const modelClient = [
      {
        email: '1@mail.ru',
        password: '111111',
        rePassword: '111111'
      },
      {
        email: '1@mail.ru',
        password: '',
        rePassword: '111111'
      },
      {
        email: '',
        password: '111111',
        rePassword: '111111'
      },
      {
        email: '1===***!!!<><><>@mail.ru',
        password: '111111',
        rePassword: '111111'
      },
     /* {
        email: '1@mail.ru',
        password: '111111',
        rePassword: '111111111111'
      },*/
      {
        email: '1@mail.ru',
        password: '111111',
        rePassword: '222222'
    }
    ];

const modelServer = [
      {
        email: '1@mail.ru',
        password: '111111'
      },
      {
        email: '1@mail.ru',
        password: ''
      },
      {
        email: '',
        password: '111111'
      },
      {
        email: '1===***!!!<><><>@mail.ru',
        password: '111111'
      },
      /*{
        email: '1@mail.ru',
        password: '11111111111111'
      },*/
      /*{
        email: '1@mail.ru',
        password: '222222'
      }*/
    ];

describe('Проверка модуля validators на клиенте:', () => {
      it('Все поля верно заполнены!', () => {
            expect(validClient(modelClient[0]).isValid).toBe(true);
            expect(validClient(modelClient[0]).errors).toEqual({})
      });
      it('Пароль не заполнен!', () => {
            expect(validClient(modelClient[1]).isValid).toBe(false);
            expect(validClient(modelClient[1]).errors).toEqual({passwordLength: 'Длина пароля должна быть не менее 6 символов!', passwordEmpty: 'Введите пароль!' })
      });
      it('Почтовый адрес не заполнен!', () => {
            expect(validClient(modelClient[2]).isValid).toBe(false);
            expect(validClient(modelClient[2]).errors).toEqual({emailError: 'Не верный формат почты!', emailEmpty: 'Введите почтовый адрес!'})
      });
      it('Не верный формат почты!', () => {
            expect(validClient(modelClient[3]).isValid).toBe(false);
            expect(validClient(modelClient[3]).errors).toEqual({ emailError: 'Не верный формат почты!'})
      });
      it('Пароль не верен!', () => {
            expect(validClient(modelClient[4],key).isValid).toBe(false);
            expect(validClient(modelClient[4],key).errors).toEqual({ different: 'Пароли не совпадают!' },{ passwordLength: 'Длина пароля должна быть не менее 6 символов!' })
      })
});

describe('Проверка модуля validators на сервере:', () => {
      it('Все поля верно заполнены!', () => {
            expect(AuthValid(modelServer[0].email, modelServer[0].password).isValid).toBe(true);
            expect(AuthValid(modelServer[0].email, modelServer[0].password).errors).toEqual({})
      });
      it('Пароль не заполнен!', () => {
            expect(AuthValid(modelServer[1].email, modelServer[1].password).isValid).toBe(false);
            expect(AuthValid(modelServer[1].email, modelServer[1].password).errors).toEqual({passwordLength: 'Длина пароля должна быть не менее 6 символов!', passwordEmpty: 'Введите пароль!' })
      });
      it('Почтовый адрес не заполнен!', () => {
            expect(AuthValid(modelServer[2].email, modelServer[2].password).isValid).toBe(false);
            expect(AuthValid(modelServer[2].email, modelServer[2].password).errors).toEqual({emailError: 'Не верный формат почты!', emailEmpty: 'Введите почтовый адрес!'})
      });
      it('Не верный формат почты!', () => {
            expect(AuthValid(modelServer[3].email, modelServer[3].password).isValid).toBe(false);
            expect(AuthValid(modelServer[3].email, modelServer[3].password).errors).toEqual({ emailError: 'Не верный формат почты!'})
      });
     /* it('Проверьте длину пароля!', () => {
            expect(AuthValid(modelServer[4].email, modelServer[4].password).isValid).toBe(false);
            expect(AuthValid(modelServer[4].email, modelServer[4].password).errors).toEqual({ passwordLength: 'Длина пароля должна быть не менее 6 символов!' })
      });*/
     /* it('Пароль не верен!', () => {
            expect(AuthValid(modelServer[4].email, modelServer[4].password).isValid).toBe(false);
            expect(AuthValid(modelServer[4].email, modelServer[4].password).errors).toEqual({ different: 'Пароли не совпадают!' })
      })*/
});