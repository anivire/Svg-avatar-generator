<template>
    <div class="max-w-xl m-auto mt-10">
        <button @click="generateSvgAvatar" class="border-l-4 border-zinc-700 w-full mb-3 bg-gradient-to-r from-zinc-800/50 via-zinc-800/50 to-zinc-500/10 hover:bg-zinc-700/50 hover:text-zinc-50 text-zinc-400 duration-300 transition easy-in-out p-2 flex flex-row place-items-center place-content-between">
            <p class="ml-2 uppercase font-bold">click here to generate avatar</p>
        </button>
        <div v-if="avatar != ''" >
            <div class="grid grid-cols-2 gap-3 place-items-center my-10">
                <div id="svg-container" class="rounded scale-150" v-html="avatar"></div>
                <div id="svg-container" class="rounded scale-100" v-html="avatar"></div>
            </div>

            <div class="">
                <div class="flex flex-row items-center">
                    <p class="uppercase font-bold text-xs flex flex-row items-center bg-zinc-800 mr-3 p-2 rounded">.SVG</p>
                    <button class="flex flex-row items-center bg-zinc-800 p-3 rounded h-8 hover:bg-zinc-700/50 transition duration-300 easy-in-out w-full text-xs " @click="copySvg">Copy .svg</button>
                </div>
                <p class="break-all text-zinc-400 text-xs my-3">{{avatar}}</p>
            </div>

            <p v-show="isCopied" class="uppercase font-bold text-xs flex flex-row items-center py-3 rounded">Copied!</p>
        </div>
        
    </div>
</template>

<script lang="ts">
    import { Matrix } from '../services/Matrix';

    export default {
        data() {
            return {
                avatar: '',
                isCopied: false
            }
        },
        mounted() {
            this.generateSvgAvatar();
        },
        methods: {
            copySvg() {
                navigator.clipboard.writeText(this.avatar);
                this.isCopied = true;

                setTimeout(() => {
                    this.isCopied = !this.isCopied;
                }, 1000);
            },
            generateSvgAvatar() {
                const width = 20;
                const height = 20;

                let pos = [0, 20, 40, 60, 80, 100];               

                const color = "#a1a1aa";
                const mirrorDirection = ['x', 'y'];
                const rngMirrorDirection = mirrorDirection[Math.round(Math.random())];

                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("width", `${width}`);
                svg.setAttribute("height", `${height}`);

                let matrix = Matrix.generateMatrix(5);
                console.log(matrix);
                matrix = Matrix.mirrorMatrix(matrix, rngMirrorDirection);
                console.log(matrix);

                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix.length; col++) {
                        if (matrix[row][col] == 1) {
                            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            
                            let x = pos[col];
                            let y = (row == 0) ? 0 : (row == 1) ? 20 : (row == 2) ? 40 : (row == 3) ? 60 : (row == 4) ? 80 : 100;

                            rect.setAttribute("x", x + '%');
                            rect.setAttribute("y", y + '%');
                            rect.setAttribute("width", `20%`);
                            rect.setAttribute("height", `20%`);
                            rect.setAttribute("fill", color);

                            svg.appendChild(rect);
                        }
                        
                    }
                }

                this.avatar = new XMLSerializer().serializeToString(svg)
            },
            loadSvg() {
                var parser = new DOMParser();
                return parser.parseFromString(this.avatar, "image/svg+xml");
            }
        },
        // components: { Icon }
    }
</script>