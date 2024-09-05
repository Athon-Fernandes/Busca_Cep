//criaar a dunção para coletar o CEP

function Coletor(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//cunção para consumir API via CEP
async function Dados(input){
let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(Response => Response.json())
console.log(dados)
ExbirDados(dados)
}

//função inserir dados na tela 

function ExbirDados(dados){
    document.querySelector('.Estado').value = dados.uf
    document.querySelector('.Cidade').value = dados.localidade
    document.querySelector('.Endereco').value = dados.logradouro
    document.querySelector('.DDD').value = dados.ddd
    console.log(dados)
}