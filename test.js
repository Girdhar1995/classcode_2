// // Ques - Give the output for the following code:

// class abcd {
//     constructor(a) {
//         this.b = a + 1;
//     }
    
//     def = () => {
//         console.log(this.b);
//     }
    
//     ghi() {
//         console.log(this.b);
//     }
    
//     // this.def = () => {
//     //     console.log(this.b);
//     // }
// }


// const obj = new abcd(2)

// obj.def() //=> undefined
// obj.ghi() // => 3

function x(){
    let a =7;
    function y(){
        console.log(a)
    }
    if(true){
        console.log(a)
    }
    y();
}
x();

