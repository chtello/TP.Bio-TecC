let Br = document.getElementById("barra");
let Br2 = document.getElementById("barra2");
let Br3 = document.getElementById("barra3");
let Br4 = document.getElementById("barra4");
let L = ["G","T","A","C"];
let CaDG = ["A","T","G","","","","","","","","","","","","","T","G","A"];
let CaDG1 = ["","","","","","","","","","","","","","","","","",""];
let ARNm =["","","","","","","","","","","","","","","","","",""];
let CPol = [""];

const NewG = document.getElementById("CreateGe");
NewG.addEventListener("click", function ()  {
    for (let i = 0; i < CaDG.length; i++) {
        let LA = Math.floor(Math.random() * L.length);
        if (CaDG[i] == "") {     
            CaDG[i] = CaDG[i] + L[LA];
        }
    }
    return CaDG
});
const NewG1 = document.getElementById("CreateGe");
NewG1.addEventListener("click", function ()  {
        for ( j = 0,i = 0; j < CaDG.length, i < CaDG1.length; j++,i++) {
if (CaDG[i] == "A") {
    CaDG1[j] = CaDG1[j] + "T";
}
if (CaDG[i] == "T") {
    CaDG1[j] = CaDG1[j] + "A";
}
if (CaDG[i] == "G") {
    CaDG1[j] = CaDG1[j] + "C";
}
if (CaDG[i] == "C") {
    CaDG1[j] = CaDG1[j] + "G";
}
    }
    Br.value = CaDG;
    Br2.value = CaDG1;
    return CaDG1 
});
const TrARNm = document.getElementById("CreateTr");
TrARNm.addEventListener("click", function ()  {
        for ( j = 0,i = 0; j < CaDG1.length, i < ARNm.length; j++,i++) {
if (CaDG1[i] == "A") {
    ARNm[j] = ARNm[j] + "U";
}
if (CaDG1[i] == "T") {
    ARNm[j] = ARNm[j] + "A";
}
if (CaDG1[i] == "G") {
    ARNm[j] = ARNm[j] + "C";
}
if (CaDG1[i] == "C") {
    ARNm[j] = ARNm[j] + "G";
}
    }
    Br3.value = ARNm;
    return ARNm 
});
const TrPol = document.getElementById("CreatePo");
TrPol.addEventListener("click", function ()  {
    for ( i = 0,j = 1, h = 2; h < ARNm.length; i++) {
        if (ARNm[i] == "A" && ARNm[j] == "U" && ARNm[h] == "G") {
            CPol = CPol + "Met,"
        }  
        if (ARNm[i] == "A" && ARNm[j] == "U" && ARNm[h] == "A") {
            CPol = CPol + "Iso,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "U" && ARNm[h] == "C") {
            CPol = CPol + "Iso,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "U" && ARNm[h] == "U") {
            CPol = CPol + "Iso,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "U" && ARNm[h] == "U") {
            CPol = CPol + "Val,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "U" && ARNm[h] == "C") {
            CPol = CPol + "Val,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "U" && ARNm[h] == "A") {
            CPol = CPol + "Val,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "U" && ARNm[h] == "G") {
            CPol = CPol + "Val,"
        }    
        if (ARNm[i] == "A" && ARNm[j] == "C" && ARNm[h] == "U") {
            CPol = CPol + "Thr,"
        }  
        if (ARNm[i] == "A" && ARNm[j] == "C" && ARNm[h] == "C") {
            CPol = CPol + "Thr,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "C" && ARNm[h] == "A") {
            CPol = CPol + "Thr,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "C" && ARNm[h] == "G") {
            CPol = CPol + "Thr,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "A" && ARNm[h] == "U") {
            CPol = CPol + "Asn,"
        }
        if (ARNm[i] == "A" && ARNm[j] == "A" && ARNm[h] == "C") {
            CPol = CPol + "Asn,"
        }
        if (ARNm[i] == "A" && ARNm[j] == "A" && ARNm[h] == "A") {
            CPol = CPol + "Lys,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "A" && ARNm[h] == "G") {
            CPol = CPol + "Lys,"
        }  
        if (ARNm[i] == "A" && ARNm[j] == "G" && ARNm[h] == "U") {
            CPol = CPol + "Ser,"
        }  
        if (ARNm[i] == "A" && ARNm[j] == "G" && ARNm[h] == "C") {
            CPol = CPol + "Ser,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "G" && ARNm[h] == "A") {
            CPol = CPol + "Arg,"
        } 
        if (ARNm[i] == "A" && ARNm[j] == "G" && ARNm[h] == "G") {
            CPol = CPol + "Arg,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "C" && ARNm[h] == "U") {
            CPol = CPol + "Ala,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "C" && ARNm[h] == "C") {
            CPol = CPol + "Ala,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "C" && ARNm[h] == "A") {
            CPol = CPol + "Ala,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "C" && ARNm[h] == "G") {
            CPol = CPol + "Ala,"
        }  
        if (ARNm[i] == "G" && ARNm[j] == "A" && ARNm[h] == "U") {
            CPol = CPol + "Asp,"
        }  
        if (ARNm[i] == "G" && ARNm[j] == "A" && ARNm[h] == "C") {
            CPol = CPol + "Asp,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "A" && ARNm[h] == "A") {
            CPol = CPol + "Glu,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "A" && ARNm[h] == "G") {
            CPol = CPol + "Glu,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "G" && ARNm[h] == "U") {
            CPol = CPol + "Gly,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "G" && ARNm[h] == "C") {
            CPol = CPol + "Gly,"
        }
        if (ARNm[i] == "G" && ARNm[j] == "G" && ARNm[h] == "A") {
            CPol = CPol + "Gly,"
        } 
        if (ARNm[i] == "G" && ARNm[j] == "G" && ARNm[h] == "G") {
            CPol = CPol + "Gly,"
        }  
        if (ARNm[i] == "C" && ARNm[j] == "U" && ARNm[h] == "U") {
            CPol = CPol + "Leu,"
        }  
        if (ARNm[i] == "C" && ARNm[j] == "U" && ARNm[h] == "C") {
            CPol = CPol + "Leu,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "U" && ARNm[h] == "A") {
            CPol = CPol + "Leu,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "U" && ARNm[h] == "G") {
            CPol = CPol + "Leu,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "C" && ARNm[h] == "U") {
            CPol = CPol + "Pro,"
        }
        if (ARNm[i] == "C" && ARNm[j] == "C" && ARNm[h] == "C") {
            CPol = CPol + "Pro,"
        }
        if (ARNm[i] == "C" && ARNm[j] == "C" && ARNm[h] == "A") {
            CPol = CPol + "Pro,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "C" && ARNm[h] == "G") {
            CPol = CPol + "Pro,"
        }  
        if (ARNm[i] == "C" && ARNm[j] == "G" && ARNm[h] == "U") {
            CPol = CPol + "Arg,"
        }  
        if (ARNm[i] == "C" && ARNm[j] == "G" && ARNm[h] == "C") {
            CPol = CPol + "Arg,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "G" && ARNm[h] == "A") {
            CPol = CPol + "Arg,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "G" && ARNm[h] == "G") {
            CPol = CPol + "Arg,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "A" && ARNm[h] == "U") {
            CPol = CPol + "His,"
        }
        if (ARNm[i] == "C" && ARNm[j] == "A" && ARNm[h] == "C") {
            CPol = CPol + "His,"
        }
        if (ARNm[i] == "C" && ARNm[j] == "A" && ARNm[h] == "A") {
            CPol = CPol + "Gln,"
        } 
        if (ARNm[i] == "C" && ARNm[j] == "A" && ARNm[h] == "G") {
            CPol = CPol + "Gln,"
        }  
        if (ARNm[i] == "U" && ARNm[j] == "C" && ARNm[h] == "U") {
            CPol = CPol + "Ser,"
        }  
        if (ARNm[i] == "U" && ARNm[j] == "C" && ARNm[h] == "C") {
            CPol = CPol + "Ser,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "C" && ARNm[h] == "A") {
            CPol = CPol + "Ser,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "C" && ARNm[h] == "G") {
            CPol = CPol + "Ser,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "U" && ARNm[h] == "U") {
            CPol = CPol + "Phe,"
        }
        if (ARNm[i] == "U" && ARNm[j] == "U" && ARNm[h] == "C") {
            CPol = CPol + "Phe,"
        }
        if (ARNm[i] == "U" && ARNm[j] == "U" && ARNm[h] == "A") {
            CPol = CPol + "Leu,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "U" && ARNm[h] == "G") {
            CPol = CPol + "Leu,"
        }  
        if (ARNm[i] == "U" && ARNm[j] == "A" && ARNm[h] == "U") {
            CPol = CPol + "Try,"
        }  
        if (ARNm[i] == "U" && ARNm[j] == "A" && ARNm[h] == "C") {
            CPol = CPol + "Try,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "G" && ARNm[h] == "G") {
            CPol = CPol + "Try,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "G" && ARNm[h] == "U") {
            CPol = CPol + "Cys,"
        } 
        if (ARNm[i] == "U" && ARNm[j] == "G" && ARNm[h] == "C") {
            CPol = CPol + "Cys,"
        }
        if (ARNm[i] == "U" && ARNm[j] == "G" && ARNm[h] == "A") {
            CPol = CPol + "STOP"
        }
        i = i + 2;
        j = j + 3;
        h = h + 3;
    }
    Br4.value = CPol;
    return CPol 
});
const Delt = document.getElementById("Delte");
Delt.addEventListener("click", function ()  {
    ARNm =["","","","","","","","","","","","","","","","","",""];
    CaDG =["T","A","C","","","","","","","","","","","","","T","G","A"];
    CaDG1 = ["","","","","","","","","","","","","","","","","",""];
    CPol = [""];
    Br.value = "";
    Br2.value = "";
    Br3.value = "";
    Br4.value = "";
});
const MLH1 = ["A","T","C","C","G","C","C","C","A","T","C","T","C","G","G","C","C","C","A","C","C","A","A","A","G","T","G","C","T","G","G","G","A","T","T","A","C","A","G","G","C","G","T","G","A","G","C","C","A","C"];
const Hip = document.getElementById("CreateTr");
Hip.addEventListener("click", function ()  {
        for ( j = 0,i = 0; j < CaDG1.length, i < ARNm.length; j++,i++) {
if (CaDG1[i] == "A") {
    ARNm[j] = ARNm[j] + "U";
}
if (CaDG1[i] == "T") {
    ARNm[j] = ARNm[j] + "A";
}
if (CaDG1[i] == "G") {
    ARNm[j] = ARNm[j] + "C";
}
if (CaDG1[i] == "C") {
    ARNm[j] = ARNm[j] + "G";
}
    }
    Br3.value = ARNm;
    return ARNm 
});

