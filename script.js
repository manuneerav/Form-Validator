
var form,username,mail,password,re_password;
username = document.getElementById('id1');
mail = document.getElementById('id2');
password = document.getElementById('id3');
re_password = document.getElementById('id4');
form = document.getElementById('form');




function error(input,message){
    var formcontrol = input.parentElement;
    formcontrol.className = 'Form error';
    document.querySelector('small').textContent = message;
   
}

function IS_required(){
    return 'This field is required';
}

function IS_min(){
    return 'Minimum 6 letters are required';
}

function success(input){
    var formcontrol = input.parentElement;
    formcontrol.className = 'Form success';    
}

 function check_username(input,min){
     
     
     if(input.value.trim() === ''){
         error(input,IS_required());
         
     }else if(input.value.length < min){
         error(input,IS_min());
         
     }else{
         success(input);
     }

}

function check_password_match(input1,input2){
    
    
    if(input1.value == ''){
        error(input1,IS_required());
        
    }else if(input1.value != input2.value){
        error(input2,'Passwords do not match');
        
    }else{
        
        success(input2);
    }
}

function check_email(input){
var regex;
    
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(input.value.trim() == ''){
        error(input,IS_required());
    
    }else if(input.value.match(regex)){
       success(input);
    }else{
        error(input,'Email is not valid');
    }
    
}




    
    
        
        
form.addEventListener('submit',(event)=>{
    event.preventDefault();
            
        check_username(username,4);
        check_username(password,4);
        check_email(mail);
        check_password_match(password,re_password);
            
});
        
        
    