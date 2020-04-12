
$(document).ready(function(){
  var show_btn=$('#dance_div');
  // var show_btn=$('.show-modal');
  //$("#testmodal").modal('show');
  
    show_btn.click(function(){
       $('#myModal').modal('show');
  })
});

$(function(){

    $("#typed-hobbies").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-hobbies-strings'),
        typeSpeed: 30,
        backDelay: 300,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});
function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }



