function validate()
{
    var FirstName = document.forms["RSform"]["firstname"].value;
    var LastName = document.forms["RSform"]["lastname"].value;
    var Gender = document.forms["RSform"]["gender"].selectedIndex;
    var Email = document.forms["RSform"]["email"].value;
    var Contact = document.forms["RSform"]["contactno"].value;
    var Address = document.forms["RSform"]["address"].value;
    var DOB = document.forms["RSform"]["DOB"].value;
    var Skills = document.forms["RSform"]["skills"].selectedIndex;

    //number pattern, special character pattern, email pattern, contact pattern
    var isNumber = /^[0-9]+$/;
    const specialCharacterRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-|=]+/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^0[0-9]{9}$/;

    //first name validation
    if(FirstName=="")
    {
        alert("Please provide your First Name!");
        document.RSform.firstname.focus();
        return false;
    }
    if(FirstName.match(isNumber) || FirstName.match(specialCharacterRegex))
    {
        alert("Please enter your first name correctly!");
        document.RSform.firstname.focus();
        return false;
    }

    //last name validation
    if(LastName=="")
    {
        alert("Please provide your Last Name!");
        document.RSform.lastname.focus();
        return false;
    }
    if(LastName.match(isNumber) || LastName.match(specialCharacterRegex))
    {
        alert("Please enter your last name correctly!");
        document.RSform.firstname.focus();
        return false;
    }

    //gender validation
    if(Gender=="0")
    {
        alert("Please select a gender category!");
        document.RSform.gender.focus();
        return false;
    }

    //email address valdiation
    if(Email=="")
    {
        alert("Please enter your email address!");
        document.RSform.email.focus();
        return false;
    }
    if(!Email.match(emailRegex))
    {
        alert("Please enter your email correctly!");
        document.RSform.email.focus();
        return false;
    }

    //contact validation
    if(Contact=="")
    {
        alert("Please enter your contact number!");
        document.RSform.contactno.focus();
        return false;
    }
    if(!Contact.match(phonePattern))
    {
        alert("Please enter your contact number properly!");
        document.RSform.contactno.focus();
        return false;
    }

    //Address validation
    if(Address=="")
    {
        alert("Please enter your address!");
        document.RSform.address.focus();
        return false;
    }

    //DOB validation
    if(DOB=="")
    {
        alert("Please select your date of birth!");
        document.RSform.DOB.focus();
        return false;
    }

    //skills validation
    if(Skills=="0")
    {
        alert("Please select your skill!");
        document.RSform.skills.focus();
        return false;
    }

    return true;
}