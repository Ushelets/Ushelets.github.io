export default [

{  
    req: { email: '1@mail.ru', password: '111111' },
    res: { statusCode: 201, userID: 2, reputation: '0',  userName: 'Непонятный' }
},
    
{  
    req: { email: 'bookqwe.qwe', password: '111111' },
    res: { emailError: 'Неверный формат почты!' }
},

{  
    req: { email: 'bookqwe.qwe', password: 'qwe' },
    res: { emailError: 'Неверный формат почты!', passwordLength: 'Длина пароля должна быть не менее 6 символов!' }
},

{
    req: { email: '1@mail.ru', password: 'qwe' },
    res: { passwordLength: 'Длина пароля должна быть не менее 6 символов!' }
}
]