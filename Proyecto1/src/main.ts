function calculate(operation: string): void {
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultadoElemento = document.getElementById('result');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultadoElemento!.textContent = 'Por favor, ingresa números válidos.';
      return;
    }
  
    let resultado: number | string = 0;
  
    if (operation === '+') resultado = num1 + num2;
    else if (operation === '-') resultado = num1 - num2;
    else if (operation === '*') resultado = num1 * num2;
    else if (operation === '/') resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
  
    resultadoElemento!.textContent = `Resultado: ${resultado}`;
  
    num1Input.value = '';
    num2Input.value = '';
  }
  
  