let cleanCustomer = (rawFullName, rawEmail, rawPhone) =>{

    let customerName = rawFullName.trim().toLowerCase().split(" "); 
    for(let i = 0; i<customerName.length; i++){
        customerName[i] = customerName[i][0].toUpperCase()+ customerName[i].slice(1);
    }
    customerName = customerName.join(',').replaceAll(',', " ");

    let customerEmail = rawEmail.trim().toLowerCase();
    if((customerEmail.includes("@")) && (customerEmail.endsWith(".com"))){
        
    }else{
        throw new Error("Error: Invalid Email Address")
    }

    let maskedPhone = rawPhone.replaceAll(" ", "")
    if(maskedPhone.length === 11){
        maskedPhone=maskedPhone.slice(-4).padStart(11,"*")
    }else{
        throw new Error("Error: Invalid Phone Number")
    }
   return {customerName,customerEmail,maskedPhone}
}

let generateInvoice = (rawFullName, rawEmail, rawPhone, price1, price2, price3)=>{
    
    let customer;
    try{
        customer= cleanCustomer(rawFullName, rawEmail, rawPhone);
    }catch(error){
        return error.message
    }

    let subtotal = Number((price1+ price2+ price3).toFixed(2));
    let vat = Number(((7.5*subtotal)/100).toFixed(2));
    let total = vat +subtotal;

    let random= Math.floor(Math.random()*1000000).toString().padStart(6,"0")
    let invoiceNumber= "INV-" + random;

    return {invoiceNumber, ...customer, subtotal, vat, total} ;
}

let generateSalesReport = invoices =>{
    if(invoices.length === 0){
        return {error: "No invoices	to report on"}
    }
    let highValueInvoices = invoices.filter(values => values.total>5000);
    let highValueCustomers = highValueInvoices.map(values =>values.customerName)
    let totalRevenue = invoices.reduce((acc,curr)=>acc+curr.total,0)
    let topInvoice= invoices.reduce((acc,curr)=>{if(curr.total>=acc.total){acc=curr}; return acc})
    let averageInvoice =Number((totalRevenue/(invoices.length)).toFixed(2))

    return {totalRevenue, averageInvoice, highValueCustomers, topInvoice}
}
