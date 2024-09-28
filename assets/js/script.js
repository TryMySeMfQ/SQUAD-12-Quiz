document.addEventListener("DOMContentLoaded", () => {
const perguntas = [
    {
        nivel: "Fácil",
        pergunta: "1. Qual das alternativas não é um sistema operacional?",
        opcoes: {
            a: "Tecno",
            b: "iOS",
            c: "Windows",
            d: "Linux"
        },
        correta: "a"
    },
    {
        nivel: "Fácil",
        pergunta: "2. O que é HARDWARE?",
        opcoes: {
            a: "São os programas baixados pela internet.",
            b: "São as embalagens dos eletrônicos.",
            c: "É uma marca de componentes eletrônicos.",
            d: "São os componentes físicos de eletrônicos."
        },
        correta: "d"
    },
    {
        nivel: "Fácil",
        pergunta: "3. O que é SOFTWARE?",
        opcoes: {
            a: "São arquivos e programas de dispositivos eletrônicos.",
            b: "São todos os componentes maleáveis em um computador.",
            c: "São os fios e conexões que estão na placa-mãe.",
            d: "É uma empresa de programas de driver."
        },
        correta: "a"
    },
    {
        nivel: "Fácil",
        pergunta: "4. O que são PERIFÉRICOS?",
        opcoes: {
            a: "São dispositivos externos usados para enviar ou receber informações de um eletrônico.",
            b: "São componentes ligados nas bordas dos computadores.",
            c: "São dispositivos usados para medir a temperatura externa do computador.",
            d: "São os “ventiladores” do computador."
        },
        correta: "a"
    },
    {
        nivel: "Fácil",
        pergunta: "5. Sobre atalhos de teclado, para quê serve o atalho 'WIN + TAB'?",
        opcoes: {
            a: "É um atalho para mostrar os programas abertos disponíveis no Windows e para criar novas áreas de trabalho para se organizar.",
            b: "É um atalho para mostrar todos os programas que foram fechados recentemente.",
            c: "É um atalho para abrir uma aba que foi recentemente fechada no seu navegador.",
            d: "É um atalho para abrir o menu de gerenciamento de tarefas, lá é possível encerrar programas de forma forçada."
        },
        correta: "a"
    },
    // Perguntas de Nível Médio
    {
        nivel: "Médio",
        pergunta: "6. O que é um MALWARE?",
        opcoes: {
            a: "São programas desenvolvidos com o propósito de eliminar ameaças de segurança e vírus dos computadores.",
            b: "São programas desenvolvidos com o propósito de ativar trapaças em jogos digitais.",
            c: "São programas desenvolvidos para realizar transações financeiras através da blockchain.",
            d: "São programas desenvolvidos com o propósito de causar dano aos dispositivos ou roubar informações de usuários."
        },
        correta: "d"
    },
    {
        nivel: "Médio",
        pergunta: "7. O que significa T.I. quando se trata de um profissional na área de tecnologia?",
        opcoes: {
            a: "TECNOLOGIA DA INFORMAÇÃO",
            b: "TÉCNICO DE INFORMÁTICA",
            c: "TECH INSTRUCTOR",
            d: "TECNÓLOGO INSTRUTOR"
        },
        correta: "a"
    },
    {
        nivel: "Médio",
        pergunta: "8. O que é um MACRO?",
        opcoes: {
            a: "É o processo de vincular uma sequência de ações a um ou mais botões no seu computador.",
            b: "É o processo de criar teclas personalizadas para customizar o teclado.",
            c: "É o processo de aprendizado para digitar com o máximo de eficiência possível.",
            d: "É o processo de abrir diversos programas ao mesmo tempo para maximizar o seu uso do dispositivo."
        },
        correta: "a"
    },
    {
        nivel: "Médio",
        pergunta: "9. O que significa HD/HDD?",
        opcoes: {
            a: "HARD DISK DRIVE, é um sistema de armazenamento que contém um disco mecânico móvel.",
            b: "HARD DIGITAL DRIVE, sistema de armazenamento baseado em chip.",
            c: "HARD DISK DIRECTORY, sistema para armazenar pastas e arquivos.",
            d: "HARD DEVICE DRIVE, é um sistema de armazenamento baseado em conexão USB."
        },
        correta: "a"
    },
    {
        nivel: "Médio",
        pergunta: "10. O que significa SSD?",
        opcoes: {
            a: "SOLID STATE DRIVE, é um sistema de armazenamento que funciona através de um chip.",
            b: "SOLID SYSTEM DISK, usado para backup de arquivos.",
            c: "SOLID STORAGE DEVICE, para sistemas operacionais.",
            d: "SOFTWARE SYSTEM DIRECTORY, usado para organização de programas."
        },
        correta: "a"
    },
    // Perguntas de Nível Difícil
    {
        nivel: "Difícil",
        pergunta: "11. Para que serve o atalho 'WIN + L'?",
        opcoes: {
            a: "É um atalho para bloquear o computador e retornar para tela de login do Windows.",
            b: "É um atalho para abrir as configurações de rede.",
            c: "É um atalho para desligar o computador.",
            d: "É um atalho para abrir o gerenciador de tarefas."
        },
        correta: "a"
    },
    {
        nivel: "Difícil",
        pergunta: "12. Para que serve o atalho 'WIN + P'?",
        opcoes: {
            a: "É um atalho para projetar a tela em outro monitor ou dispositivo.",
            b: "É um atalho para abrir as preferências do sistema.",
            c: "É um atalho para abrir o painel de controle.",
            d: "É um atalho para alterar o plano de energia."
        },
        correta: "a"
    },
    {
        nivel: "Difícil",
        pergunta: "13. O que é OVERCLOCKING?",
        opcoes: {
            a: "É a prática de aumentar o consumo de energia de algumas peças para atingir ganhos de performance.",
            b: "É a prática de diminuir a velocidade do processador para economizar energia.",
            c: "É a prática de adicionar mais memória ao computador.",
            d: "É a prática de aumentar o espaço de armazenamento do computador."
        },
        correta: "a"
    },
    {
        nivel: "Difícil",
        pergunta: "14. O que é uma APU?",
        opcoes: {
            a: "É um processador que inclui vídeo integrado.",
            b: "É um dispositivo que armazena energia para o computador.",
            c: "É uma unidade de armazenamento de arquivos.",
            d: "É um acessório para melhorar o resfriamento da CPU."
        },
        correta: "a"
    },
    {
        nivel: "Difícil",
        pergunta: "15. Para que serve o atalho 'WIN + V'?",
        opcoes: {
            a: "É o atalho para acessar a área de transferência.",
            b: "É o atalho para abrir o visualizador de eventos.",
            c: "É o atalho para abrir o painel de controle.",
            d: "É o atalho para visualizar vídeos."
        },
        correta: "a"
    }
];

let questaoAtual = 0;
let respostasSelecionadas = {};

const nivelTexto = document.getElementById("nivel-texto");
const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes");
const botaoSubmit = document.getElementById("submit");
const nivelDiv = document.getElementById("nivel");

function renderizarQuestao() {
    const questao = perguntas[questaoAtual];
    nivelTexto.textContent = `Nível: ${questao.nivel}`;
    perguntaTexto.textContent = questao.pergunta;
    opcoesContainer.innerHTML = ""; // Limpa as opções anteriores
    // Define a cor do nível
    switch (questao.nivel) {
        case "Fácil":
            nivelDiv.style.backgroundColor = "#09b12e"; // Verde
            break;
        case "Médio":
            nivelDiv.style.backgroundColor = "#FFA500"; // Laranja
            break;
        case "Difícil":
            nivelDiv.style.backgroundColor = "#FF0000"; // Vermelho
            break;
        default:
            nivelDiv.style.backgroundColor = "#09b12e"; // Verde padrão
    }

    for (const [letra, texto] of Object.entries(questao.opcoes)) {
        const label = document.createElement("label");
        label.innerHTML = 
            `<input type="radio" name="questao" value="${letra}">
            ${texto}`;
        opcoesContainer.appendChild(label);
    }
}

function proximaQuestao() {
    const opcaoSelecionada = document.querySelector('input[name="questao"]:checked');
    const questao = perguntas[questaoAtual]

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma resposta!");
        return;
    }

    respostasSelecionadas[questaoAtual] = opcaoSelecionada.value;
    let verificarSelecao = respostasSelecionadas[questaoAtual];
    questaoAtual++;
   
    if (verificarSelecao !== questao.correta) {
        alert("Você errou!");
        finalizarQuiz();
    } else {
        if (questaoAtual < perguntas.length) {
            renderizarQuestao();
        } else {
            finalizarQuiz();
        }
    } 
}

function finalizarQuiz() { 
    let pontuacao = 0; 
    perguntas.forEach((questao, index) => { 
        if (respostasSelecionadas[index] === questao.correta) { 
            pontuacao++; 
        } 
    }); 
    opcoesContainer.innerHTML = `<p>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</p>`; 
    perguntaTexto.textContent = "Quiz Finalizado!"; 
    botaoSubmit.style.display = "none"; 
} 

botaoSubmit.addEventListener("click", proximaQuestao());
renderizarQuestao();
});