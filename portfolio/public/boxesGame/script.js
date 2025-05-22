document.addEventListener("DOMContentLoaded", () => {
  // Game configuration
  const config = {
    dotSize: 8,
    boxSize: 40,
    lineThickness: 4,
    minSize: 3,
    maxSize: 8,
  }

  // Game state
  let state = {
    size: 5,
    currentPlayer: 1,
    lines: [],
    boxes: [],
    scores: { 1: 0, 2: 0 },
    gameOver: false,
    extraTurn: false,
  }

  // DOM elements
  const gameBoard = document.getElementById("game-board")
  const score1Element = document.getElementById("score1")
  const score2Element = document.getElementById("score2")
  const extraTurn1Element = document.getElementById("extra-turn1")
  const extraTurn2Element = document.getElementById("extra-turn2")
  const gameOverElement = document.getElementById("game-over")
  const winnerTextElement = document.getElementById("winner-text")
  const resetButton = document.getElementById("reset-btn")

  // Initialize the game
  initGame(state.size)

  // Event listeners for buttons
 

  resetButton.addEventListener("click", () => {
    initGame(state.size)
  })

  // Initialize game with given size
  function initGame(size) {
    // Update state
    state = {
      size: size,
      currentPlayer: 1,
      lines: [],
      boxes: [],
      scores: { 1: 0, 2: 0 },
      gameOver: false,
      extraTurn: false,
    }

    // Initialize boxes
    for (let row = 0; row < size - 1; row++) {
      for (let col = 0; col < size - 1; col++) {
        state.boxes.push({ row, col, owner: null })
      }
    }

    // Update UI
    updateScores()
    updatePlayerTurn()
    gameOverElement.classList.add("hidden")

    // Update button states
 

    // Render game board
    renderGameBoard()
  }

  // Render the game board
  function renderGameBoard() {
    // Clear the game board
    gameBoard.innerHTML = ""

    // Calculate board dimensions
    const boardWidth = (state.size - 1) * config.boxSize
    const boardHeight = (state.size - 1) * config.boxSize

    // Set board size
    gameBoard.style.width = `${boardWidth}px`
    gameBoard.style.height = `${boardHeight}px`

   

    // Render horizontal lines
    for (let row = 0; row < state.size; row++) {
      for (let col = 0; col < state.size - 1; col++) {
        const line = document.createElement("div")
        line.className = "line horizontal"
        line.dataset.row = row
        line.dataset.col = col
        line.dataset.horizontal = "true"
        line.style.left = `${col * config.boxSize + config.dotSize / 2}px`
line.style.top = `${row * config.boxSize + config.dotSize / 2}px`

        // Check if line is already drawn
        const existingLine = state.lines.find((l) => l.row === row && l.col === col && l.isHorizontal === true)

        if (existingLine) {
          line.classList.add(`player${existingLine.owner}`)
        }

        line.addEventListener("click", handleLineClick)
        gameBoard.appendChild(line)
      }
    }

    // Render vertical lines
    for (let row = 0; row < state.size - 1; row++) {
      for (let col = 0; col < state.size; col++) {
        const line = document.createElement("div")
        line.className = "line vertical"
        line.dataset.row = row
        line.dataset.col = col
        line.dataset.horizontal = "false"
        line.style.left = `${col * config.boxSize}px`
        line.style.top = `${row * config.boxSize + config.dotSize / 2}px`

        // Check if line is already drawn
        const existingLine = state.lines.find((l) => l.row === row && l.col === col && l.isHorizontal === false)

        if (existingLine) {
          line.classList.add(`player${existingLine.owner}`)
        }

        line.addEventListener("click", handleLineClick)
        gameBoard.appendChild(line)
      }
    }

    // Render boxes
    for (let row = 0; row < state.size - 1; row++) {
      for (let col = 0; col < state.size - 1; col++) {
        const box = document.createElement("div")
        box.className = "box"
        box.dataset.row = row
        box.dataset.col = col
        box.style.left = `${col * config.boxSize + config.dotSize / 2}px`
        box.style.top = `${row * config.boxSize + config.dotSize / 2}px`

        // Check if box is owned
        const existingBox = state.boxes.find((b) => b.row === row && b.col === col && b.owner !== null)

        if (existingBox) {
          box.classList.add(`player${existingBox.owner}`)
        }

        gameBoard.appendChild(box)
      }
    }
  }

  // Handle line click
  function handleLineClick(event) {
    if (state.gameOver) return

    const line = event.target
    const row = Number.parseInt(line.dataset.row)
    const col = Number.parseInt(line.dataset.col)
    const isHorizontal = line.dataset.horizontal === "true"

    // Check if line is already drawn
    if (state.lines.some((l) => l.row === row && l.col === col && l.isHorizontal === isHorizontal)) {
      return
    }

    // Add the new line
    state.lines.push({ row, col, isHorizontal, owner: state.currentPlayer })
    line.classList.add(`player${state.currentPlayer}`)

    // Check if any boxes are completed
    let boxCompleted = false

    for (let i = 0; i < state.boxes.length; i++) {
      const box = state.boxes[i]
      if (box.owner === null) {
        const boxRow = box.row
        const boxCol = box.col

        // Check if all 4 sides of the box are drawn
        const topLine = state.lines.some((l) => l.row === boxRow && l.col === boxCol && l.isHorizontal === true)
        const bottomLine = state.lines.some((l) => l.row === boxRow + 1 && l.col === boxCol && l.isHorizontal === true)
        const leftLine = state.lines.some((l) => l.row === boxRow && l.col === boxCol && l.isHorizontal === false)
        const rightLine = state.lines.some((l) => l.row === boxRow && l.col === boxCol + 1 && l.isHorizontal === false)

        if (topLine && bottomLine && leftLine && rightLine) {
          state.boxes[i] = { ...box, owner: state.currentPlayer }
          boxCompleted = true

          // Update box in UI
          const boxElement = document.querySelector(`.box[data-row="${boxRow}"][data-col="${boxCol}"]`)
          boxElement.classList.add(`player${state.currentPlayer}`)
        }
      }
    }

    // Update scores
    state.scores[state.currentPlayer] = state.boxes.filter((b) => b.owner === state.currentPlayer).length
    updateScores()

    // Check if game is over
    if (state.boxes.every((b) => b.owner !== null)) {
      state.gameOver = true
      showGameOver()
    }

    // Switch player if no box was completed
    if (!boxCompleted) {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1
      state.extraTurn = false
    } else {
      state.extraTurn = true
    }

    updatePlayerTurn()
  }

  // Update scores in UI
  function updateScores() {
    score1Element.textContent = state.scores[1]
    score2Element.textContent = state.scores[2]
  }

  // Update player turn in UI
  function updatePlayerTurn() {
    const player1Element = document.querySelector(".player1")
    const player2Element = document.querySelector(".player2")

    if (state.currentPlayer === 1) {
      player1Element.classList.add("active")
      player2Element.classList.remove("active")
      extraTurn1Element.classList.toggle("hidden", !state.extraTurn)
      extraTurn2Element.classList.add("hidden")
    } else {
      player1Element.classList.remove("active")
      player2Element.classList.add("active")
      extraTurn1Element.classList.add("hidden")
      extraTurn2Element.classList.toggle("hidden", !state.extraTurn)
    }
  }

  // Show game over message
  function showGameOver() {
    gameOverElement.classList.remove("hidden")

    if (state.scores[1] > state.scores[2]) {
      winnerTextElement.textContent = "Player 1 wins!"
    } else if (state.scores[2] > state.scores[1]) {
      winnerTextElement.textContent = "Player 2 wins!"
    } else {
      winnerTextElement.textContent = "It's a tie!"
    }
  }
})
