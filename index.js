const controls=document.querySelectorAll(".controls>input");
// console.log(controls);
// function handleUpdate(){
//     console.log(this.value);
// }
controls.forEach(control=>control.addEventListener("change",function(event){
    // console.log(this.value);
    // console.log(this.dataset); data-sizing:px
    const suffix=this.dataset.sizing || '';//because it give object of data- attrib
    // console.log(suffix);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}))
controls.forEach(control=>control.addEventListener("mousemove",function(event){
    // console.log(this.value);
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}))