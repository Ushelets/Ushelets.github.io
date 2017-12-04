<<<<<<< HEAD
ï»¿import valid from '../../src/system/validators'
import modelClient from '../data/auth.valid.Client'
const key = 'reg';

describe('ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð¼Ð¾Ð´ÑƒÐ»Ñ validators Ð½Ð° ÐºÐ»Ð¸ÐµÐ½Ñ‚Ðµ:', () => {
    it('Ð’ÑÐµ Ð¿Ð¾Ð»Ñ Ð²ÐµÑ€Ð½Ð¾ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ñ‹!', () => {
        expect(valid(modelClient[0]).isValid).toBe(true);
        expect(valid(modelClient[0]).errors).toEqual({})
    });
    it('ÐŸÐ°Ñ€Ð¾Ð»ÑŒ Ð½Ðµ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½!', () => {
        expect(valid(modelClient[1]).isValid).toBe(false);
        expect(valid(modelClient[1]).errors).toEqual({ passwordLength: 'Ð”Ð»Ð¸Ð½Ð° Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ Ð½Ðµ Ð¼ÐµÐ½ÐµÐµ 6 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!', passwordEmpty: 'Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ!' })
    });
    it('ÐŸÐ¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ Ð½Ðµ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½!', () => {
        expect(valid(modelClient[2]).isValid).toBe(false);
        expect(valid(modelClient[2]).errors).toEqual({ emailError: 'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð¿Ð¾Ñ‡Ñ‚Ñ‹!', emailEmpty: 'Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ!' })
    });
    it('ÐÐµÐ²ÐµÑ€Ð½Ð°Ñ Ð¿Ð¾Ñ‡Ñ‚Ð°!', () => {
        expect(valid(modelClient[3]).isValid).toBe(false);
        expect(valid(modelClient[3]).errors).toEqual({ emailError: 'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð¿Ð¾Ñ‡Ñ‚Ñ‹!' })
    });
    it('ÐŸÐ°Ñ€Ð¾Ð»ÑŒ Ð½Ðµ Ð²ÐµÑ€ÐµÐ½!', () => {
        expect(valid(modelClient[4], key).isValid).toBe(false);
        expect(valid(modelClient[4], key).errors).toEqual({ different: 'ÐŸÐ°Ñ€Ð¾Ð»Ð¸ Ð½Ðµ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‚!' }, { passwordLength: 'Ð”Ð»Ð¸Ð½Ð° Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ Ð½Ðµ Ð¼ÐµÐ½ÐµÐµ 6 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!' })        
    })
});
=======
import valid from '../../src/system/validators'
import modelClient from '../data/authClient'

const key = 'reg';

describe('Ïðîâåðêà ìîäóëÿ validators íà êëèåíòå:', () => {
    it('Âñå ïîëÿ âåðíî çàïîëíåíû!', () => {
        expect(valid(modelClient[0]).isValid).toBe(true);
        expect(valid(modelClient[0]).errors).toEqual({})
    });
    it('Ïàðîëü íå çàïîëíåí!', () => {
        expect(valid(modelClient[1]).isValid).toBe(false);
        expect(valid(modelClient[1]).errors).toEqual({ passwordLength: 'Äëèíà ïàðîëÿ äîëæíà áûòü íå ìåíåå 6 ñèìâîëîâ!', passwordEmpty: 'Ââåäèòå ïàðîëü!' })
    });
    it('Ïî÷òîâûé àäðåñ íå çàïîëíåí!', () => {
        expect(valid(modelClient[2]).isValid).toBe(false);
        expect(valid(modelClient[2]).errors).toEqual({ emailError: 'Íå âåðíûé ôîðìàò ïî÷òû!', emailEmpty: 'Ââåäèòå ïî÷òîâûé àäðåñ!' })
    });
    it('Íå âåðíûé ôîðìàò ïî÷òû!', () => {
        expect(valid(modelClient[3]).isValid).toBe(false);
        expect(valid(modelClient[3]).errors).toEqual({ emailError: 'Íå âåðíûé ôîðìàò ïî÷òû!' })
    });
    it('Ïàðîëü íå âåðåí!', () => {
        expect(valid(modelClient[4], key).isValid).toBe(false);
        expect(valid(modelClient[4], key).errors).toEqual({ different: 'Ïàðîëè íå ñîâïàäàþò!' }, { passwordLength: 'Äëèíà ïàðîëÿ äîëæíà áûòü íå ìåíåå 6 ñèìâîëîâ!' })
    })
});
>>>>>>> origin/master
