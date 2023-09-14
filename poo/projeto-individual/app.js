class Interface {
    static #adicionar;
    static #editar;
    static #form;
    static #catalogo;
    static #select;
    static #inputLivro;
    static #inputFogão;
    static #inputGeladeira;
    static #inputMicroondas;
    static #inputJogo;

    constructor() {}

    static init() {
        this.#adicionar = document.getElementById("adicionar");
        this.#editar = document.getElementById("editar");
        this.#form = document.querySelector("form");
        this.#catalogo = document.getElementById("catalogo");
        this.#select = document.getElementById('select');
        this.#inputLivro = document.getElementById('input-livro');
        this.#inputFogão = document.getElementById('input-fogão');
        this.#inputGeladeira = document.getElementById('input-geladeira');
        this.#inputMicroondas = document.getElementById('input-microondas');
        this.#inputJogo = document.getElementById('input-jogo');

        this.#adicionar.addEventListener("click", () => {
            this.#form.reset();
            if(this.#form.style.display === 'none') {
             this.#form.style.display = 'flex';
            } else {
             this.#form.style.display = 'none';
            }

            this.#closeInput();
         });

        this.#select.addEventListener('change', () => {
            this.#closeInput();

            switch(this.#select.value) {
                case 'livro':
                    if(this.#inputLivro.style.display === 'block') {
                        this.#inputLivro.style.display = 'none';
                    } else {
                        this.#inputLivro.style.display = 'block';
                    }
                    break;
                
                case 'fogão':
                    if(this.#inputFogão.style.display === 'block') {
                        this.#inputFogão.style.display = 'none';
                    } else {
                        this.#inputFogão.style.display = 'block';
                    }
                    break;

                case 'geladeira':
                    if(this.#inputGeladeira.style.display === 'block') {
                        this.#inputGeladeira.style.display = 'none';
                    } else {
                        this.#inputGeladeira.style.display = 'block';
                    }
                    break;
                
                    case 'microondas':
                        if(this.#inputMicroondas.style.display === 'block') {
                            this.#inputMicroondas.style.display = 'none';
                        } else {
                            this.#inputMicroondas.style.display = 'block';
                        }
                        break;

                    case 'jogo':
                        if(this.#inputJogo.style.display === 'block') {
                            this.#inputJogo.style.display = 'none';
                        } else {
                            this.#inputJogo.style.display = 'block';
                        }
                        break;
            }
        });
    }

    static #closeInput() {
        const inputWrapper = document.getElementById('input-wrapper');
            let inputs = inputWrapper.getElementsByClassName("inner-input");

            inputWrapper.style.display = 'flex';

            for(let i = 0; i < inputs.length; i++) {
                let child = inputs[i];
                child.style.display = 'none';
            }
    }

    static update() {

        this.#catalogo.innerHTML = "";

       for(let i = 0; i < Estoque.produtos.length; i++) {
        let produto = Estoque.produtos[i];

        const cardProduto = document.createElement("div");
        cardProduto.className = "card-produto";

        const nomeProduto = document.createElement("h3");
        nomeProduto.innerHTML = `${produto.nome}`;

        const quantidadeProduto = document.createElement("span");
        quantidadeProduto.innerHTML = `Quantidade: ${produto.quantidade}`;

        const preçoProduto = document.createElement("span");
        preçoProduto.innerHTML = `Preço: ${produto.preço}`;

        const informaçõesProduto = document.createElement("div");
        informaçõesProduto.className = "info-produto";

        informaçõesProduto.append(nomeProduto, quantidadeProduto, preçoProduto);

        const ações = document.createElement("div");
        ações.className = "ações";

        const botãoEditar = document.createElement("button");
        botãoEditar.innerHTML = "Editar";
        botãoEditar.addEventListener("click", () => {Interface.editarProduto(i)});

        const botãoExcluir = document.createElement("button");
        botãoExcluir.innerHTML = "Excluir";
        botãoExcluir.addEventListener("click", () => {Interface.excluirProduto(i)});

        ações.append(botãoEditar, botãoExcluir);

        cardProduto.append(informaçõesProduto, ações);
        this.#catalogo.appendChild(cardProduto);
       } 
    }

    static refreshForms() {
        this.#editar.style.display = "none";
        this.#adicionar.style.display = "inline-block";
        this.#select.style.display = "block";
        this.#form.reset();
        this.#form.style.display = "none";
    }

    static adicionarLivro() {
        const validation = [];
        const nome = document.getElementById("nome").value;
        validation.push(nome);
        const quantidade = document.getElementById("quantidade").value;
        validation.push(quantidade);
        const preço = document.getElementById("preço").value;
        validation.push(preço);
        const genero = document.getElementById("livro-genero").value;
        validation.push(genero);
        const autor = document.getElementById("autor").value;
        validation.push(autor);
        const ano = document.getElementById("ano").value;
        validation.push(ano);
        const faixaEtaria = document.getElementById("livro-faixa-etaria").value;
        validation.push(faixaEtaria);

        for(let i = 0; i < validation.length; i++) {
            if(validation[i] === "") {
                alert("Insira todos os dados para adicionar!");
                return;
            }
        }

        const livro = new Livro(nome, quantidade, preço, genero, autor, ano, faixaEtaria);
        Estoque.adicionarProduto(livro);
        this.#form.reset();
        this.#closeInput();
        this.#form.style.display = 'none';
        this.update();
    }

    static adicionarGeladeira() {
        const validation = [];
        const nome = document.getElementById("nome").value;
        validation.push(nome);
        const quantidade = document.getElementById("quantidade").value;
        validation.push(quantidade);
        const preço = document.getElementById("preço").value;
        validation.push(preço);
        const voltagem = document.getElementById("voltagem-geladeira").value;
        validation.push(voltagem);
        const capacidade = document.getElementById("capacidade-geladeira").value;
        validation.push(capacidade);
        const frostFree = document.getElementById("frostFree").value;
        validation.push(frostFree);

        for(let i = 0; i < validation.length; i++) {
            if(validation[i] === "") {
                alert("Insira todos os dados para adicionar!");
                return;
            }
        }

        const geladeira = new Geladeira(nome, quantidade, preço, voltagem, capacidade, frostFree);
        Estoque.adicionarProduto(geladeira);
        this.#form.reset();
        this.#closeInput();
        this.#form.style.display = 'none';
        this.update();
    }

    static adicionarFogão() {
        const validation = [];
        const nome = document.getElementById("nome").value;
        validation.push(nome);
        const quantidade = document.getElementById("quantidade").value;
        validation.push(quantidade);
        const preço = document.getElementById("preço").value;
        validation.push(preço);
        const voltagem = document.getElementById("voltagem-fogão").value;
        validation.push(voltagem);
        const capacidade = document.getElementById("capacidade-fogão").value;
        validation.push(capacidade);
        const numBocas = document.getElementById("num-bocas").value;
        validation.push(numBocas);

        for(let i = 0; i < validation.length; i++) {
            if(validation[i] === "") {
                alert("Insira todos os dados para adicionar!");
                return;
            }
        }

        const fogão = new Fogão(nome, quantidade, preço, voltagem, capacidade, numBocas);
        Estoque.adicionarProduto(fogão);
        this.#form.reset();
        this.#closeInput();
        this.#form.style.display = 'none';
        this.update();
    }

    static adicionarMicroondas() {
        const validation = [];
        const nome = document.getElementById("nome").value;
        validation.push(nome);
        const quantidade = document.getElementById("quantidade").value;
        validation.push(quantidade);
        const preço = document.getElementById("preço").value;
        validation.push(preço);
        const voltagem = document.getElementById("voltagem-microondas").value;
        validation.push(voltagem);
        const capacidade = document.getElementById("capacidade-microondas").value;
        validation.push(capacidade);
        const potência = document.getElementById("potência-microondas").value;
        validation.push(potência);

        for(let i = 0; i < validation.length; i++) {
            if(validation[i] === "") {
                alert("Insira todos os dados para adicionar!");
                return;
            }
        }

        const microondas = new Microondas(nome, quantidade, preço, voltagem, capacidade, potência);
        Estoque.adicionarProduto(microondas);
        this.#form.reset();
        this.#closeInput();
        this.#form.style.display = 'none';
        this.update();
    }

    static adicionarJogo() {
        const validation = [];
        const nome = document.getElementById("nome").value;
        validation.push(nome);
        const quantidade = document.getElementById("quantidade").value;
        validation.push(quantidade);
        const preço = document.getElementById("preço").value;
        validation.push(preço);
        const faixaEtaria = document.getElementById("jogo-faixa-etaria").value;
        validation.push(faixaEtaria);
        const genero = document.getElementById("jogo-genero").value;
        validation.push(genero);

        for(let i = 0; i < validation.length; i++) {
            if(validation[i] === "") {
                alert("Insira todos os dados para adicionar!");
                return;
            }
        }

        const jogo = new Jogo(nome, quantidade, preço, faixaEtaria, genero);
        Estoque.adicionarProduto(jogo);
        this.#form.reset();
        this.#closeInput();
        this.#form.style.display = 'none';
        this.update();
    }

    static editarProduto(ID) {
        let produtoID = ID;
        this.#form.reset();
        this.#form.style.display = "flex";
        this.#adicionar.style.display = "none";
        this.#select.style.display = "none";
        this.#editar.style.display = "inline-block";
        this.#editar.addEventListener("click", function() {
            const validation = [];
            const novoNome = document.getElementById('nome').value;
            validation.push(novoNome);
            const novaQtd = document.getElementById('quantidade').value;
            validation.push(novaQtd);
            const novoPreço = document.getElementById('preço').value;
            validation.push(novoPreço);

            for(let i = 0; i < validation.length; i++) {
                if(validation[i] === "") {
                    alert("Insira todos os dados para editar!");
                    return;
                }
            }
            Estoque.editarProduto(produtoID, novoNome, novaQtd, novoPreço);
            Interface.refreshForms();
            Interface.update();
        });
    }

    static excluirProduto(ID) {
        let produtoID = ID;
        Estoque.excluirProduto(produtoID);
    }
}

class Estoque {
    static #produtos = [];

    constructor() {}

    static adicionarProduto(produto) {
        this.#produtos.push(produto);
    }

    static editarProduto(ID, nome, quantidade, preço) {
        console.log(this.#produtos[ID])
        console.log(nome, quantidade, preço)
        this.#produtos[ID].editar(nome, quantidade, preço);
        console.log(this.#produtos[ID])
        console.log(this.#produtos);
    }

    static excluirProduto(ID) {
        this.#produtos.splice((ID - 1), 1);
        Interface.refreshForms();
        Interface.update();
    }

    static get produtos() {
        return this.#produtos;
    }
}

class Produto {
    #nome;
    #quantidade;
    #preço;

    constructor(nome, quantidade, preço) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preço = preço; 
    }

    editar(nome, quantidade, preço) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preço = preço;
    }

    get nome() {
        return this.#nome;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get preço() {
        return this.#preço;
    }
}

class Livro extends Produto {
    #gênero;
    #autor;
    #anoPublicação;
    #faixaEtaria;

    constructor(nome, quantidade, preço, gênero, autor, ano, faixaEtaria) {
        super(nome, quantidade, preço);
        this.#gênero = gênero;
        this.#autor = autor;
        this.#anoPublicação = ano;
        this.#faixaEtaria = faixaEtaria;
    }
}

class Eletrodoméstico extends Produto {
    #voltagem;
    #capacidade;

    constructor(nome, quantidade, preço, voltagem, capacidade) {
        super(nome, quantidade, preço);
        this.#voltagem = voltagem;
        this.#capacidade = capacidade;
    }
}

class Fogão extends Eletrodoméstico {
    #numBocas;

    constructor(nome, quantidade, preço, voltagem, capacidade, numBocas) {
        super(nome, quantidade, preço, voltagem, capacidade);
        this.#numBocas = numBocas;
    }
}

class Geladeira extends Eletrodoméstico {
    #frostFree;     //booleano - true se for frostFree

    constructor(nome, quantidade, preço, voltagem, capacidade, frostFree) {
        super(nome, quantidade, preço, voltagem, capacidade);
        this.#frostFree = frostFree;
    }
}

class Microondas extends Eletrodoméstico {
    #potência;

    constructor(nome, quantidade, preço, voltagem, capacidade, potência) {
        super(nome, quantidade, preço, voltagem, capacidade);
        this.#potência = potência;
    }
}

class Brinquedo extends Produto {
    #faixaEtaria;

    constructor(nome, quantidade, preço, faixaEtaria) {
        super(nome, quantidade, preço);
        this.#faixaEtaria = faixaEtaria;
    }
}

class Jogo extends Brinquedo {
    #gênero;

    constructor(nome, quantidade, preço, faixaEtaria, gênero) {
        super(nome, quantidade, preço, faixaEtaria);
        this.#gênero = gênero;
    }
}

Interface.init();