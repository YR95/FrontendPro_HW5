// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

first = prompt("Input first number", "10");
second = prompt("Input second number", "10");
third = prompt("Input third number", "10");
result = (parseFloat(first) + parseFloat(second) + parseFloat(third)) / 3;
alert("Result: " + result);
