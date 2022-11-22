Vue.config.productionTip = false
const left_menu = Vue.extend({
    template:`
    <ul class="left_menu">
        <li v-for="(p,index) of li_text" :key="index">
            <a :href=li_href[index]>{{li_text[index]}}</a>
        </li>
    </ul>
    `,
    data(){
        return {
            li_text:['个人简介','物联网项目','Unity2D游戏','安卓应用','前端网页',],
            li_href:['./简介.html','./交通系统.html','./Unity2D游戏.html','./安卓应用.html','./前端网页.html'],
        }
    },
})
const top_menu = Vue.extend({
    template:`
    <div class="top_menu_div">
        <ul class="top_menu">
            <li v-for="(p,index) of li_text" :key="index">
                <a :href=li_href[index]>{{li_text[index]}}</a>
            </li>
        </ul>
    </div>
    `,
    data(){
        return {
            li_text:['/','/','/',],
            li_href:['../computer/简介.html','../computer/简介.html','../computer/简介.html',],
        }
    }
})
Vue.component('left_menu',left_menu)
Vue.component('top_menu',top_menu)

new Vue({
    el:'#root',
})