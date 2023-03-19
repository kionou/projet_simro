<template>
    <div class="general">
        <Navbar/> 
        <ComponentLogin/>
    </div>
  
</template>

<script>
import ComponentLogin from '@/components/componentLogin.vue';
import Navbar from '@/components/componentNavbar.vue';



export default {
    name: 'CpLogin',
    components:{
        ComponentLogin , Navbar
    },

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

</style>