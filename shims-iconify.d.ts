// Fix Heroicons import warn
declare module "@iconify/vue/*" {
    const content: any
    export default content
}