/**
 * Created by ´ó´ó on 2016-09-21.
 */
punlicFuntion=(function () {
    //---------------- BEGIN MODULE SCOPE VARIABLES --------------

    //userID,userName, companyID,dept;
    var st="";

    window.user = {
        UserID: "",
        UserName: "",
        trueName: "",
        dept: "",
        companyID: "",
        status: "false"
    };

    window.routeInfos=[
        {
            lineName:"",
            lineNum:"",
            lineArea:"",
            lineSection:""
        }
    ];

    window.getHechaCaseInfos=[
        itemID="",
    ];

    var baseurl = "http://localhost:41141/api/Values?";
    var getSetting = {
        get_type: "GET",
        get_dataType: "JSON",
    };
    window.getAJAX = function (p_url, p_error) {
        var myUrl = baseurl + p_url;
        $.ajax({
            type: getSetting.get_type,
            url: myUrl,
            dataType: getSetting.get_dataType,
            success: function (data) {
                if (data != null) {
                    window.user = data;
                    window.user.status = "true";
                    console.log(window.user);
                }
            },
            error: p_error
        })
    };

    window.getAJAX1 = function (p_url, p_success, p_error, p_data) {
        var myUrl = baseurl + p_url;

        $.ajax({
            type: getSetting.get_type,
            url: myUrl,
            dataType: getSetting.get_dataType,
            success: p_success,
            error: p_error
        })

    };
    window.postAJAX = function (p_url, p_success, p_error, p_data) {
        var myUrl = baseurl + p_url;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: myUrl,
            dataType: "JSON",
            data:JSON.stringify(p_data),
            success: p_success,
            error: p_error
        })

    };
})()

