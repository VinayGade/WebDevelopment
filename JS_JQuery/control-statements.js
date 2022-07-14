/*
1. Find whether a number is even or odd.
2. Find whether a number is +, -, 0.
3. Find if a number is positive or even.
*/

document.write("<h1>if.. else control statements</h1>")

var x = 6
if(x%2 == 0)
    document.write("<h3>Even number</h3>")
else
    document.write("<h3>Odd number</h3>")

var y = -6
if(y<0)
    document.write("<h3>Negative</h3>")
else if(y>0)
    document.write("<h3>Positive</h3>")
else
    document.write("<h3>ZERO</h3>")

var z = 8
if(z > 0)
    if(z % 2 == 0)
        document.write("<h3>Positive Even Number</h3>")
    
else 
    document.write("<h3>Invalid Number</h3>")


document.write("<h3> Switch Case</h3>")

/*
Find day of week by accepting number...
*/

var day = 10

switch(day){

    case 1:
        document.write("<h3> Sunday</h3>")
        break
            
    case 2:
        document.write("<h3> Monday</h3>")
        break
                    
    case 3:
        document.write("<h3> Tuesday</h3>")
        break

    case 4:
        document.write("<h3> Wednesday</h3>")
        break
                            
    case 5:
        document.write("<h3> Thursday</h3>")
        break

    case 6:
        document.write("<h3> Friday</h3>")
        break

    case 7:
        document.write("<h3> Saturday</h3>")
        break

    default:
        document.writeln("<h3> Sunday</h3>")
        break
}
