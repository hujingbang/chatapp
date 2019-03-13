<template>
    <div class="container">

        <tabber :actives="active"></tabber>
    </div>

</template>

<script>
    import tabber from '../tabber/tabber.vue'
    export default {
        name: "contacts",
        data(){
            return {
                active: 1
            }
        },components:{
            tabber
        }
    }
</script>

<style scoped>

</style>