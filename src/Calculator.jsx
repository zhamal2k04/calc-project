import React, { useState } from 'react';
import "./Style.css"

const Calculator = () => {
	const [displayValue, setDisplayValue] = useState('0');
	const [firstOperand, setFirstOperand] = useState(null);
	const [operator, setOperator] = useState(null);
	const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

	const inputDigit = (digit) => {
		if (waitingForSecondOperand) {
			setDisplayValue(String(digit));
			setWaitingForSecondOperand(false);
		} else {
			setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
		}
	};

	const inputDecimal = () => {
		if (!displayValue.includes('.')) {
			setDisplayValue(displayValue + '.');
			setWaitingForSecondOperand(false);
		}
	};

	const clearDisplay = () => {
		setDisplayValue('0');
		setWaitingForSecondOperand(false);
		setFirstOperand(null);
		setOperator(null);
	};

	const performOperation = (nextOperator) => {
		const inputValue = parseFloat(displayValue);

		if (firstOperand === null) {
			setFirstOperand(inputValue);
		} else if (operator) {
			const result = evaluate(firstOperand, inputValue, operator);
			setDisplayValue(String(result));
			setFirstOperand(result);
		}

		setWaitingForSecondOperand(true);
		setOperator(nextOperator);
	};

	const evaluate = (firstOperand, secondOperand, operator) => {
		switch (operator) {
			case '+':
				return firstOperand + secondOperand;
			case '-':
				return firstOperand - secondOperand;
			case '*':
				return firstOperand * secondOperand;
			case '/':
				return firstOperand / secondOperand;
			default:
				return secondOperand;
		}
	};

return (
		<div className='calculator'>

<input type="text" className="calculator-screen" value={displayValue} readOnly />

<div className="calculator-keys">
	<div className='strok-one'>
		<div className="number-one" onClick={clearDisplay}>AC</div>
		<div className="number-two" onClick={() => inputDigit(7)}>7</div>
		<div className="number-thre" onClick={() => inputDigit(4)}>4</div>
		<div className="number-for" onClick={() => inputDigit(1)}>1</div>
	</div>
	
	<div className='strok-two'>
		<div className="number-two-one" onClick={() => performOperation('/')}>+/-</div>
		<div className="number-two-two" onClick={() => inputDigit(8)}>8</div>
		<div className="number-two-thre" onClick={() => inputDigit(5)}>5</div>
		<div className="number-two-for" onClick={() => inputDigit(2)}>2</div>
	
	</div>

	<div className='strok-thre'>
		<div className="number-thre-one" onClick={() => performOperation('%')}>%</div>
		<div className="number-thre-two" onClick={() => inputDigit(9)}>9</div>
		<div className="number-thre-thre" onClick={() => inputDigit(6)}>6</div>
		<div className="number-thre-for" onClick={() => inputDigit(3)}>3</div>
	
	</div>

	<div className='strok-for'>
		<div className="number-for-one" onClick={() => performOperation('/')}>/</div>
		<div className="number-for-two" onClick={() => performOperation('*')}>*</div>
		<div className="number-for-thre" onClick={() => performOperation('-')}>-</div>
		<div className="number-for-for" onClick={() => performOperation('+')}>+</div>
	
	</div>
	
	</div>

	<div className="strok-buttom">
		<div className="one" onClick={() => inputDigit(0)}>0</div>
		<div className="two" onClick={inputDecimal}>.</div>
		<div className="thre" onClick={() => performOperation('+')}>=</div>
	</div>

		</div>
	)
}

export default Calculator;