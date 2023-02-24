const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function () {
    const newGeneratedPin = generatePinFunction();
    const generatedPinField = document.getElementById('generate-pin-field');
    generatedPinField.value = newGeneratedPin;
})

const calculator = document.getElementById('calculator');
calculator.addEventListener('click', function (event) {
    const typedNumberField = document.getElementById('my-pin-field');
    const prevTypedNumberField = typedNumberField.value;
    const calculatorBtn = event.target.innerText;
    if (isNaN(calculatorBtn)) {
        if (calculatorBtn === '<') {
            const digits = prevTypedNumberField.split('');
            digits.pop();
            const newDigits = digits.join('');
            typedNumberField.value = newDigits;
        }
        else if (calculatorBtn === 'C') {
            typedNumberField.value = '';
        }
    }
    else {
        const newTypedNumber = prevTypedNumberField + calculatorBtn;
        typedNumberField.value = newTypedNumber;
    }
})


// Validation and 3 try left
const failureNotify = document.getElementById('failure');
const successNotify = document.getElementById('success');
const failureEmpty = document.getElementById('failure-empty');

// Notification element are display none is default value set
failureNotify.style.display = 'none';
successNotify.style.display = 'none';
failureEmpty.style.display = 'none';

// How many trial left is select and get inner text
const trialCount = document.getElementById('trial-count');
const trialValue = parseInt(trialCount.innerText);

// Submit button select and store clicking value
const submitBtn = document.getElementById('submit-btn');
let submitBtnClickCount = 0;

// event handeler set on submit button
submitBtn.addEventListener('click', function () {
    // submit button counting and calculate how many try left
    submitBtnClickCount++;
    trialCount.innerText = trialValue - submitBtnClickCount;

    // 0 try left then my pin field and submit button are disabled
    if (submitBtnClickCount === 3) {
        matchingValidation();
        typedPinElement.disabled = true;
        typedPinElement.style.backgroundColor = '#495BC3';
        typedPinElement.value = "Your 3 trial is gone Now it's Disabled";
        submitBtn.disabled = true;
    }
    
    else{
        matchingValidation();
    }
})