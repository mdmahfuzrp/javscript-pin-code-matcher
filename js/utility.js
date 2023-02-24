// Random pin generator
function generatePinFunction() {

    const floatPin = Math.random() * 10000
    const generatedPin = Math.round(floatPin);

    if (generatedPin >= 1000) {
        return generatedPin;
    }
    else {
        return generatePinFunction();
    }
}





// generate pin field and my pin field are select here
const generatedPinElement = document.getElementById('generate-pin-field');
const typedPinElement = document.getElementById('my-pin-field');

// Pin matching validation checking function
function matchingValidation() {
    const generatedPin = generatedPinElement.value;
    const typedPin = typedPinElement.value;

    // After click the submit button all input field are empty
    function doEmpty(){
        generatedPinElement.value = '';
        typedPinElement.value = '';
    }

    if (generatedPin === '' || typedPin === '') {
        failureEmpty.style.display = 'block';
        failureNotify.style.display = 'none';
        successNotify.style.display = 'none';
    }
    else if (generatedPin === typedPin) {
        successNotify.style.display = 'block';
        failureNotify.style.display = 'none';
        failureEmpty.style.display = 'none';
        doEmpty();
    }
    else {
        failureNotify.style.display = 'block';
        successNotify.style.display = 'none';
        failureEmpty.style.display = 'none';
        doEmpty();
    }
}