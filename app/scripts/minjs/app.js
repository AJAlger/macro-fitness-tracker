var app=angular.module("NutritionTracker",["ngMaterial","ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(t,a){a.otherwise("/"),t.state("index",{url:"/",templateUrl:"views/_landing.html"}).state("data",{url:"/macronutrients",templateUrl:"views/_dataAdd.html",controller:"dataAdd"}).state("summary",{url:"/summary",templateUrl:"views/_dataGraphs.html"})}]),app.controller("menuBar",["$scope","$mdSidenav",function(t,a){t.items=[{label:"Introduction",location:"index"},{label:"Macronutrients",location:"data"},{label:"Summary",location:"summary"}],t.openMenu=function(){a("left").toggle()}}]),app.controller("dataAdd",["$scope","MacroCalculation",function(t,a){t.macros=a.macros(),t.totals=a.totals()}]),app.controller("dataGraphs",["$scope",function(){}]),app.factory("MacroCalculation",function(){var t=[{type:"Protein",amount:null,multiplier:4,tip:"Calories per gram of protein"},{type:"Carbohydrate",amount:null,multiplier:4,tip:"Calories per gram of carbohydrate"},{type:"Fat",amount:null,multiplier:9,tip:"Calories per gram of fat"}],a=function(){return t},r=function(){for(var a=0,r=0,o=t.length;o>r;r++)a+=t[r].amount*t[r].multiplier;return a},o=function(){return r};return{macros:a,totals:o}}),app.directive("MacroGraphs",["$scope",function(){}]);