// take_score = (score) => {
//     if (score >= 90) {
//         return "A+";
//     }
//     else if (score >= 80) {
//         return "B";
//     }
//     else if (score >= 70) {
//         return "C";
//     }
//     else if (score >= 60) {
//         return "D";
//     }
//     else {
//         return "F";
//     }
// }

// document.getElementById("submit").addEventListener("click", () => {
//     const score = document.getElementById("score").value;
//     const result = take_score(Number(score));
//     document.getElementById("result").innerText = `Your grade is: ${result}`;
// });

document.getElementById("name").addEventListener( "name", (event) => {
    const name = event.target.value.toupperCase();
    document.getElementById("result").innerText = name;
});

document.getElementById("submit").addEventListener("click", () => { 
    const name = document.getElementById("name").value;
    let spelledName = "";

    for (let i = 0; i < name.length; i++) {
        spelledName += name[i] + " ";
    }   
    document.getElementById("result").innerText = spelledName.trim();
}
);