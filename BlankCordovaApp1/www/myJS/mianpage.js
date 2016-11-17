/**
 * Created by ´ó´ó on 2016-09-26.
 */

new Vue({

    // element to mount to
    el: 'body',

    // initial data
    data: {
        curUser:"123"
    },
    ready:function(){
        this.curUser=window.user.trueName;
        console.log(window.user);
    },
    methods: {
        reportClick:function(){
            window.location.href='report.html';
        }
    }
})
