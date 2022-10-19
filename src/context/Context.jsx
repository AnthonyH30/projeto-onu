import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const HandleCardContext = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState([]);
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Educação de Qualidade',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019276976095324/educacao.png',
            icon: 'https://brasil.un.org//profiles/undg_country/themes/custom/undg/images/SDGs/images-only/png/SDG-4.png',
            color: '#C5192D',
            obj1: 'Melhorar a infraestrutura das escolas, proporcionando acessibilidade e conforto aos alunos.',
            obj2: 'Criar programas de inclusão para alunos com deficiencia fisica, com intuito de criar uma nova cultura de acolhimento a essas pessoas aos olhos dos demais alunos.',
            obj3: 'Melhorar o acompanhamento do desempenho dos alunos, e buscar entender o problema de cada um e a partir disso gerar um ambiente de aprendizagem que entende a raiz da dificuldade do aluno e trabalha em torno disso.'
        },
        {
            id: 2,
            title: 'Fome Zero',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019274706989106/fome.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032000671060344872/SDG-2.png',
            color: '#EFA82A',
            obj1: 'Criação de um restaurante popular para aqueles que comprovarem não ter renda para manter a familia alimentada e saudável.',
            obj2: 'Melhorar a fiscalização do programa de almoço grátis(já existente), para que algumas pessoas que tem condições, não tomem o lugar de quem realmente precisa.',
            obj3: 'Geração de empregos na região que tenham como foco empregar pessoas do local, assim gerando renda para os mais necessitados.'
        },
        {
            id: 3,
            title: 'Saúde e Bem-estar',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019275445190686/saude.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032000670649298964/SDG-3.png',
            color: '#00A029',
            obj1: 'Criação de novos pontos de atendimento, melhores destribuidos para que pessoas tenham melhor acesso ao local.',
            obj2: 'Apoio do governo no tratamento aos esgotos a céu aberto, que são um perigo à saúde da população de Magé.',
            obj3: 'Criação, Manutenção e fiscalização de academias a céu aberto, para que os moradores com, menos condições, possam também ter uma vida saudável.'
        },
        {
            id: 4,
            title: 'Água potável e Saneamento',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019276611194950/agua.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032000670208905289/SDG-6.png',
            color: '#00BEE4',
            obj1: 'Criação de um projeto para levar água potável para as familias mais necessitadas e com renda baixa.',
            obj2: 'Com apoio do governo, levar saneamento basico para as casas que se encontram em locais de dificil acesso ou ficam perto de esgotos a céu aberto.',
            obj3: 'implementação de um modo eficiente de tratamento da água, e disponibilizar essa água para a própria população que contribuir com o projeto.'
        },
        {
            id: 5,
            title: 'Trabalho decente e crescimento econômico',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019275772342333/trabalho.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032000669642657813/SDG-8.png',
            color: '#BE1241',
            obj1: 'Valorizar o comercio local, para aumentar a circulação de dinheiro dentro do proprio bairro, assim aumentando estimulando os comerciantes e melhorando a condição financeira da população.',
            obj2: 'Diminuição de impostos para novos empreendedores e empresas que queiram abrir negocios no bairro(e mostrem interesse de contrarar moradores da redondeza.)',
            obj3: 'Protejer o direito trabalhista e promover ambientes de trabalho seguros, principalmente para mulheres.'
        },
        {
            id: 6,
            title: 'Inovação e Capacitação',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019275084484618/inovacao.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032000668938018867/SDG-9.png',
            color: '#FF6918',
            obj1: 'Criar programas de capacitação de jogens e adolecentes para que cheguem ao mercado de trabalho preparados e entendendo o que o mercado espera deles.',
            obj2: 'Garantir que adolecentes tenham acesso a educação de qualidade para que sejam melhores proficionais no futuro.',
            obj3: 'Criar um projeto que liga jovens à tecnologia, que é uma area que tem um alto crescimento pro futuro. Capacitar pessoas para esse mercado é uma otima maneira de garantir que tenham mais oportunidades.'
        },
        {
            id: 7,
            title: 'Vida Terrestre',
            image: 'https://cdn.discordapp.com/attachments/773364102071975976/1032019276246302760/vida_terrestre.png',
            icon: 'https://cdn.discordapp.com/attachments/773364102071975976/1032008122442719252/SDG-15.png',
            color: '#00C100',
            obj1: 'Concientizar os moradores sobre manter as ruas limpas e os lixos em seus devidos locais, em busca de ter uma menor poluição das areas rurais do bairro.',
            obj2: 'Criar projeto de reciclagem de lixo e plantação de arvores nas escolas, para que os jovens cresçam mais concientes e cuidem do ambiente em que vivem.',
            obj3: 'O uso consciente dos recursos naturais, a conscientização das gerações futuras sobre a preservação ambiental.'
        }
    ]);
    const [input, setInput] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);

    useEffect(() => {
        const search = cards.filter((item) => {
            if(item.title.toLocaleLowerCase().includes(input.toLowerCase())){
                return true;
            } else{
                return false;
            }
        });

        setFilteredCards(search)
    },[input])

    function openModal(card) {
        setModalIsOpen(true);
        setActiveModal([card])
    }

      function closeModal() {
        setModalIsOpen(false);
    }

    return(
        <CardContext.Provider value={{ cards, modalIsOpen, setModalIsOpen, openModal, closeModal, activeModal, filteredCards, input, setInput }}>
            {children}
        </CardContext.Provider>
    )
}