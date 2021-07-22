names_of_the_students =[];

function submit (){
    var display_student_array =[];

    for (var i =1; i <= 4;i++){
        var name = document.getElementById("name_of_the_student_"+i).value;

        names_of_the_students.push(name)
    }

    var len =names_of_the_students.length;

    for (var j =0; j < len; j++){
        display_student_array.push(names_of_the_students[j]);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var NOCOMMA = display_student_array.join(" ");
      
    document.getElementById("display_name_without_commas").innerHTML=NOCOMMA;

   document.getElementById("submit_button").style.display="none";

   document.getElementById("sort_button").style.display="inline-block";    
}

function sorting (){
    names_of_the_students.sort();

    var display=[];
    
    var l=names_of_the_students.length

    for (var k =0; k < l; k++){
        display.push(names_of_the_students[k]);
    }

    var NO = display.join(" ");
      
    document.getElementById("display_name_without_commas").innerHTML=NO;

}    