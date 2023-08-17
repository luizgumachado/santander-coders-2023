/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/
const enviarEmail = require('./envia-email.js');

const listaEmails = [
    {
        email: 'luizgustavo.gumachado@gmail.com',
        nome: 'Luiz Gustavo',
        aceiteComunicacoes: false
    },
    {
        email: 'luizgustavo.gumachado2@gmail.com',
        nome: 'Luiz',
        aceiteComunicacoes: true
    },
    {
        email: 'luizgustavo.gumachado3@gmail.com',
        nome: 'Gustavo',
        aceiteComunicacoes: true
    },
    {
        email: 'luizgustavo.gumachado4@gmail.com',
        nome: 'Gustavo Luiz',
        aceiteComunicacoes: false
    }
];


const verificaData = () => {
    const data = new Date();

    if(getDay(data) === 1) {
        return true;
    } else {
        return false;
    }
}

const montarEmail = (cliente) => {
    return  `Olá, ${cliente.nome}! Nós, da CarStore, verificamos que você visitou nosso site no último mês. Caso esteja buscando por uma opção de carro 0km para comprar, pode ser válido verificar a nossa lista de carros mais vendidos nos últimos 30 dias:\n\n1. Fiat Strada\n2. Hyundai HB20\n3. Chevrolet Onix\n4. Chevrolet Onix Plus\n5. Fiat Mobi\n6. Volkswagen Gol\n7. Chevrolet Tracker\n8. Volkswagen T-Cross\n\nAlém desses modelos, também tem lançamentos no estoque:\n\n1. Nova Chevrolet Montana\n2. Novo Nissan Sentra\n3. Ford F-150\n4. Novo Honda ZR-V\n5. Novo Honda CR-V\n\nPara saber sobre condições de aquisição desses veículos, entre em contato com a nossa equipe através do número (00)90000-0000.\n\nAgradecemos pela confiança!`
}

const enviaEmail = (listaEmails) => {
    if(verificaData === true){
        for(let i = 0; i < listaEmails.length; i++) {
            if(listaEmails[i].aceiteComunicacoes === true) {
                enviarEmail(
                    listaEmails[i].email,
                    'Novidades do mês CarStore',
                    montarEmail(listaEmails[i])
                );
            }
        }
    }
}

enviaEmail(listaEmails);