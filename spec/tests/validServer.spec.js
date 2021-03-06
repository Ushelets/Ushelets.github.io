﻿import valid from '../../server/modules/validators'
import modelServer from '../data/auth.valid.Server'

describe('Проверка модуля validators на сервере:', () => {
      it('Все поля верно заполнены!', () => {
            expect(valid.Auth(modelServer[0].email, modelServer[0].password).isValid).toBe(true);
            expect(valid.Auth(modelServer[0].email, modelServer[0].password).errors).toEqual({})
      });
      it('Пароль не заполнен!', () => {
            expect(valid.Auth(modelServer[1].email, modelServer[1].password).isValid).toBe(false);
            expect(valid.Auth(modelServer[1].email, modelServer[1].password).errors).toEqual({passwordLength: 'Длина пароля должна быть не менее 6 символов!', passwordEmpty: 'Введите пароль!' })
      });
      it('Почтовый адрес не заполнен!', () => {
            expect(valid.Auth(modelServer[2].email, modelServer[2].password).isValid).toBe(false);
            expect(valid.Auth(modelServer[2].email, modelServer[2].password).errors).toEqual({emailError: 'Неверный формат почты!', emailEmpty: 'Введите почтовый адрес!'})
      });
      it('Неверная почта!', () => {
            expect(valid.Auth(modelServer[3].email, modelServer[3].password).isValid).toBe(false);
            expect(valid.Auth(modelServer[3].email, modelServer[3].password).errors).toEqual({ emailError: 'Неверный формат почты!'})
      });     
});