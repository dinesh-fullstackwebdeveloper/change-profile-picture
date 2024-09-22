const image = document.querySelector("img");
const inputfile = document.querySelector("input");
inputfile.addEventListener('change', ()=>{
    image.src = URL.createObjectURL(inputfile.files[0]);
});