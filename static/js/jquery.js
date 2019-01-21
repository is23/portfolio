$(document).ready(function(){

    $("button").click(function(){
        console.log($(this).text());
        if($(this).text() == "Projects") {
            $(".skills-section").hide();
            $(".work-section").hide();
            $(".project-section").show();
        }
        else if($(this).text() == "Work Experience") {
            $(".skills-section").hide();
            $(".project-section").hide();
            $(".work-section").show();
        }
        else if($(this).text() == "Skills") {
            $(".work-section").hide();
            $(".project-section").hide();
            $(".skills-section").show();
        }


    });

    $("").click(function() {
        $(this).hide();
        alert($(this).text());
    });

});
