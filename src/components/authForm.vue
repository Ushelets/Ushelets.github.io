<template>
    <div class="login-wrap">
        <input id="tabInput" type="radio" name="tab" class="sign-in" checked/><label for="tabInput" class="tab" @click="showForm(1)">Вход</label>
        <input id="tabRegistration" type="radio" name="tab" class="sign-up"/><label for="tabRegistration" class="tab" @click="showForm(2)">Регистрация</label>
        <transition name="component-fade">
            <form class="sign-in-form" v-show="showSignInForm" @submit.prevent = "auth(model)">
                <div class="input-group">
                    <label for="emailIn" class="label">Почта</label>
                    <input id="emailIn" type="email" class="input" required v-model.lazy="model.email"/>
                </div>
                <div class="input-group">
                    <label for="passIn" class="label">Пароль</label>
                    <input id="passIn" type="password" class="input" data-type="password" required v-model.lazy="model.password"/>
                </div>
                <button type="submit">ВОЙТИ</button>
                <div class="hr"></div>
                <div class="footer-link" >
                    <a href="#forgot">Забыли пароль?</a>
                </div>
            </form>
        </transition>
        <transition name="component-fade">
            <form class="sign-up-form" v-show="showSignUpForm" @submit.prevent = "submit()">
                <div class="input-group">
                    <label for="emailUp" class="label">Почта</label>
                    <input id="emailUp" type="email" class="input" required v-model.lazy="model.email"/>
                </div>
                <div class="input-group">
                    <label for="passUp" class="label">Пароль</label>
                    <input id="passUp" type="password" class="input" data-type="password" required v-model.lazy="model.password"/>
                </div>
                <div class="input-group">
                    <label for="rePass" class="label">Повторить пароль</label>
                    <input id="rePass" type="password" class="input" data-type="password" required v-model.lazy="model.rePassword"/>
                </div>
                <button type="submit">РЕГИСТРАЦИЯ</button>
                <div class="hr"></div>
                <div class="footer-link" >
                    <label for="tabInput">Уже зарегистрированы?</label>
                </div>
            </form>
        </transition>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import auth from '../../server/routes/auth'
    import valid from '../system/validators'

    export default {
        data() {
            return {
                showSignInForm: true,
                showSignUpForm: false,
                model: {
                    email: '',
                    password: '',
                    rePassword: null
                }
            }
        },
        methods: {
            ...mapActions(['auth']),
            showForm(num){
                switch (num) {
                    case 1:
                        this.showSignInForm = true;
                        this.showSignUpForm = false;
                        break;
                    case 2:
                        this.showSignInForm = false;
                        this.showSignUpForm = true;
                        break;
                    default:
                        break;
                }
            },
            submit() {
                if (valid(this.model).isValid) {
                    this.auth(this.model)
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/style/auth.styl"
</style>