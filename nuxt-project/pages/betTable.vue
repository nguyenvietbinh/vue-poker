<template>
    <div class="h-[100vh] w-[100vw] absolute">
        <div class="w-[98vw] md:w-[99vw] h-[20vw] md:h-[10vh] bg-neutral rounded-lg mt-[1vw] md:mt-[0.5vh] left-[50%] translate-x-[-50%] absolute">
            <NuxtLink @click="reSetAllData" to="/">
                <img src="/img/logo.png" alt="" class="logo h-[60%] cursor-pointer w-auto absolute left-[5vw] md:left-[2.5vh] top-[50%] translate-y-[-50%]">
            </NuxtLink>
        </div>
        <div style="" class="h-[98vw] md:h-[80vh] w-[98vw] md:w-[80vh] absolute left-[50%] top-[20vw] md:top-[10vh] mt-[2vw] md:mt-[1vh] translate-x-[-50%]">
            <img src="/img/pokerTable.png" alt="" class="h-full w-full rounded-[2vh] absolute">
            <div class="h-[96%] w-[96%] absolute top-[2%] left-[2%]">
                <div v-if="!counting" class="communityCards select-none font-sans font-medium h-[8%] w-[6%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 absolute underline text-center text-[4vw] md:text-[3.5vh] top-[46%] left-[32%]"></div>
                <div v-if="!counting" class="communityCards select-none font-sans font-medium h-[8%] w-[6%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 absolute underline text-center text-[4vw] md:text-[3.5vh] top-[46%] left-[39%]"></div>
                <div v-if="!counting" class="communityCards select-none font-sans font-medium h-[8%] w-[6%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 absolute underline text-center text-[4vw] md:text-[3.5vh] top-[46%] left-[46%]"></div>
                <div v-if="!counting" class="communityCards select-none font-sans font-medium h-[8%] w-[6%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 absolute underline text-center text-[4vw] md:text-[3.5vh] top-[46%] left-[54%]"></div>
                <div v-if="!counting" class="communityCards select-none font-sans font-medium h-[8%] w-[6%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 absolute underline text-center text-[4vw] md:text-[3.5vh] top-[46%] left-[61%]"></div>
                <div class="player0 boder-solid h-[25%] w-[50%] absolute bottom-0 left-[25%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute left-[50%] translate-x-[-50%] md:bottom-[2.5vh] bottom-[2.5vw]">
                        <img src="/img/avt1.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute bottom-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[0] !== 0">{{ state.betTotalList[0] }}</div>
                    <div class="absolute bottom-[12%] md:bottom-[10%] left-[75%] md:left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[0] }}</div>
                </div>
                <div class="player1 boder-solid h-[25%] w-[50%] absolute rotate-90 bottom-[12.5%] left-[-12.5%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute left-[50%] translate-x-[-50%] md:bottom-[2.5vh] bottom-[2.5vw]">
                        <img src="/img/avt.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute bottom-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[1] !== 0">{{ state.betTotalList[1] }}</div>
                    <div class="absolute bottom-[12%] md:bottom-[10%] left-[75%] md:left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[1] }}</div>
                </div>
                <div class="player2 boder-solid h-[25%] w-[50%] absolute rotate-90 top-[12.5%] left-[-12.5%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute left-[50%] translate-x-[-50%] md:bottom-[2.5vh] bottom-[2.5vw]">
                        <img src="/img/avt2.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute bottom-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[2] !== 0">{{ state.betTotalList[2] }}</div>
                    <div class="absolute bottom-[12%] md:bottom-[10%] left-[75%] md:left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[2] }}</div>
                </div>
                <div class="player3 boder-solid h-[25%] w-[50%] absolute top-0 left-[25%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute right-[50%] translate-x-[50%] md:top-[2.5vh] top-[2.5vw]">
                        <img src="/img/avt3.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute top-[10%] right-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute top-[10%] right-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute right-[20%] bottom-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute right-[20%] bottom-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute right-[20%] bottom-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute top-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[3] !== 0">{{ state.betTotalList[3] }}</div>
                    <div class="absolute top-[12%] md:top-[10%] right-[75%] md:right-[50%] px-[2vw] md:px-[2vh] translate-x-[50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[3] }}</div>
                </div>
                <div class="player4 boder-solid h-[25%] w-[50%] absolute -rotate-90 top-[12.5%] right-[-12.5%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute left-[50%] translate-x-[-50%] md:bottom-[2.5vh] bottom-[2.5vw]">
                        <img src="/img/avt4.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute bottom-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[4] !== 0">{{ state.betTotalList[4] }}</div>
                    <div class="absolute bottom-[12%] md:bottom-[10%] left-[75%] md:left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[4] }}</div>
                </div>
                <div class="player5 boder-solid h-[25%] w-[50%] absolute -rotate-90 bottom-[12.5%] right-[-12.5%]">
                    <div class="w-[10vw] md:w-[7.5vh] absolute left-[50%] translate-x-[-50%] md:bottom-[2.5vh] bottom-[2.5vw]">
                        <img src="/img/avt5.png" alt="" class="avatar rounded-full border-solid border-[0.5vw] md:border-[0.3vh] border-white">
                    </div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[12%]"></div>
                    <div v-if="!counting" class="playerCard block select-none font-sans font-medium h-[30%] w-[12%] rounded-sm border-[0.2vh] border-black border-solid bg-blue-600 underline text-center text-[4vw] md:text-[3.5vh] absolute bottom-[12%] left-[24%]"></div>
                    <div class="dealer h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-gray-200 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">D</p>
                    </div>
                    <div class="smallBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">S</p>
                    </div>
                    <div class="bigBlind h-[5vw] md:h-[2.5vh] w-[5vw] md:w-[2.5vh] bg-blue-600 rounded-full absolute left-[20%] top-[10%] border-solid border-black border-[0.1vw] hidden">
                        <p class="absolute left-[50%] translate-x-[-50%] text-black text-[4vw] md:text-[2vh] top-[50%] translate-y-[-50%]">B</p>
                    </div>
                    <div class="absolute bottom-[50%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" v-if="state.betTotalList[5] !== 0">{{ state.betTotalList[5] }}</div>
                    <div class="absolute bottom-[12%] md:bottom-[10%] left-[75%] md:left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]" >{{ state.stackList[5] }}</div>
                </div>
                <div class="h-[50%] w-[50%] absolute top-[25%] left-[25%]">
                    <div v-if="counting" class="text-black text-[20vw] md:text-[20vh] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">{{ count }}</div>
                    <div v-else class="absolute bottom-[30%] left-[50%] px-[2vw] md:px-[2vh] translate-x-[-50%] text-[3vw] md:text-[1.5vh] inline-block bg-blue-200 text-black border-[0.5vw] md:border-[0.3vh] border-neutral border-solid rounded-[3.6vw]">{{ state.pot }}</div>
                </div>
            </div>
            <div class="w-full h-[7.5vh] absolute bottom-[-7.5vh]">
                <button @click="foldCheckClick" v-if="state.buttonDisplay" class="btn fold border-none bg-blue-500 text-white h-full w-[30%] mt-[1vw] md:mt-[0.5vh] absolute left-0">Fold/Check</button>
                <button @click="callClick" v-if="state.buttonDisplay" class="btn call border-none bg-blue-500 text-white h-full w-[30%] mt-[1vw] md:mt-[0.5vh] absolute left-[35%]">Call</button>
                <input @keyup="this.inputCheck" v-if="state.buttonDisplay" type="number" placeholder="Raise" id="" class="h-full raise input bg-blue-500 input-bordered w-[30%] mt-[1vw] md:mt-[0.5vh] absolute right-0 text-white rounded-md">
            </div>
        </div>
    </div>
    <BetTableComponentsGameLogic v-if="state.startGame" />
</template>

<script>
import { watch } from 'vue';
import { state } from '~/store/dataStore';
import { useMyFunction } from '~/store/functionStore';
export default {
    setup() {
        const { reSetAllData } = useMyFunction()
        return {
            state,
            reSetAllData,
        }
    },
    data() {
        return {
            count: 3,
            counting: true,
            avatar: null
        }
    },
    mounted() {
        this.avatar = document.querySelectorAll('.avatar')
        this.countDonw()
        watch(() => this.count, (newval, oldval) => {
            if (this.count !== 0) {
                this.countDonw()
            } else {
                this.counting = false
                state.startGame = true
            }
        })
    },
    methods: {
        countDonw() {
            setTimeout(() => {
                this.count -= 1
            }, 1000);
        },
        foldCheckClick() {
            if (state.betTotalList[0] === Math.max(...state.betTotalList)) {
                state.playerAct = 'Check'
                state.numberOfAction ++
                state.buttonDisplay = false
            } else {
                state.playerAct = 'Fold'
                state.numberOfAction ++
                state.buttonDisplay = false
                avatar[0].style.borderColor = 'gray'
            }
        },
        callClick() {
            if (state.betTotalList[0] === Math.max(...state.betTotalList)) {
                state.playerAct = 'Check'
                state.numberOfAction ++
                state.buttonDisplay = false
            } else {
                state.playerAct = 'Call'
                state.numberOfAction ++
                state.buttonDisplay = false
            }
        },
        inputCheck() {
            if (parseInt(event.target.value)) {
                event.target.value = parseInt(event.target.value)
            } else {
                event.target.value = ''
            }
            if (event.key === 'Enter') {
                state.playerAct = parseInt(event.target.value)
                state.numberOfAction ++
                state.buttonDisplay = false
            }
        },
    }
}
</script>