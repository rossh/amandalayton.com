$(document).ready(function(){var d=Boolean;var b=1500;var a=3000;$("#HomePage").delay(a).fadeOut(b,function(){$(this).remove()});$("#HomePage").click(function(){$(this).delay(a).stop(true,true).fadeOut(b);d=true;c();$("#HomePage").unbind("click")});function c(){if(d=true){$("#HomePage").fadeOut(b,function(){$(this).remove()})}}});