/**
 * Created by ´ó´ó on 2016-09-13.
 */
var app = new Vue({

    // element to mount to
    el: 'body',

    // initial data
    data: {
        users: [],
        newUser: {
            name: '123',
            pass: '456'
        }
    },
    methods: {
        addUser: function () {
            var self=this;
                //alert(JSON.stringify(self.newUser));

            //var url = "http://10.1.113.218:41141/api/Values";
            var url = "http://ajhb.tjftz.cn/UserLogin.ashx?method=login&user=ajhb&pwd=123456";
            $.ajax({
                type: "GET",
                url: url,
                timeout: 5000,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                //data: JSON.stringify(self.newUser),
                //beforeSend: beforeSend,
                //complete: complete,
                success: function (data) {
                    alert(JSON.stringify(data)) + "123";
                    self.gridDatas = data;
                },
                fail: function () { alert("fail") }
            });

                //$.ajax({
                //    type: "POST",
                //    contentType: "application/json; charset=utf-8",
                //    url: url,
                //    dataType: "JSON",
                //    //data:self.newUser.serialize(),
                //    data:JSON.stringify(self.newUser),
                //    //data:self.newUser,

                //        success: function (data) {
                //            alert(JSON.stringify(data))+"123";
                //        //console.log(data);
                //        self.gridDatas=data;
                //    },
                //    error: function () {
                //        alert(Error.toString());

                //    }
                //})

        },
        removeUser: function (user) {
            new Firebase(baseURL + 'users/' + user.id).remove()
        }
    }
})