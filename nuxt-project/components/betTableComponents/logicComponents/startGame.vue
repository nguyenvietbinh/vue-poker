<template>

</template>


<script>
import { state } from '~/store/data/dataStore';
import { useMyBettbFunc } from '~/store/functions/bettableFuncStore';
import { useMyHandLvFunc } from '~/store/functions/handLvFuncStore';
export default {
    setup() {
        const { mixCards } = useMyBettbFunc()
        const { closestToTheLeft } = useMyBettbFunc()
        const { closestToTheRight } = useMyBettbFunc()
        const { disPlayCard } = useMyBettbFunc()
        const { getPlayerWinRate } = useMyHandLvFunc()
        return {
            state,
            mixCards,
            closestToTheLeft,
            closestToTheRight,
            disPlayCard,
            getPlayerWinRate,
        }
    },
    data() {
        return {
            playerCards: null,
            dealerDots: null,
            smblindDots: null,
            bigblinhDots: null
        }
    },
    mounted() {
        this.playerCards = document.querySelectorAll('.playerCard')
        this.dealerDots = document.querySelectorAll('.dealer')
        this.smblindDots = document.querySelectorAll('.smallBlind')
        this.bigblinhDots = document.querySelectorAll('.bigBlind')
        if (state.blindPos === null) {
            state.blindPos = Math.floor(Math.random() * 6)
            state.smBlind = this.closestToTheRight(state.blindPos)
            state.dealer = this.closestToTheRight(state.smBlind)
        }
        state.pause = false
        this.displayPos()
        state.cards = this.mixCards()
        this.disPlayCard(state.cards[0], this.playerCards[0])
        this.disPlayCard(state.cards[1], this.playerCards[1])
        state.winRate = this.getPlayerWinRate([state.cards[0], state.cards[1]], state.communityCards, state.numberOfPlayer)
        this.countBlind(state.blindPos)
        this.calculateStackList()
        state.actionPos = this.closestToTheLeft(state.blindPos)
        state.isGameOver = false
    },
    methods: {
        displayPos() {
            for (let i = 0; i < 6; i ++) {
                this.dealerDots[i].style.display = 'none'
                this.smblindDots[i].style.display = 'none'
                this.bigblinhDots[i].style.display = 'none'
            }
            this.dealerDots[state.dealer].style.display = 'block'
            this.smblindDots[state.smBlind].style.display = 'block'
            this.bigblinhDots[state.blindPos].style.display = 'block'
        },
        countBlind(bb) {
            state.betTotalList[bb] = 10
            state.betTotalList[this.closestToTheRight(bb)] = 5
        },
        calculateStackList() {
            state.pot = 0
            for (let i = 0; i < 6; i ++) {
                state.stackList[i] -= state.betTotalList[i]
                state.pot += state.betTotalList[i]
            }
        },
    }
}

</script>