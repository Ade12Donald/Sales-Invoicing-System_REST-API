let cleanCustomer = (rawFullName, rawEmail, rawPhone) =>{

    let name = rawFullName.trim().toLowerCase().split(" "); 
    for(let i = 0; i<name.length; i++){
        name[i] = name[i][0].toUpperCase()+ name[i].slice(1);
    }
    name = name.join(',').replaceAll(',', " ");

    let email = rawEmail.trim().toLowerCase();
    if((email.includes("@")) && (email.endsWith(".com"))){
        
    }else{
        return {error: "Invalid email address"}
    }

    let maskedPhone = rawPhone.trim().replace(" ", "")
    if(maskedPhone.length === 11){
        maskedPhone=maskedPhone.slice(0,-4).padEnd(11,"*")
    }else{
        return {error: "Invalid Phone Number"}
    }
   return {name,email,maskedPhone}
}

console.log(cleanCustomer("ADEboWale dOnald", "backendlogicgmail.com", "07045732889"))