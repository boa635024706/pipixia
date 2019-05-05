<template>
	<div class="Banner">
		  <div class="swiper-container">
		    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in datalist">
	        		<img :src="item.SmallPic">
	        </div>	            
	    </div>
   		<div class="swiper-pagination"></div>
 		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default{
		data(){
			return{
				datalist:[],
			}
		},
		mounted(){
			axios.post('/Home/GetHomeAdModuleDataList','adkey=A-200I').then(res=>{
				this.datalist=res.data.DataList
				this.$nextTick(()=>{
			    var swiper = new Swiper('.swiper-container', {
			      effect: 'cube',
			      grabCursor: true,
			      cubeEffect: {
			        shadow: true,
			        slideShadows: true,
			        shadowOffset: 20,
			        shadowScale: 0.94,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			      },
			    });

				});
			})
		}
	}
</script>
<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
	}
    .swiper-container {
      width:100%;
      overflow: hidden;
    }

	.Banner{
		img{
			width: 100%;
		}
	}
</style>