const nome = "Josimar Dantas";
let nome2 = "Josimar Dantas";
let pessoaDefault ={
    nome: "Josimar Dantas",
    idade: "28",
    trabalho: "Suporte"
}
let nomes=["Josimar","Edilson","Denys"];
let pessoas=[];


function alterarNome(){
    nome2 = "Josimar Dantas";
    console.log("Valor alterado");
    console.log(nome2);
}
function recebeEalteraNome(novoNome){
    nome2= novoNome;
    console.log("Valor alterado");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

console.log(nomes);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
  //  nome: "João",
    //idade: "35",
    //trabalho: "UX/UI"
//});



//recebeEalteraNome("José Maria");
//recebeEalteraNome("Maria José");
//alterarNome();