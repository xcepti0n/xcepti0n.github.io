
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
        typeSpeed: 20,
        backSpeed: 1,
        backDelay: 300,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){},
        resetCallback: function() {}
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


