function validate ()
{
    var firstname = document.getElementById("first_name")
    var lastname = document.getElementById("last_name")
    var email = document.getElementById("email")
    var mobile = document.getElementById("mobile_number")
    var address = document.getElementById("address")
    var cardnumber = document.getElementById("card_number")
    var carddate = document.getElementById("card_date")
    var securitycode = document.getElementById("security_code")

    if(firstname.value.trim() =="" || lastname.value.trim()=="" || email.value.trim()=="" || mobile.value.trim()=="" || address.value.trim()==""||
    cardnumber.value.trim() =="" || carddate.value.trim() =="" || securitycode.value.trim() =="") 
    {
        alert("Please fill in all delivery and payment information") 
    }
    else
    {
        location.href="confirmation_page.html"
    }
}
/*This code validates all the information in the checkout page and checks if they are empty or not.
The trim() checks whether or not empty spaces have been left in place of characters*/
