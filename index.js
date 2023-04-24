function cal() {
    let salary=parseInt(document.getElementById("sal").value)
    if (salary== ""){
        alert("Enter salary")
    }else{

        let base=parseInt(document.getElementById("sal").value)
        document.getElementById("base").innerHTML=base

        let nssf=""
        if (base<18000){
            nssf=0.06*base
        }else{
            nssf=1080
        }
        document.getElementById("nssf1").innerHTML=nssf
        let nssf1=nssf*2
        document.getElementById("nssf2").innerHTML=nssf1

        let taxableincome=base-nssf
        console.log(taxableincome)
        let payee=""
        if (taxableincome<=24000){
            payee= 0
        }else if(taxableincome>24000 && taxableincome<=32333){
            payee=((0.1*24000)+((taxableincome-24000)*0.25))-2400
        }else if(taxableincome>32333){
            payee=(((taxableincome-32333)*0.3)+(0.1*24000)+(8333*0.25))-2400
        }else{
            alert("Enter valid amount of salary")

        }
        document.getElementById("payee").innerHTML=payee

        let nhif=""
        if (base>0 && base<=5999){
            nhif=150
        }else if(base>=6000 && base <=7999){
            nhif=300
        }else if(base>=8000 && base<=11999){
            nhif=400
        }
        else if(base>=12000 && base<=14999){
            nhif=500
        
        }else if(base>=15000 && base<=19999){
            nhif=600
        
        }else if(base>=20000 && base<=24999){
            nhif=750
        
        }else if(base>=25000 && base<=29999){
            nhif=850
        
        }else if(base>=30000 && base<=34999){
            nhif=900
        
        }else if(base>=35000 && base<=39999){
            nhif=950
        
        }else if(base>=40000 && base<=44999){
            nhif=1000
        
        }else if(base>=45000 && base<=49999){
            nhif=1100
        
        }else if(base>=50000 && base<=59999){
            nhif=1200
        
        }else if(base>=60000 && base<=69999){
            nhif=1300
        
        }else if(base>=70000 && base<=79999){
            nhif=1400

        }else if(base>=80000 && base<=89999){
            nhif=1500

        }else if(base>=90000 && base<=99999){
            nhif=1600

        }else if(base>=100000){
            nhif=1700

        }else{
            alert("Enter valid amount of salary")
        }
        document.getElementById("nhif").innerHTML=nhif

    let netpay=taxableincome-payee-nhif
    document.getElementById("net-sal").innerHTML=netpay
    }
}   