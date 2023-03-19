import { createStore } from 'vuex'
// import axios from 'axios'
export default createStore({
  state: {
    simro_admin : localStorage.getItem('simro_admin') || 0
  },
  getters: {
    getSimro_admin: (state) =>{
      return state.simro_admin
    
    }
  },
  mutations: {
    UPDATE_KOTEN(state,playload){
      state.simro_admin = playload
    
    }
  },
  actions: {
    simro_admin_token(context ,playload){
      localStorage.setItem('simro_admin', playload)
      context.commit('UPDATE_KOTEN' , playload)

    
    },
   async remove_simro_admin(context){
        localStorage.removeItem('simro_admin')
        // try {
        //   const data = await axios.get(
        //     "http://localhost:8080/auth/api/logout/"
        //   );
        //   // commit("SET_USERS", data.data);
        //   console.log('error',data);

        // } catch (error) {
        //   alert(error);
        //   console.log(error);
        // }
        context.commit('UPDATE_KOTEN',0)
       
    
    }
  },
  modules: {
  }
})
