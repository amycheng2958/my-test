<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        props: {
            rules: {
                type: Object,
                default: {}
            },
            model: {
                type: Object,
                default: {}
            },
        },
        methods: {
            validate(cb) {
                const tasks = this.$children
                .filter(item => item.prop)
                .map(item =>{
                    console.log(item.validate().then((res)=>{console.log(res)}))
                })
                Promise.all(tasks).then(()=>{
                    alert(1)
                    cb(true)
                }).catch(()=>{
                    cb(false)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>