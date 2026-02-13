function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.display.focus();
        },

        pressionaEnter(){
            this.display.addEventListener('keydown', e => {
               if (e.keyCode === 13){
                e.preventDefault();
                this.realizaConta();
               }
            });
        },

        realizaConta(){
             let conta = this.display.value;
             try {
                conta = eval(conta);
                if (conta === null || conta === undefined || Number.isNaN(conta)) {
                    alert('conta inválida');
                    return;
                }
                this.display.value = String(conta);
             }catch(e){
                alert('conta invalida');
                return;
             }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUM(){
            this.display.value = this.display.value.slice(0, -1);
            this.display.focus();
        },
        
        
        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                
                if(el.classList.contains('btn-del')){
                    this.apagaUM();
                }

                if(el.classList.contains('btn-eq')){
                   this.realizaConta(); 
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();