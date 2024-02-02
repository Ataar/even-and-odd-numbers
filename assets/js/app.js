const checkEvenOdd = () => {
    let inputValue = document.getElementById("myInput").value;
    let resultElement = document.getElementById("myResult");
    if (inputValue === "") {
        showPopup("Please enter a value first");
    }
    if(inputValue==='')
    {
        resultElement.innerText = '';
            return;
    }
    if (isNaN(inputValue)) {
        resultElement.innerText = "Please enter a valid number not text type.";
        resultElement.style.color = 'red'
        setTimeout(() => {
            document.getElementById("myInput").value ='';
        },200);
        setTimeout(() => {
            resultElement.innerHTML = ''   
            
        },1500);
    } else {
        
        Swal.fire({
            text: ('Done Successfully'),
            layout: 'center',
            timer:3000,
        })
        .then(()=>{
            
            resultElement.innerText = `${inputValue} is ${inputValue % 2 === 0 ? "even" : "odd"}.`;
            document.getElementById('myInput').value = '';
            resultElement.style.color = 'black'
          })
     
    }
}



check.addEventListener('click', checkEvenOdd);


function showPopup(message) {
    let popupMessage = document.getElementById("popupMessage");
    popupMessage.innerText = message;
    popupMessage.classList.add("show-popup");

    // Hide the pop-up after 2 seconds (adjust as needed)
    setTimeout(() => {
        popupMessage.classList.remove("show-popup");
    },1500);
}