import valid from '../../src/system/validators'
import modelClient from '../data/authClient'

const key = 'reg';

describe('�������� ������ validators �� �������:', () => {
    it('��� ���� ����� ���������!', () => {
        expect(valid(modelClient[0]).isValid).toBe(true);
        expect(valid(modelClient[0]).errors).toEqual({})
    });
    it('������ �� ��������!', () => {
        expect(valid(modelClient[1]).isValid).toBe(false);
        expect(valid(modelClient[1]).errors).toEqual({ passwordLength: '����� ������ ������ ���� �� ����� 6 ��������!', passwordEmpty: '������� ������!' })
    });
    it('�������� ����� �� ��������!', () => {
        expect(valid(modelClient[2]).isValid).toBe(false);
        expect(valid(modelClient[2]).errors).toEqual({ emailError: '�� ������ ������ �����!', emailEmpty: '������� �������� �����!' })
    });
    it('�� ������ ������ �����!', () => {
        expect(valid(modelClient[3]).isValid).toBe(false);
        expect(valid(modelClient[3]).errors).toEqual({ emailError: '�� ������ ������ �����!' })
    });
    it('������ �� �����!', () => {
        expect(valid(modelClient[4], key).isValid).toBe(false);
        expect(valid(modelClient[4], key).errors).toEqual({ different: '������ �� ���������!' }, { passwordLength: '����� ������ ������ ���� �� ����� 6 ��������!' })
    })
});
