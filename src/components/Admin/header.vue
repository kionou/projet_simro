<template>
    <div class="container">
       <p>Utilisateurs</p>
     
       <div class="content">
        <div class="search-box">
  <input class="search-input" type="text" placeholder="Search something..">
  <button class="search-btn"><i class='bx bx-search'></i></button>
</div>
        <div class="icon">
            <i class='bx bxs-user-plus'></i>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'CpHeader',

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
/* border: 1Px solid red; */
background-color:var(--blanc);
border-radius: var(--raduis);
width: 100%;
height: 60px;
display: flex;
display: flex;
justify-content: space-between;
align-items: center;
padding:10px;
position: relative;

}
.container p{
    font-weight: 900;


}
.container .content{
    /* border:1px solid blue; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.search-box {
  width: 350px;
  position: relative;
  display: flex;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}

.search-input {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 5px 45px 5px 15px;
 border: 1px solid var(--vert);
    color: var(--noir);
    border-radius: 6px;
    transition: all .4s;
}

.search-input:focus {
  border:none;
  outline:none;
  box-shadow: var(--box-shadow);
}

.search-btn {
  background-color: transparent;
  font-size: 18px;
  padding: 6px 9px;
  margin-left:-45px;
  border:none;
  color: #6c6c6c;
  transition: all .4s;
  z-index: 10;
  display: flex;
}

.search-btn:hover {
  transform: scale(1.2);
  cursor: pointer;
  color:var(--vert);
}

.search-btn:focus {
  outline:none;
  color:black;
}

/* You just need to get this field - end */

.footer {
  position:fixed;
  bottom:5px;
}

.footer p {
  font-family: 'Montserrat', sans-serif;
  font-size:12px;
  color:#000;
}

.footer a {
  color: #fff;
  transition: all .4s;
}

.footer a:hover {
  color: #eaeaeb;
}

.container .content .icon{
    /* border: 1px solid red; */
    width: 35px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 25px;
    background-color: var(--vert);
    color: var(--blanc);
    margin-left: 10px;

}
.container .content .icon:hover{
    color: var(--vert);
    background-color: var(--blanc);
    border: 1px solid var(--vert);
    cursor: pointer;

}
</style>