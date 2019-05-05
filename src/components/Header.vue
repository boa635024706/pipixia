<template>
	<div id="Header">
		<div class="img">
		<img src="//static.boodoll.cn/wap/v2/img/icon/logo.png">
		</div>
		<div class="input">
			<span>
				<i class="iconfont icon-search"></i>
			</span>
			<input type="text" value="搜索">
		</div>
	</div>
</template>
 
<script>
	import '../../assets/iconfont/iconfont.css'    
    export default {
    	
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
	#Header{
		background: #F60;
		color:white;
		display: flex;
		height: 51.56px;
		padding-top: 10px;
		.img{
			flex:1;
			img{
				width: 55px;
				margin: 0 auto;
				display: block;
				margin-top: 8px;
			}
		}
		.input{
			flex:4.5;
			display: flex;
			height: 38.36px;
			background: #ff8c3c;
			margin-right: 10px;
			border-radius: 5px;
			span{
				flex:1;
				text-align: center;
				line-height: 38.36px;
			}
			input{
				flex:7;
				border:none;
				background: #ff8c3c;
				color:white;
				margin-right: 10px;
			}
		}
	}
</style>