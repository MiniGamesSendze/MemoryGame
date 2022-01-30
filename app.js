document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'altai',
            img: 'images/altai.jpg'
        },
        {
            name: 'altai',
            img: 'images/altai.jpg'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.jpg'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.jpg'
        },
        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        {
            name: 'kingfisher',
            img: 'images/kingfisher.jpg'
        },
        {
            name: 'kingfisher',
            img: 'images/kingfisher.jpg'
        },
        {
            name: 'mountains',
            img: 'images/mountains.jpg'
        },
        {
            name: 'mountains',
            img: 'images/mountains.jpg'
        },
        {
            name: 'owl',
            img: 'images/owl.jpg'
        },
        {
            name: 'owl',
            img: 'images/owl.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const progress = document.querySelector('#progress')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    //create your board 
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/shadow.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        if(this.getAttribute('src') !== 'images/white.jpg'){
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    }

    //check for matches
    function checkForMatch () {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            progress.innerHTML='Tu as trouvé une paire!'
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/shadow.jpg')
            cards[optionTwoId].setAttribute('src', 'images/shadow.jpg')
            progress.innerHTML='Réessaie encore!'
        }
        setTimeout( () => {
            progress.innerHTML=''
        }, 2000)
        cardsChosen = []
        cardsChosenId =  []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Félicitations, tu as gagné!'
        }
    }

    createBoard();
})
