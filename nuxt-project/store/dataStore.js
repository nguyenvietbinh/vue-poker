import { reactive } from 'vue'

export const state = reactive({
  startGame: false,
  numberOfPlayer: 6,
  playerStatus: [true, true, true, true, true, true],
  botTitle: ['You', 'Bot 1', 'Bot 2', 'Bot 3', 'Bot 4', 'Bot 5'],
  cards: [],
  stackList: [2000, 2000, 2000, 2000, 2000, 2000],
  betTotalList: [0, 0, 0, 0, 0, 0],
  pot: 0,
  communityCards: [null, null, null, null, null],
  playerAct: '',
  blindPos: null,
  smBlind: null,
  dealer: null,
  actionPos: null,
  numberOfAction: 0,
  buttonDisplay: false,
  isPlayerTurn: false,
  isGameOver: false,
  round: 0,
  canMoveToNextRound: false,
  winner: [],
  lstOfHand: [],
  gameHistory: [],
  everyGameHistory: [],
  haveAllinCase: false,
  allin: [false, false, false, false, false, false],
  numberOfAllinPlayer: 0,
  sidePot: [0, 0, 0, 0, 0, 0],
  stopBetting: false
})

