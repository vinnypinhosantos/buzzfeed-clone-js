const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Escolha um lugar para viajar nas férias:",
        answers: [
            {
                text: "Nova York",
                image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Photo of the Empire State building during daytime",
                credit: "Oliver Niblett"
            },
            {
                text: "Rio de Janeiro",
                image: "./img/rio-de-janeiro.png",
                alt:"Foto da praia de Copacabana",
                credit: "Dislentev"
            },
            {
                text: "Porto Seguro",
                image: "./img/porto-seguro.png",
                alt:"Foto da cidade de porto Seguro com uma praia ao fundo",
                credit: "Dislentev"
            },
            {
                text: "Gramado",
                image: "./img/gramado.png",
                alt:"Foto de casas da cidade de Gramado, no Rio Grande do Sul",
                credit: "Dislentev"
            }
        ]
    },
    {
        id: 1,
        text: "Escolha uma comida:",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Pizza de Peperonni",
                credit: "Alan Hardman"
            },
            {
                text: "Sanduíche",
                image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"sanduíche de presunto",
                credit: "Eaters Collective"
            },
            {
                text: "Macarrão",
                image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Macarrão com molho de tomate",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Escolha uma casa:",
        answers: [
            {
                text: "Tradicional",
                image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"focus photography of building windows",
                credit: "Burgess Milner"
            },
            {
                text: "Moderna",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "Casa",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing"
            },
            {
                text: "Montanhas",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta"
            }
        ]
    }
]

const populateQuestion = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick)
            
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('slt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)


            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestion()

const handleClick = () => {
    console.log('clicked')
}