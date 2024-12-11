// Додати значення до дисплея
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Очистити дисплей
function clearResult() {
    document.getElementById('result').value = '';
}

// Видалити останній символ
function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

// Обчислити результат
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const expression = resultField.value;
        // Перевірка на ділення на нуль
        if (expression.includes('/0')) {
            alert('Error: Division by zero!');
            clearResult();
        } else {
            const result = eval(expression);
            resultField.value = result;
        }
    } catch (error) {
        alert('Invalid expression!');
        clearResult();
    }
}
