<template>
    <div>
        <Navbar/>
        <Dashboard/>

    </div>
</template>

<script>
import Navbar from '@/components/componentNavbar.vue';
import Dashboard from '@/components/Admin/dashboard.vue';
export default {
    name: 'ViewDashboard',
    components:{
        Dashboard , Navbar
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