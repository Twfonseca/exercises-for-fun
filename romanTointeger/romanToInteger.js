let one=1
let five=5
let ten=10
let fifty=50
let hundred=100
let fvHundred=500
let thousand=1000
let romanNumber=[one, five, ten, fifty,hundred,fvHundred,thousand]



let test1="I"
let test2="V"
let test3="X"
let test4="L"
let test5="C"
let test6="D"
let test7="M"


function romanConverter(romanNmb) {
if(romanNmb.length === 1 ){
    switch (romanNmb){
        case "I": console.log(romanNumber[0])
        break
        case "V": console.log(romanNumber[1])
        break
        case "X": console.log(romanNumber[2])
        break
        case "L": console.log(romanNumber[3])
        break
        case "C": console.log(romanNumber[4])
        break
        case "D": console.log(romanNumber[5])
        break
        case "M": console.log(romanNumber[6])
        break

    }
}


}

romanConverter(test1)
romanConverter(test1)
romanConverter(test2)
romanConverter(test3)
romanConverter(test4)
romanConverter(test5)
romanConverter(test6)
romanConverter(test7)


/* The idea is first check the length of the string if the length is === 1 just show in the console the integer equivalent to the roman number inserted otherwise get the values of each element and than calculate the total value and show the integer again
 */