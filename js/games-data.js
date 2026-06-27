const games = [
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description: "Tic Tac Toe is a classic strategy game played by two players who take turns placing X and O on a 3x3 board. The first to get three in a row wins.",
    instructions: [
      "Choose your symbol (X or O) and start the game.",
      "Take turns placing your symbol on the grid.",
      "Get three in a row horizontally, vertically, or diagonally.",
      "Block your opponent while building your own line.",
      "Win the game or play to a draw if the board fills up."
    ],
    url: "https://playtictactoe.org",
    category: "Strategy",
    featured: true
  },
  {
    id: "memory-game",
    name: "Memory Game",
    description: "Memory Game is a fun brain-training game where players flip cards to find matching pairs. Test and improve your memory with every round.",
    instructions: [
      "Click on a card to flip it and reveal the image.",
      "Click on another card to find its match.",
      "If the two cards match, they stay face up.",
      "If they don't match, they flip back over.",
      "Match all pairs in the fewest moves to win."
    ],
    url: "https://www.coolmathgames.com/0-memory",
    category: "Puzzle",
    featured: true
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description: "Snake Game is an arcade classic where you control a growing snake. Eat food to grow longer without crashing into walls or yourself.",
    instructions: [
      "Use arrow keys or swipe to control the snake's direction.",
      "Eat food items to grow longer and earn points.",
      "Avoid hitting the walls or the snake's own body.",
      "The snake speeds up as it grows longer.",
      "Try to achieve the highest score possible."
    ],
    url: "https://playsnake.org",
    category: "Arcade",
    featured: true
  },
  {
    id: "hangman",
    name: "Hangman",
    description: "Hangman is a classic word-guessing game where players try to guess a hidden word one letter at a time before the hangman is fully drawn.",
    instructions: [
      "A hidden word is shown as blank spaces.",
      "Guess letters one at a time by clicking or typing.",
      "Correct letters are revealed in the word.",
      "Wrong guesses add parts to the hangman drawing.",
      "Guess the word before the hangman is complete to win."
    ],
    url: "https://www.hangmanwords.com/play",
    category: "Educational",
    featured: false
  },
  {
    id: "puzzle-game",
    name: "Puzzle Game",
    description: "Puzzle Game challenges your problem-solving skills as you arrange scattered pieces to form a complete picture.",
    instructions: [
      "Select a puzzle image and difficulty level.",
      "Pieces are scattered randomly on the board.",
      "Drag and drop pieces to their correct positions.",
      "Use the preview image as a reference.",
      "Complete the puzzle to see your finishing time."
    ],
    url: "https://www.jigsawexplorer.com",
    category: "Puzzle",
    featured: true
  },
  {
    id: "quiz-game",
    name: "Quiz Game",
    description: "Quiz Game tests your knowledge across various topics. Answer questions correctly to earn points and climb the leaderboard.",
    instructions: [
      "Choose a category or play a mixed quiz.",
      "Read each question carefully.",
      "Select your answer from the multiple choices.",
      "Correct answers earn points; wrong answers don't.",
      "Complete all questions to see your final score."
    ],
    url: "https://www.sporcle.com",
    category: "Educational",
    featured: false
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    description: "Rock Paper Scissors is a classic hand game where you compete against the computer. Rock beats scissors, scissors beat paper, paper beats rock.",
    instructions: [
      "Choose Rock, Paper, or Scissors by clicking your choice.",
      "The computer randomly selects its move.",
      "Rock crushes Scissors, Scissors cut Paper, Paper covers Rock.",
      "If both choose the same, it's a tie.",
      "Play multiple rounds to determine the overall winner."
    ],
    url: "https://www.rpsgame.org",
    category: "Arcade",
    featured: true
  },
  {
    id: "drunk-cards",
    name: "Drunk Cards",
    description: "A fun card-based drinking game with random challenges and prompts. Perfect for parties and group gatherings.",
    instructions: [
      "Each player takes turns drawing a card.",
      "Follow the challenge or prompt shown on the card.",
      "Pass the turn to the next player.",
      "Drink according to the card rules.",
      "Play until the deck runs out or you decide to stop."
    ],
    url: "https://glairozz.github.io/drunk-cards/",
    category: "Party",
    featured: true
  },
  {
    id: "whos-the-spy",
    name: "Who's the Spy",
    description: "A social deduction game where players try to identify the hidden spy among them. Lie, bluff, and deduce your way to victory.",
    instructions: [
      "Each player receives a secret word \u2014 most get the same word, one gets a different one.",
      "Players take turns describing their word without saying it directly.",
      "The spy tries to blend in while the group votes on who the spy is.",
      "If the spy is voted out, the group wins. If the spy survives to the end, the spy wins.",
      "Use your wits and observation skills to uncover the spy."
    ],
    url: "https://glairozz.github.io/Spy-game/",
    category: "Party",
    featured: true
  },
  {
    id: "kings-cup",
    name: "King's Cup",
    description: "The classic King's Cup drinking card game with digital card draws and rules. A perfect party game for groups.",
    instructions: [
      "Draw a card and follow the rule associated with that card.",
      "Each card rank has a specific action or rule.",
      "Place cards face-up around the King's Cup as you draw.",
      "The fourth King drawn means the drawer drinks the King's Cup.",
      "Play through the deck and enjoy the party."
    ],
    url: "https://glairozz.github.io/kingsCup-drink-drunk/",
    category: "Party",
    featured: true
  }
];

const categories = ["All", "Strategy", "Puzzle", "Arcade", "Educational", "Party"];
