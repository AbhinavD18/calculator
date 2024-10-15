let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(ele => {
    ele.addEventListener('click', (e) => {
        console.log('Button clicked:', e.target.innerHTML); // Debugging line
        if (e.target.innerHTML === '=') {
           
                string = eval(string);
                input.value = string;
            
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
