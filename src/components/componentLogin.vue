<template>
    <div>
        <section class="formulaire">
        <header>
            <div class="login">
                <h1>S'identifier</h1>
            </div>

        </header>
        <svg class="topLeftRounded" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="50 20 50 80" preserveAspectRatio="none">
            <path d="M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z"></path>
        </svg>
        <div class="container-fluid">
            <div class="container">
            <div class="titre">
                <img src="@/assets/images/favicon1.png" alt="">
            </div>
            <form>
                <small>Numéro ou Mot de passe incorrects !</small>
                <div class="form-groupe">
                    <label for="tel"><b>Téléphone</b></label>
                    <input type="tel" class="effect-22"  name="numero" required v-model="numero">
                    <small v-if="v$.numero.$error">{{ v$.numero.$errors[0].$message }} </small>
                </div>

                <div class="form-groupe">
                    <label for="psw"><b>Mot de passe</b></label>
                    <input type="password"  class="effect-22" name="psw" required v-model="password"> 
                    <small v-if="v$.password.$error">{{ v$.password.$errors[0].$message }} </small>       
                </div>
               
    
                
    
                <button type="submit"  @click.prevent="submit">Se connecter</button>
            </form>
        </div>
        </div>
        

       

    </section>
    </div>
</template>

<script>
   import useVuelidate from '@vuelidate/core'
    import {require, lgmin,lgmax, ValidNumeri} from '../../functions/rules'
export default {
    name: 'ComponentLogin',

    data() {
        return {
            numero:'',
            password:'',
            v$:useVuelidate(),
             erreur:'',
             connect:''
            
        };
    },
    validations: {
        numero:{
            require,
            ValidNumeri,
            // lgmin:vlmin(20),
            // lgmax:vlmax(10)
        
        },

            password:{
              require,
                lgmin:lgmin(6),
                lgmax:lgmax(12)
         
                
            },
    },

    mounted() {
        
    },

    methods: {
        async  submit(){
            this.v$.$touch()
            console.log(this.v$.$errors);
            if (this.v$.$errors.length == 0 ) {
             let   DataUser={
                    numero:this.numero,
                    password:this.password
                }
            console.log(DataUser);
            
                   
            }
        }
        
    },
};
</script>

<style lang="css" scoped>

header{
    background: rgb(0,175,96);
    background: linear-gradient(135deg, rgba(0,175,96,1) 0%, rgba(0,153,0,1) 100%);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 110px;
    background-attachment: fixed;
    height: 370px;
    width: 100%;

}
header .login{
height:100% ;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: var(--blanc);
font-weight: 400;
font-size: 40px;
}
.topLeftRounded {
    position: absolute;
    fill: var(--bg);
    margin-top: -97px;
    z-index: 9;
}

.formulaire {
    width: 100%;
    height: 100vh;

}
.container-fluid{
width: 100%;
position: absolute;
top: 290px;
display: flex;
flex-direction: column;
align-items: center;
z-index: 10;
padding-bottom: 50px;

}

.container {
    background-color: var(--blanc);
    box-shadow: 0px 0px 10px #888888;
    padding: 20px;
    max-width: 350px;
    width: 98%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

form {
    display: flex;
    flex-direction: column;
}

.titre {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.titre img{
    width: 110px;
    height: 100%;
    border: 1px solid var(--vert);
    border-radius: 7%;

}

.form-groupe {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0;
    position: relative;
}

label {
    font-weight: bold;
    margin-top: 10px;
}

label b {
    font-size: 15px;
    margin-left: 3px;

}
.effect-22 {
    border: 0;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
}

input[type=tel],
input[type=password] {
    color: #333;
    width: 100%;
    letter-spacing: 1px;
    outline: 1px solid transparent;
    outline-offset: 50px;
    transition: 0.2s ;
    margin: 5px 0;
}

input[type=tel]:focus {
    outline: 1px solid var(--vert);
    outline-offset: 0;
  }
input[type=password]:focus {
    outline: 1px solid var(--vert);
    outline-offset: 0;
  }


button[type=submit] {
    background-color: var(--vert);
    color: var(--blanc);
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
}

button[type=submit]:hover {
    background: rgb(0,175,96);
    background: linear-gradient(135deg, rgba(0,175,96,1) 0%, rgba(0,153,0,1) 100%);
}

small {
    
    text-align: center;
    color:var(--red);

}

</style>