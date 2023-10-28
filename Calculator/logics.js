function AddInput(value)
{
   document.getElementById('inp').value+=value
}
function onAc()
{
    document.getElementById('inp').value=''
}

function calculateResult() {
    const displayValue = document.getElementById('inp').value;
    try {
        const result = eval(displayValue);
        document.getElementById('inp').value = result;
    } catch (error) {
        document.getElementById('inp').value = 'Error';
    }
}