<template>
    <div class="pagesNotFound">
        <img src="../assets/img/logo_black.png" alt="">

        <div class="output">
            <h3>Страницу транклютировали</h3>
            <h3>три раза</h3>
            <div class="Ku">
                <a  @click="showKu()">Ку</a>
            </div>
            <transition name="ku-animation">
                <div class="Ku" v-show="KuShowTwo">
                    <a  @click="showKu()">Ку</a>
                </div>
            </transition>

            <transition name="ku-animation">
                <div class="Ku" v-show="KuShowLast">
                <router-link tag="a" to="/vuejs">Ку</router-link>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                KuShowTwo: false,
                KuShowLast: false

            }
        },
        methods: {
            showKu() {
                if (!this.KuShowTwo) {
                    this.KuShowTwo = true
                }
                else {
                    this.KuShowLast = true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/style/404.styl";
</style>