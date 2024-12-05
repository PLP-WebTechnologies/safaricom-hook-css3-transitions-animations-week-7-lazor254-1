function calulateArea (length, width){
    return length * width;
}

let globalMessage = "overal variable!";

function scopeDemo(){
    let localMessage = "inner variable!"
    console.log(globalMessage);
    console.log(localMessage);

    // both of them are accessible
}

// toggling css class with javascript
const toggleBtn = document.getElementById('toggleBtn');
const animatedBox = document.getElementById('rotate');

toggleBtn.addEventListener('click', () => {
    animatedBox.classList.toggle('rotate');
});

//calculate the area function

const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    const length = prompt('Weka lenght mzee:');
    const width = prompt('sasa weka width:');

    if (!isNaN(length) && !isNaN(width)){
        const area = calulateArea(parseFloat(length), parseFloat(width));
        alert(`Maesabu inasema area ni: ${area}`);
    } else {
        alert('weka number valid bana!');
    }
});

scopeDemo();