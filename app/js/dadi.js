document.addEventListener("DOMContentLoaded", function() {
    var vittoriaConsecutivaA = 0,
    vittoriaConsecutivaB = 0,
    tiroA = 0,
    tiroB = 0,
    valoreA = 0,
    valoreB = 0;
    var res = document.querySelector("#res");
    
        
    var playerA = document.querySelector ("#dadoA button");
    playerA.addEventListener("click", function () {
        this.parentElement.classList.add("muovi");
        var tiro = 0;
        if (tiroA <= tiroB) {
            tiroA++;
            valoreA = Math.round(Math.random() * (6 - 1) + 1);
            checkStatus();
        }
        res.innerHTML = valoreA + ' : ' + valoreB;
        
    }, false);
    
    
    var playerB = document.querySelector ("#dadoB button");
    playerB.addEventListener("click", function () {
        this.parentElement.classList.add("muovi");
        var tiro = 0;
        if (tiroB <= tiroA) {
            tiroB++;
            valoreB = Math.round(Math.random() * (6 - 1) + 1);
            checkStatus();
        }
        res.innerHTML = valoreA + ' : ' + valoreB;
    }, false);
    function getValue() {
        return Math.round(Math.random() * (6 - 1) + 1);
    }

    function checkStatus() {
        if (tiroA == tiroB) {
            console.log(valoreA);
            console.log(valoreB);
            res.innerHTML = 0 + ' : ' + 0;
            if (valoreA > valoreB) {
                vittoriaConsecutivaA ++;
                vittoriaConsecutivaB = 0;
                if (vittoriaConsecutivaA != 2) {
                    console.log("Ha vinto A");
                } else {
                    console.log("Ha vinto B");
                    vittoriaConsecutivaB ++;
                    vittoriaConsecutivaA = 0;   
                }
            }
            else if (valoreA < valoreB) {
                vittoriaConsecutivaB ++;
                vittoriaConsecutivaA = 0;
                if (vittoriaConsecutivaB != 2) {
                    console.log("Ha vinto B");
                } else {
                    console.log("Ha vinto A");
                    vittoriaConsecutivaA ++;
                    vittoriaConsecutivaB = 0;   
                }
            }
            else if (valoreA == valoreB){
                console.log("Non ha vinto nessuno");
                vittoriaConsecutivaA = 0;
                vittoriaConsecutivaB = 0;
            }
        }
        var elements = document.getElementsByClassName("box");
        for (var index = 0; index < elements.length; index++) {
            const element = elements[index];
            setTimeout(function() {
                element.classList.remove("muovi");            
            }, 1000);
        }
        }
});