$(document).ready(function(){$(".menu").click(function(n){n.stopPropagation(),$("#main_nav").toggleClass("active")}),$(document).click(function(){$("#main_nav").removeClass("active")})});