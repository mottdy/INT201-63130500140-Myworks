calculate_BMI = (weight, height) =>{
    weight = weight*0.453592;
    height = height*0.0254;
    let bodyMassIndex = weight/(height*height);
    return bodyMassIndex;
}

console.log(`Your BMI is ${calculate_BMI(36.5,39)}`);

calculate_BMI(36.5,39)