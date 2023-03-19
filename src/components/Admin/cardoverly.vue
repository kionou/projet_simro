<template>
    <div
      class="card"  >
      <div class="content">
        <div class="total">
            <span>0</span>
        </div>
        <div class="name">
            Utilisateurs
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "OverlyCard",
    data() {
      return {
      
      
      };
    },
    mounted() {
   
    },
   
  };
  </script>
  
  <style scoped>
  .card {
    position: relative;
    width: 240px;
    height: 150px;
    margin: 0 auto;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 5%);
    cursor: pointer;
    /* border: 1px solid red; */
    border-radius: 5px;
    padding: 10px;
    background-color: #1abc9c;
    color: var(--blanc);
  }

  .card .content {
   display: flex;
   height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .card .content .total{
    font-size: 32px;
}

.card .content .name{
    font-size: 25px;
}

  </style>
  