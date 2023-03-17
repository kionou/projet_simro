<template>
    <div class="container">
        <div class="container-card">
            <Card v-for="card in 6" :key="card.id"/>
        </div>

    </div>
</template>

<script>
import Card from '@/components/Admin/cardoverly.vue';
export default {
    name: 'ViewAccueil',
    components:{
        Card
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
.container{
/* border: 1px solid red; */
width: 100%;
position: absolute;
top: 0;
/* height: 100vh; */

}
.container-card{
/* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 35px;
  margin: 0 auto;
  padding: 10px ;
  max-width: 1140px;

}

</style>