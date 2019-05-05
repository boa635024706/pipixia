<template>
	<div id="Homepage">
		<Header/>
		<Banner></Banner>
		<div class="notice">
			<div class="noticename">
				<span>公告</span>
			</div>
			<div class="antice">

			</div>
		</div>
		<div class="nav">
			<div v-for="item in navlist">
				<img :src="item.SmallPic">
				<span>{{item.Title}}</span>
			</div>
		</div>
		<div class="pic">
			<div v-for="item in piclist">
				<img :src="item.SmallPic">
			</div>
		</div>
		<div class="pic1">
			<div v-for="item in pic2list">
				<img :src="item.SmallPic">
			</div>
		</div>
		<div class="more1list">
			<div v-for="item in more1list" class="box">
				<img :src="item.PictureUrl">
				<div class="name">
					<span class="left">{{item.SubjectName}}</span>
					<span class="right">{{item.OriDiscount}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Header from '../components/Header'	
	import Banner from '../components/Banner'
	import '../../assets/iconfont/iconfont.css'
	export default{
		components:{
			Banner,
			Header
		},
		data(){
			return{
				thislist:[],
				navlist:[],
				piclist:[],
				pic2list:[],
				more1list:[]
			}
		},
		mounted(){
			axios.post('/Home/GetHomeAdModuleDataList','adkey=A-216').then(res=>{
				this.thislist=res.data.DataList
			})
			axios.post('/Home/GetHomeAdModuleDataList','adkey=A-302').then(res=>{
				this.navlist=res.data.DataList
			})
			axios.post('/Home/GetHomeAdModuleDataList','adkey=A-308').then(res=>{
				this.piclist=res.data.DataList
			})
			axios.post('/Home/GetHomeAdModuleDataList','adkey=A-207').then(res=>{
				this.pic2list=res.data.DataList
			})
			axios.post('/json/reply/QueryHotProductSpecialPageListTrans','ApplyPlace=9&PageIndex=1&PageSize=5&UserId=&Guid=&DisplayLabel=%5B%228%22%5D&SourceTypeSysNo=2&AreaSysNo=&ChannelID=&ExtensionSysNo=%5B0%5D&ClientIp=').then(res=>{
				this.more1list=res.data.QueryHotProductSpecialListDtos
			})
		}
	}
	
</script>

<style lang="scss" scoped>
	*{
		padding: 0;
		margin:0;
	}
	ul{
		list-style: none;
	}
	#Homepage{
		font-size: 12px;
		.notice{
			display: flex;
			.noticename{
				flex:2;
				span{
					border:1px solid #f60;
					margin-left: 25px;
					color:#f60;
					border-radius:5px;
				}
			}
			.antice{
				flex:9;
			}
		}
		.nav{
			display: flex;
			margin-bottom: 20px;
			div{
				flex:1;
				img{
					width: 40%;
					display: block;
					margin:0 auto;
					margin-top: 10px;
					margin-bottom: 5px;
				}
				span{
					display: block;
					text-align: center;
				}
			}
		}
		.pic{
			display: flex;
			div{
				flex:1;
				img{
					width: 100%;
				}
			}
		}
		.pic1{
			display: flex;
			div{
				flex:1;
				img{
					width: 100%;
				}
			}
		}
		.more1list{
			.box{
				width: 90%;
				margin:19px;
				box-shadow: 3px 3px 1px rgb(230,230,230);
				img{
					width: 100%;
				}
				.name{
					height: 37px;
					.left{
						float: left;
						line-height:37px;
						padding-left: 10px;
						color:rgb(130, 115, 122);
						font-size:14px;
					}
					.right{
						float:right;
						color:red;
						line-height:37px;
						padding-right: 10px;
					}
				}
			}

		}
	}

</style>