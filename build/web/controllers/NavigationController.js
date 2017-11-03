/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app1 = angular.module("ngCustomerDirectory",["ngRoute"]);
app1.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/Home.html"
        })
        .when("/aboutUs",{
            templateUrl: "views/AboutUs.html"
        })
        .when("/searchUserType",{
            controller: 'SearchByType',
            templateUrl: "views/SearchByType.html"
        })
        .when("/contactUs",{
            controller: 'ContactUs',
            templateUrl: "views/ContactUs.html"
        })
        .otherwise({redirectTo: '/'});
});
