<template>
    <div class="max-w-xl m-auto mt-10">
        <button @click="loadSvg" class="border-l-4 border-zinc-700 w-full mb-3 bg-gradient-to-r from-zinc-800/50 via-zinc-800/50 to-zinc-500/10 hover:bg-zinc-700/50 hover:text-zinc-50 text-zinc-400 duration-300 transition easy-in-out p-2 flex flex-row place-items-center place-content-between">
            <p class="ml-2 uppercase font-bold">Paste svg in text area below to load image</p>
        </button>
        <div v-if="avatar != ''">
            <div class="grid grid-cols-2 gap-3 place-items-center my-10">
                <div id="svg-container" class="rounded scale-150" v-html="avatar"></div>
                <div id="svg-container" class="rounded scale-100" v-html="avatar"></div>
            </div>
        </div>
        <div v-else>
            <p class="uppercase font-bold text-xs flex flex-row justify-center items-center bg-zinc-800 p-6 rounded my-5"><Icon icon="ri:file-copy-2-line" class="text-xl mx-1"/>Image is not loaded</p>
        </div>
        <textarea class="bg-zinc-800 w-full break-all text-zinc-400 text-xs p-3 border-2 border-zinc-800 rounded bg-zinc-800/50 outline-0 " v-model="avatar"></textarea>
        
    </div>
</template>

<script lang="ts">
    import { Icon } from '@iconify/vue';
    
    export default {
        data() {
            return {
                avatar: ''
            }
        },
        methods: {
            loadSvg() {
            
            }
        },
        components: { Icon }
    }
</script>