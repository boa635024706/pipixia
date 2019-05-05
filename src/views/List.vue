<template>
        <Header/>
  <div class="List">
        <ul>
            <li activeClass="active" v-for="(item,index) in li1list">
                <div>
                   {{item.ProductCategoryName}}
                </div>
            </li>   
        </ul>   
  </div>
</template>
 
<script>
	import axios from 'axios'
	import '../../assets/iconfont/iconfont.css'
	import Header from '../components/Header'
    export default {
    	components:{
    		Header
    	},
    	data(){
    		return{
                li1list:[],
    		}
    	},
    	mounted(){
    		axios.post('/json/reply/QueryCategoryListReq','UserId=0&SourceTypeSysNo=2').then(res=>{
                this.li1list = res.data.CategoryList
                console.log(this.li1list);
    		})
    	}
    }
</script>
<style lang="scss">
	*{
		padding: 0;
		margin:0;
	}
	ul{
		list-style: none;
	}
	.List{
		font-size: 12px;
		.active{
            background:red;
        }
	}
</style>