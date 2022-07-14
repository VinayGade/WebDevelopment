function table(x){
    document.writeln("Table of "+x+" :")

    for(var a=1; a<=10; a++){
        document.writeln(x*a)
    }
}

function add(i,j){
    return (i+j)
}

function reverseNum(n){
    var reverse = 0
    while(n!=0) {
        var rem = n%10
        reverse = reverse*10 +rem
        n = parseInt(n/10)
    }
    return reverse
}

table(10)
var sum = add(10, 50)
var name = add("Vinay", "Gade")

document.writeln("10 + 50 ="+sum)
document.writeln("Concatenation ="+name)
document.writeln("reverse(523) ="+reverseNum(523))
