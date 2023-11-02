<template>
    <section class="flex items-center w-full">
        <div class="flex items-center rounded-lg p-1 w-[120px] gap-1"> 
            <span :class="clsx('uppercase font-bold text-sm w-10 gap',{
                'text-[#94BC4A]' : type === 'bug',
                'text-[#736C75]' : type === 'dark',
                'text-[#6A7BAF]' : type === 'dragon',
                'text-[#E5C531]' : type === 'electric',
                'text-[#E397D1]' : type === 'fairy',
                'text-[#CB5F48]' : type === 'fighting',
                'text-[#EA7A3C]' : type === 'fire',
                'text-[#7DA6DE]' : type === 'flying',
                'text-[#846AB6]' : type === 'ghost',
                'text-[#71C558]' : type === 'grass',
                'text-[#CC9F4F]' : type === 'ground',
                'text-[#70CBD4]' : type === 'ice',
                'text-[#AAB09F]' : type === 'normal',
                'text-[#B468B7]' : type === 'poison',
                'text-[#E5709B]' : type === 'psychic',
                'text-[#B2A061]' : type === 'rock',
                'text-[#89A1B0]' : type === 'steel',
                'text-[#539AE2]' : type === 'water'
            })"> {{ nameStatus }} </span>
            <span class="text-slate-500 font-semibold"> {{ statusValue }} </span>
        </div>
        <div class="flex items-center w-full bg-slate-200 rounded">
            <div :style="{width:widthStat+'%'}" :class="clsx(`h-2 rounded`,{
                'bg-[#94BC4A]' : type === 'bug',
                'bg-[#736C75]' : type === 'dark',
                'bg-[#6A7BAF]' : type === 'dragon',
                'bg-[#E5C531]' : type === 'electric',
                'bg-[#E397D1]' : type === 'fairy',
                'bg-[#CB5F48]' : type === 'fighting',
                'bg-[#EA7A3C]' : type === 'fire',
                'bg-[#7DA6DE]' : type === 'flying',
                'bg-[#846AB6]' : type === 'ghost',
                'bg-[#71C558]' : type === 'grass',
                'bg-[#CC9F4F]' : type === 'ground',
                'bg-[#70CBD4]' : type === 'ice',
                'bg-[#AAB09F]' : type === 'normal',
                'bg-[#B468B7]' : type === 'poison',
                'bg-[#E5709B]' : type === 'psychic',
                'bg-[#B2A061]' : type === 'rock',
                'bg-[#89A1B0]' : type === 'steel',
                'bg-[#539AE2]' : type === 'water'
            })">
            </div>
        </div>
    </section>
   
</template>

<script setup lang="ts">
import {clsx} from 'clsx'
const props = defineProps({
    stat : {
        type : Object,
        required : true
    },
    type : String
})

const nameStatus = ref('')
const statusValue = ref('')
const widthStat = ref('')

function replaceTextStat(status : string){
    if(status === 'attack'){
        nameStatus.value = 'atk'
    }else if(status === 'defense'){
        nameStatus.value = 'def'
    }else if(status === 'special-attack'){
        nameStatus.value = 'satk'
    }else if(status === 'special-defense'){
        nameStatus.value = 'sdef'
    }else if(status === 'speed'){
        nameStatus.value = 'spd'
    }else{
        nameStatus.value = status;
    }
}

function replaceValueStat(valueStatus : string){
    const value = parseInt(valueStatus)
    if(value < 100){
        statusValue.value = '0'+valueStatus;
    }else{
        statusValue.value = valueStatus;
    }
}

function calcW(valueStatus : string){
    const value = parseInt(valueStatus)
    widthStat.value = (((value/150)*100)).toString()
}

onMounted(()=>{
    replaceTextStat(props.stat.stat.name)
    replaceValueStat(props.stat.base_stat)
    calcW(props.stat.base_stat)
})
</script>
