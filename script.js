
var username,mail,password,re_password;
username = document.getElementById('id1');
mail = document.getElementById('id2');
password = document.getElementById('id3');
re_password = document.getElementById('id4');

dom = {
    Username:'id1',
    Mail:'id2',
    Password:'id3',
    Re_Password'id4'
}




function error(ID,message){
    document.getElementById(ID).textContent = message;
    
}

function IS_required(){
    return 'This field is required';
}

function IS_min(){
    return 'Minimum 6 letters are required'
}

function success(field){
    field.focus();
    
}

 function check_username(input,min){
     
     
     if(input.value === ''){
         error(dom.Username,IS_required());
         
     }else if(input.value.length<= min){
         error(dom.Username,IS_min())
         
     }else{
         success(dom.Username);
     }

}

function check_password_match(input1,input2){
    
    
    if(input1.value. === ''){
        error(dom.Password,IS_required());
        
    }else if(input1.value.length <= min) {
        error(dom.Password,IS_min());

    }else if(input1.value != input2.value){
        error(dom.Re_Password,'Passwords do not match')
        
    }else{
        success(password);
        success(re_password);
    }
    
}

function check_gmail(input){
var regex,Mail;
    Mail = 'id2'
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(input.value.match(regex)){
       success(mail);
    }else{
        error(Mail,'Email is not valid');
    }
    
}




    
    function setupEventListeners() {
        
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        
        function ctrlADDItem(){
            check_username(username,4);
            check_password_match(password,re_password,6);
            check_gmail(mail);
            
        }
    };
        
        
    