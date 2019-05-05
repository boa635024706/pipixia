<template>
  <div id="app">
  	<Tabbar/>
    <router-view/>
  </div>
</template>

<script>
 	import Tabbar from './components/Tabbar'
    export default {
      components:{
        Tabbar
      }
    }
</script>
<style lang="scss">
	*{
		margin:0;
		padding:0;
	}
	ul{
		list-style: none;
	}
</style>
