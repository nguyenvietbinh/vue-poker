<template>

</template>


<script>
import { betTableState } from '~/store/data/betTableState';
import { useMyBettbFunc } from '~/store/functions/bettableFuncStore';
import { useMyHandLvFunc } from '~/store/functions/handLvFuncStore';
export default {
    setup() {
        const { mixCards } = useMyBettbFunc()
        const { closestToTheLeft } = useMyBettbFunc()
        const { closestToTheRight } = useMyBettbFunc()
        const { disPlayCard } = useMyBettbFunc()
        return {
            betTableState,
            mixCards,
            closestToTheLeft,
            closestToTheRight,
            disPlayCard,
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
        if (betTableState.blindPos === null) {
            betTableState.blindPos = Math.floor(Math.random() * 6)
            betTableState.smBlind = this.closestToTheRight(betTableState.blindPos)
            betTableState.dealer = this.closestToTheRight(betTableState.smBlind)
        }
        betTableState.pause = false
        this.displayPos()
        betTableState.cards = this.mixCards()
        this.disPlayCard(betTableState.cards[0], this.playerCards[0])
        this.disPlayCard(betTableState.cards[1], this.playerCards[1])
        this.countBlind(betTableState.blindPos)
        this.calculateStackList()
        betTableState.actionPos = this.closestToTheLeft(betTableState.blindPos)
        betTableState.isGameOver = false
    },
    methods: {
        displayPos() {
            for (let i = 0; i < 6; i ++) {
                this.dealerDots[i].style.display = 'none'
                this.smblindDots[i].style.display = 'none'
                this.bigblinhDots[i].style.display = 'none'
            }
            this.dealerDots[betTableState.dealer].style.display = 'block'
            this.smblindDots[betTableState.smBlind].style.display = 'block'
            this.bigblinhDots[betTableState.blindPos].style.display = 'block'
        },
        countBlind(bb) {
            betTableState.betTotalList[bb] = 10
            betTableState.betTotalList[this.closestToTheRight(bb)] = 5
        },
        calculateStackList() {
            betTableState.pot = 0
            for (let i = 0; i < 6; i ++) {
                betTableState.stackList[i] -= betTableState.betTotalList[i]
                betTableState.pot += betTableState.betTotalList[i]
            }
        },
    }
}

</script>