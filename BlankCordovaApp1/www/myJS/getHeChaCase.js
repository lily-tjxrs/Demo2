new Vue({
    el: 'body',
    data: {},

    ready: function () {

        this.getRoute();
        this.getCatalogs();

    },
    methods: {
        getHechaCase:function()
        {
            var self = this;
            //var url = "http://localhost:41141/api/Values?name="+this.User.name+"&pass="+this.User.pass;
            var baseUrl = "userID=1&startTime=1&endTime=1";
            var arg_map = {
                data: {},
                success: function (data) {
                    if (data != null) {
                        window.routeInfos = data;
                        //console.log(data)
                        //console.log(JSON.parse(data));
                        self.areaRoutes = data;
                        //console.log(JSON.stringify(self.areaRoutes));
                    }
                },
                error: function () {

                }
            };
            //window.getAJAX(baseUrl,null, arg_map.error,arg_map.data);
            window.getAJAX1(baseUrl, arg_map.success, arg_map.error, arg_map.data);
        }
    }

});
