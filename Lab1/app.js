
function createTodo(){
    //get the text    
    var text2 = $("#txtText").val();
    //to read use -  .val();

    //create an li and add the text
    var li = '<li>'+ text2 +' <button>Done!</button></li>';

    //add the li to the ul
    $("#pending").append(li);   

    //clear the input field
    $("#txtText").val("");
    //to write, use -  .val("");

    //set the focus to the field

    $("#txtText").focus();

}

function init(){    
    
    //hook events
    //ENG: when a click happens on elem btnSave, exec createTodo fn
    $("#btnSave").click(createTodo);
    $("#txtText").keypress(function (e){
        //console.log(e);

        if(e.key == "Enter"){
            createTodo();
        }

    });

}
window.onload = init;