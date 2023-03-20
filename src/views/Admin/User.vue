<template>
    <div>
        <Header/>
        <Tableau/>
    </div>
</template>

<script>
import Header from '@/components/Admin/header.vue';
import Tableau from '@/components/Admin/tableau.vue';
export default {
    name: 'ViewUser',
    components:{Header , Tableau},

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
div{
z-index: 100;

}

</style>