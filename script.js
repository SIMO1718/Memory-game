const symbols = ['🍎', '🍎', '🚀', '🚀', '💎', '💎', '⚽', '⚽'];
let flippedCards = [];
let matchedCount = 0;

function createBoard() {
    const board = document.getElementById('gameBoard');
    // خلط الرموز بشكل عشوائي
    symbols.sort(() => Math.random() - 0.5);
    
    symbols.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.symbol;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        flippedCards = [];
        matchedCount += 2;
        if (matchedCount === symbols.length) alert('مبروك! ربحتي 🎉');
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card1.textContent = '';
            card2.classList.remove('flipped');
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

createBoard();
function resetGame() {
    // 1. كيمسح الساحة ديال اللعب
    document.getElementById('gameBoard').innerHTML = '';
    
    // 2. كيرجع العدادات للصفر
    flippedCards = [];
    matchedCount = 0;
    
    // 3. كيعاود يوزع البطاقات من جديد
    createBoard();
    
    console.log("اللعبة بدات من جديد!");
}