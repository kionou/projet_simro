<template>

  <router-view/>
</template>

<script>

export default {
  name: 'App',
  
  watch: {
    $route(to){
      const name = to.name.toLowerCase()
      const title = name === 'formation'
        ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        : name
      document.title = `simro - ${title}`

      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root{
    --blanc: #fff;
    --bg: #f4f5fa;
    --noir: #000;
    --vert:#00a36c;
    --jaune:#fd0;
    --bggris1:#293949;
    --bggris2:#2e4051;
    --gris1:#8f939e;
    --gris2:#797979;
    --red:#ff0000;
    --titre: 35px;
    --paragraphe: 18px;
    --raduis:6px
 
  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;   
}
body{

background-color: var(--bg);

}
</style>
