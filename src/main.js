import "./assets/scss/all.scss";
import "/node_modules/bootstrap/dist/js/bootstrap.min";
import "./assets/font/fonts.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import * as bootstrap from "bootstrap";
import $ from 'jquery';
// 引入 VeeValidate 元件跟功能
import {
    Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules  from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { date, currency } from '../src/components/methods/filter';

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
});
setLocale('zh_TW');
window.$ = $;
const app = createApp(App);
app.config.globalProperties.$filters = {
    date,
    currency,
};

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);

app.component('VeeField', Field);
app.component('VeeForm', Form);
app.component('ErrorMessage', ErrorMessage)

app.mount("#app");