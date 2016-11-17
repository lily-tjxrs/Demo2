/**
 * Created by ´ó´ó on 2016-09-21.
 */
new Vue({

    // element to mount to
    el: 'body',

    // initial data
    data: {
        users: [],
        User: {
            name: 'pda1',
            pass: 'null'
        }
    },
    ready:function(){
    //console.log(window.pb)
    //  console.log(pb.show)  ;
    //    console.log(window.user)
},
    methods: {
        loginUser: function () {
            var self=this;
            var url = "http://localhost:41141/api/Values?name="+this.User.name+"&pass="+this.User.pass;
            var baseUrl="name="+this.User.name+"&pass="+this.User.pass;
            var arg_map = {
                data : {},
                success : function ( data ) {
                    if (data != null) {
                        //console.log(data);
                        window.user = data;
                        window.user.status = "true";
                        //punlicFuntion.st="123";
                        window.location.href='mianpage.html';
                        //console.log(window.user);
                        //console.log(punlicFuntion.st);
                    }
                },
                error : function () {

                }
            };
           //window.getAJAX(baseUrl,null, arg_map.error,arg_map.data);
           window.getAJAX1(baseUrl,arg_map.success, arg_map.error,arg_map.data);
            //console.log(window.user);

            //console.log(results);
            //$.ajax({
            //    type: "GET",
            //    url: url,
            //    dataType: "JSON",
            //    //data:JSON.stringify(self.loginUser),
            //    success: function (data) {
            //        //console.log("123");
            //        //console.log(JSON.stringify(data));
            //       var results=data
            //        //console.log(results);
            //       window.user=results;
            //        //console.log(publicClass.userID);
            //        console.log(window.user);
            //        console.log(window.user.UserID);
            //        //window.location.href='index.html';
            //    },
            //    error: function () {
            //        console.log("error");
            //
            //    }
            //})

        },
        removeUser: function (user) {
            new Firebase(baseURL + 'users/' + user.id).remove()
        }
    }
})
