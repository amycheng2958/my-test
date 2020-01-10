<template>
    <div>
        <input :type="type" :value="value" @input="OnInput">
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            OnInput(e) {
                this.$emit('input',e.target.value)
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>