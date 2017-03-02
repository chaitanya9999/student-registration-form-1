/**
 * 
 */
        var firstName; //first name
        var lastName; //last name
        var phoneno; 
        var password; 
        var conformpassword; 
        var email;
        var dob;
        var gender; 
        var address;
        function getFirstName() {   //when this function is called, I retrieve the values and display them
            return document.getElementById("first_name").value;
        }
        function getSecondName()    {
            return document.getElementById("last_name").value;
        }
        function getPhoneNo() {
           return document.getElementById("phone_no").value;
        } 
        function getPassWord() {
            return document.getElementById("password").value;
         } 
        function getConformPassword() {
            return document.getElementById("conform_password").value;
         } 
        function getEmail(){
        return document.getElementById("Email_Id").value;
        }
        function getDOB() {
        return document.getElementById("Date_Of_Birth").value;
        }
       function getGender(){
    	   return document.querySelector('input[name = "gender"]:checked').value;
       }
       function getAddress()    {
           return document.getElementById("address").value;
       }
            function display()  {
            firstName = getFirstName();
            lastName = getSecondName();
            phoneno = getPhoneNo();
            password = getPassWord();
            conformpassword = getConformPassword();
            email = getEmail();
            dob = getDOB();
            gender = getGender();
            address = getAddress();
          
         // window.alert(firstName + lastName);
            document.getElementById("form").innerHTML = firstName+ "</br>" + lastName + "</br>" + phoneno +"</br>"+password+"</br>" + conformpassword+"</br>"+email+"</br>"+dob+"</br>"+gender+"</br>"+address;
        }
