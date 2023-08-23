let Br = document.getElementById("barra");
let L = ["G","T","A"];
let CaDG = ["A","U","G","","","","","","","","","","","","","U","A","A"];


const NewG = document.getElementById("Create");
NewG.addEventListener("click", function ()  {
    for (let i = 0; i < CaDG.length; i++) {
        let LA = Math.floor(Math.random() * L.length);
        if (CaDG[i] == "") {     
            CaDG[i] = CaDG[i] + L[LA];
        }
        
    }
    Br.value = CaDG;
    return CaDG
});

