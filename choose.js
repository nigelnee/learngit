
function getSelectedText() {
    var b='';
    return function(){
        if (window.getSelection) {
        // getSelection() returns a Selection object.Support Chrome,Firefox,Opera,Safar,IE9+.
            var text=window.getSelection().toString();      //We can also use document.getSelection
            if(text!==''){

                if(b!==text){
                    alert(text); 
                    b=text;
                }
            }
            else{
                b='';
            }
        }

        else if (document.selection) {
            // fa q IE.
            var text=document.selection.createRange().text;
            if(text!==''){

                if(b!==text){
                    alert(text); 
                    b=text;
                }
            }
            else{
                b='';
            }
        }
        console.log("get ok!");
    }
} 


function bind(target,type,handler){
	if(target.addEventListener){
		target.addEventListener(type,handler,false);
	}
	else{
		target.attachEvent("on"+type,handler)
	}
	
	console.log("bind ok!");
}


function init(){
	bind(document.documentElement,"mouseup",getSelectedText());

	console.log("init ok!");
}



init();