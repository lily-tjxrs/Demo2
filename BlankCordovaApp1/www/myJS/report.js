new Vue({
    el: 'body',
    data: {
        areaRoutes: "",
        catalogInfos: "",
        FX: ["向南", "向东", "向北", "向西"],
        extract: "",
        bumen: [],
        DL: [],
        XL: [],
        reportData: {
            selectedArea: "空港",
            selectedXL: "",
            selectedFX: "向南",
            selectedFW: "",
            selectedBM: "",
            selectedDL: "",
            selectedXLS: "",
            selectedDJ: "",
            inpuptMiaoshu: "",
            inputBeizhu: "",
            userID:"1",
            userName:"lily",
            companyNum:"1"
            //userID:window.user.UserID,
            //userName:window.user.trueName,
            //companyNum:window.user.companyID
        }
    },
    ready: function () {

        this.getRoute();
        this.getCatalogs();

    },
    methods: {
        getRoute: function () {
            //console.log("执行了getRoute");
            var self = this;
            //var url = "http://localhost:41141/api/Values?name="+this.User.name+"&pass="+this.User.pass;
            var baseUrl = "companyID=1";
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
        },

        getCatalogs: function () {
            //console.log("执行了getRoute");
            var self = this;
            //var url = "http://localhost:41141/api/Values?name="+this.User.name+"&pass="+this.User.pass;
            var baseUrl = "";
            var arg_map = {
                data: {},
                success: function (data) {
                    if (data != null) {
                        self.catalogInfos = data;
                        //console.log(JSON.stringify(self.catalogInfos));
                        for (var i = 0; i < self.catalogInfos.length; i++) {
                            var text = self.catalogInfos[i];
                            var tt = JSON.stringify(text);
                            var t = tt.split(',');
                            var t1 = t[0];
                            var t2 = t1.split(':');
                            var st = t2[1].indexOf('"') + 1;
                            var et = t2[1].lastIndexOf('"');
                            var t3 = t2[1].substring(st, et);
                            if (i == 0)
                                self.bumen.push(t3)
                            else if (self.bumen.indexOf(t3) == -1) {
                                self.bumen.push(t3);
                            }
                        }
                        //console.log(JSON.stringify(self.bumen));
                    }
                },
                error: function () {

                }
            };

            window.getAJAX1(baseUrl, arg_map.success, arg_map.error, arg_map.data);
        },
        log: function (str) {
            console.log(this.selectedArea);
            console.log(this.selectedXL);
        },
        findBumen: function (val, index) {
            //console.log(val,index)

            //var text =val;
            //var tt = JSON.stringify(text);
            //var t = tt.split(',');
            //var t1 = t[0];
            //var t2 = t1.split(':');
            //var st=t2[1].indexOf('"')+1;
            //var et=t2[1].lastIndexOf('"');
            //var t3 = t2[1].substring(st,et );
            //
            //if (this.bumen.indexOf(t3) == -1) {
            //    this.bumen.push(text);
            //}

            return this.bumen;
        },

        btnReport: function () {
            var self=this;
            //var url = "http://localhost:41141/api/Values";
            var url ="";
            var arg_map = {
                data :self.reportData,
                success : function (data) {
                    if (data != null) {
                        console.log(data);
                    }
                },
                error : function () {

                }
            };
            window.postAJAX(url,arg_map.success, arg_map.error,arg_map.data);
        },
        selectChangedBM:function(val){
            this.DL = [];
            for (var i = 0; i < this.catalogInfos.length; i++) {
                var text = this.catalogInfos[i];
                var tt = JSON.stringify(text);
                var t = tt.split(',');
                var t1 = t[0];
                var t2 = t1.split(':');
                var st = t2[1].indexOf('"') + 1;
                var et = t2[1].lastIndexOf('"');
                var t3 = t2[1].substring(st, et);
                if (t3 == val) {
                    var t11 = t[1];
                    var t21 = t11.split(':');
                    var st1 = t21[1].indexOf('"') + 1;
                    var et1 = t21[1].lastIndexOf('"');
                    var t31 = t21[1].substring(st1, et1);
                    if (i == 0)
                        this.DL.push(t31)
                    else if (this.DL.indexOf(t31) == -1) {
                        this.DL.push(t31);
                    }
                }

            }
        },

        selectChangedDL:function(val){
            this.XL = [];
            for (var i = 0; i < this.catalogInfos.length; i++) {
                var text = this.catalogInfos[i];
                var tt = JSON.stringify(text);
                var t = tt.split(',');
                var t1 = t[1];
                var t2 = t1.split(':');
                var st = t2[1].indexOf('"') + 1;
                var et = t2[1].lastIndexOf('"');
                var t3 = t2[1].substring(st, et);
                if (t3 == val) {
                    var t11 = t[2];
                    var t21 = t11.split(':');
                    var st1 = t21[1].indexOf('"') + 1;
                    var et1 = t21[1].lastIndexOf('"');
                    var t31 = t21[1].substring(st1, et1);
                    if (i == 0)
                        this.XL.push(t31)
                    else if (this.XL.indexOf(t31) == -1) {
                        this.XL.push(t31);
                    }
                }

            }
        }

    },
    watch: {
        reportData: {
            handler: function (val, oldVal) {
                //console.log(val);
                //console.log(val.selectedBM, oldVal.selectedBM);
                this.selectChangedBM(val.selectedBM);
this.selectChangedDL(val.selectedDL);
            },
            deep: true
        },
        selectedArea: function (val, oldVal) {
            console.log(val, oldVal);
        },
        selectedXL: function (val) {
            console.log(val);
            //return val==''?'aaa':val;
        },
        selectedBM: function (val, oldVal) {
            console.log(val, oldVal);
            this.DL = [];
            for (var i = 0; i < this.catalogInfos.length; i++) {
                var text = this.catalogInfos[i];
                var tt = JSON.stringify(text);
                var t = tt.split(',');
                var t1 = t[0];
                var t2 = t1.split(':');
                var st = t2[1].indexOf('"') + 1;
                var et = t2[1].lastIndexOf('"');
                var t3 = t2[1].substring(st, et);
                if (t3 == val) {
                    var t11 = t[1];
                    var t21 = t11.split(':');
                    var st1 = t21[1].indexOf('"') + 1;
                    var et1 = t21[1].lastIndexOf('"');
                    var t31 = t21[1].substring(st1, et1);
                    if (i == 0)
                        this.DL.push(t31)
                    else if (this.DL.indexOf(t31) == -1) {
                        this.DL.push(t31);
                    }
                }

            }
        },

        selectedDL: function (val, oldVal) {
            console.log(val, oldVal);
            this.XL = [];
            for (var i = 0; i < this.catalogInfos.length; i++) {
                var text = this.catalogInfos[i];
                var tt = JSON.stringify(text);
                var t = tt.split(',');
                var t1 = t[1];
                var t2 = t1.split(':');
                var st = t2[1].indexOf('"') + 1;
                var et = t2[1].lastIndexOf('"');
                var t3 = t2[1].substring(st, et);
                if (t3 == val) {
                    var t11 = t[2];
                    var t21 = t11.split(':');
                    var st1 = t21[1].indexOf('"') + 1;
                    var et1 = t21[1].lastIndexOf('"');
                    var t31 = t21[1].substring(st1, et1);
                    if (i == 0)
                        this.XL.push(t31)
                    else if (this.XL.indexOf(t31) == -1) {
                        this.XL.push(t31);
                    }
                }

            }
        }
    },
    filter: {
        extract: function (value, keyToExtract) {
            return value.map(function (item) {
                return item[keyToExtract]
            })
        }
    }

});


