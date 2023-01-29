function Question2()
{
    var height = parseFloat(document.getElementById("Height").value);
    height = height/100;
    var weight = parseFloat(document.getElementById("Weight").value);
    var bmi = weight/(height*height);
    var typ;
    if (bmi < 18){
    typ = "Underweight";
    }
    else if (bmi >= 18 && bmi<25){
    typ = "Normal";
    } 
    else if (bmi >= 25 && bmi<30){
    typ = "Overweight";
    }
    else{
    typ = "Obese";
    }
    document.getElementById("Score").innerHTML=bmi;
    document.getElementById("Type").innerHTML=typ;
}
