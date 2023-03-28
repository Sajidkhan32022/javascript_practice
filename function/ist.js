let temperatures, sum, avg_temperatures = '';
let i ;

temperatures = [28, 27, 25, 25, 27, 26, 27, 28, 27, 25, 25, 27, 26, 27, 28, 27, 25, 25, 27, 26, 27];
let temperatures_lenght = temperatures.length;
let temperaturesSum = 0;

for ( i = 0 ; i < temperatures_lenght; i++){

    temperaturesSum = temperaturesSum + temperatures[i];
}

avg_temperatures = temperaturesSum / temperatures_lenght;
console.log(avg_temperatures)

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19];
temperatures_lenght = temperatures.length;
temperaturesSum = 0;

for(i = 0; i < temperatures_lenght; i++){
    temperaturesSum = temperaturesSum + temperatures[i];
}

avg_temperatures = temperaturesSum / temperatures_lenght;
console.log(avg_temperatures)

/*___________________________write function for the above code_____________________*/

function avgTemperatures (){
    let index, avg_Tem, temSum = 0;
    let size = Tem.length;
    for(index = 0; index < size; index ++){
        temSum = temSum + Tem[index]
    }
    avg_Tem = temSum / size;
    return avg_Tem;
}

let Tem = [28, 27, 25, 25, 27, 26, 27, 28, 27, 25, 25, 27, 26, 27, 28, 27, 25, 25, 27, 26, 27];
console.log(avgTemperatures ())

Tem = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19];
console.log(avgTemperatures ())

