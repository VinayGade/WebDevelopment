/*
        1. Print first 5 even number
        2. Print table of 5

        for while do..while for
        */

/*
        For loop is used when number of iterations are known in advance.

        While loop is used when number of iterations are unknown. Entry controlled loop.

        Do While loop is exit controlled loop. iteration executes first time even though condition is false.
        */

document.write("Print table of 5");

for (var x = 1; x <= 10; x++) {
  document.write("<h2>" + x * 5 + "</h2>");
}

document.write("Print first 5 even numbers");

for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    document.write("<h2>" + i + "</h2>");
  }
}

document.write("Print first 5 odd numbers");

var a = 1;
while (a < 10) {
  document.write("<h2>" + a + "</h2>");
  a += 2;
}

document.write("<h2>Do While</h2>");

var j = 6;

// Do-while loop
do {
  
  document.write("<h3>JavaScript</h3>");
  j--;

} while (j>1);
