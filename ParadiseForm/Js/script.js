// Nessa parte nós definimos os preços dos cardápios e os adicionais

const precosCardapio = {
    "Jantar Completo": 80,   
    "Coquetel Premium": 60,   
    "Coquetel Básico": 40,   
};

const precosAdicionais = {
    "dj": 500,               
    "mesaDeDoces": 300,     
    "decoracao": 700,        
};

// Nessa parte nós usamos o botão para pegar os dados

function visualizardados() {
    
    const nome = document.getElementById("txNome").value;
    const email = document.getElementById("email").value;
    const convidados = parseInt(document.getElementById("convidados").value);

// o Parse Int trasforma em número
    
    let cardapioSelecionado = document.querySelector('input[name="cardapio"]:checked');
    let precoCardapio = 0;

// Usamos o querySelector para encontrar o elemento que está sendo marcado dentro do input cardapio
// esse vai ser o cardapio que ele escolheu



    if (cardapioSelecionado) {
        precoCardapio = precosCardapio[cardapioSelecionado.value] * convidados;
    }

    // o precoCardapio começa valendo zero, ai se um cardapio for selecionado, o preco será multiplicado pelo num de convidados

    let precoAdicionais = 0;
    const adicionais = document.querySelectorAll('input[name="adicionais[]"]:checked');
    adicionais.forEach(adicional => {
        precoAdicionais += precosAdicionais[adicional.value];
    });

    // No caso dos adicionais o QuerySelectorAll tem a mesma função, ele vai capturar todos (All) os adicionais que estão sendo marcados
    // o forEach é como se fosse um vetor, aqui para cada adicional selecionado, o código percorre a lista de elementos com .forEach()
    // e a cada item, adiciona o preço correspondente ao total de adicionais. 

    const estiloMusica = document.getElementById("estiloMusica").value;

    const tipoDecoracao = document.getElementById("decoracao").value;

    // o tipo de musica e decoração não estão sendo usados diretamente no cálculo,
    // mas talvez seja útil para enviar pra algum BD se fosse o caso.

    const total = precoCardapio + precoAdicionais;

    // Aqui o total é calculado pelo preço do cardapio que foi multiplicado pelo num de convidados + os adicionais marcados

    document.getElementById("pSoma").innerHTML = `Total: R$ ${total.toFixed(2)}`;

    // Aqui ele exibe, o innerHTML para aparecer na página, no 'pSoma' que é o espaço que a gente colocou para isso
    // O ${total.toFixed(2)} é uma forma de formatar o total para exibi-lo com exatamente duas casas decimais
}