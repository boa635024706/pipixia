<template>
	<div class="Tabbar">
		<ul>
			<router-link to="/boa" tag="li" activeClass="active">
				<i class="iconfont icon-store"></i>
				<div>首页</div>
			</router-link>
			<router-link to="/List" tag="li" activeClass="active">
				<i class="iconfont icon-all"></i>
				<div>分类</div>
			</router-link>
			<router-link to="/Shopcar" tag="li" activeClass="active">
				<i class="iconfont icon-cart"></i>
				<div>购物车</div>
			</router-link>
			<router-link to="/Me" tag="li" activeClass="active">
				<i class="iconfont icon-account"></i>
				<div>账户</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	.Tabbar{
		height: 50px;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 1;
		background: white;
		ul{
			display: flex;
			li{
				flex:1;

				i{
					display: block;
					text-align: center;
					height: 35px;
					line-height: 35px;
					font-size: 20px;
				}
				div{
					text-align: center;
					font-size: 10px;
				}
			}
			.active{
				color: rgb(255, 163, 103);
			}
		}
		
	}
</style>