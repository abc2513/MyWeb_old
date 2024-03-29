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
            li_text:['个人简介','个人网页(本网页)','校园智能交通系统△','Unity2D游戏△','C学生成绩管理系统','.net图书管理系统','实验数据处理App','实验数据处理网页','游戏开发社团网站△','java多阶拼图小游戏'],
            li_href:['./简介.html','./个人网页.html','./交通系统.html','./Unity2D游戏.html','./c学生成绩管理系统.html','./图书管理系统.html','./实验数据处理应用.html','./实验数据处理网页.html','./社团网站.html','./java多阶拼图小游戏.html'],
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
            li_text:['作品集','/','/',],
            li_href:['../computer/简介.html','#','#',],
        }
    }
})
const running= Vue.extend({
    template:`
    <span class="running">该程序/系统可提供访问 ：）</span>
    `,
    data(){
        return {
            
        }
    }
});
const not_running= Vue.extend({
    template:`
    <span class="not_running">该程序/系统已脱离部署 :（</span>
    `,
    data(){
        return {
            
        }
    }
})
Vue.component('left_menu',left_menu)
Vue.component('top_menu',top_menu)
Vue.component('running',running)
Vue.component('not_running',not_running)
new Vue({
    el:'#root',
})
