// 1.Калькулятор стоимости товаров: Создайте функцию, которая принимает цену товара и количество единиц, а затем возвращает общую стоимость.

function calculation(price, count) {
    return price * count;
}

console.log("Total: " + calculation(2, 5));

 // 2. Проверка на четность: Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.

 function even(a) {
    return a % 2 == 0 ? true : false;
}

console.log("Even number: " + even(5));
console.log("Even number: " + even(4));

// 3. Реверс строки: Напишите функцию, которая принимает строку и возвращает ее в обратном порядке (reverse использовать нельзя).

function reverse(line) {
    let rev = "";
    for(let i = line.length - 1; i >= 0; i--) {
        rev += line[i];
    }
    return rev;
}

console.log("Reverse line: " + reverse("Hello, World!"));

// 4. Конвертер температуры: Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.

function celsToFahren(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log("Fahrenheit: " + celsToFahren(28));