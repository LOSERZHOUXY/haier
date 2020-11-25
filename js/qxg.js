var dat ={
	'b':{
		'name':['笔记本','波轮洗衣机','波轮洗衣机xQB70-M1268','波轮TQB60-@1','波轮XQB70-M1268','壁挂式空调','变频空调','冰箱风冷'],
		'nuber':[1,12,80,60,116,77,288,90]
	},
	'd':{
		'name':['电热水器','电热水器EC6002-D','电吹风海尔','电暖器','电子体温计','电视统帅','电子血压计','电视附件','电吹风','多元机'],
		'nuber':[59,80,116,90,180,190,50,64,70,50]
	},
	'c':{
		'name':['厨房电器','彩电统帅','彩电海尔','彩电LED','超级战舰','触控洗衣机','彩电卡萨帝','彩电底座','厨用小家电','触摸屏手机'],
		'nuber':[119,89,77,80,50,69,70,5,1,1]
		
	},
	'e':{
		'name':['EG8012BX19S 8公斤触控滚筒','EG8012b29W1 8公斤BLDC变频滚筒','EB80M2WH','EG8014BDX59STU1水晶滚筒','EB70Z2WH'],
		'nuber':[517,1,1,1,1]
	},
	'g':{
		'name':['滚筒洗衣机','挂式空调','筒洗衣机XQG70-B12866 2399','个人护理','滚筒洗衣机','滚筒洗衣机海尔','高效空调','高效定频空调','挂烫机','滚筒洗衣机卡萨帝'],
		'nuber':[101,136,795,371,103,82,43,31,20,15]
	},
	'hot':{
		'name':['【今日值得买】','滚筒洗衣机','【冰箱狂欢购】','挂式空调','电热水器','油烟机','4K电视'],
		'nuber':[	33,101,50,136,59,72,102]
	}
	
}
var wuping ={
	'冰箱':{
		'imgs':['//cdn50.ehaier.com/file/5901deff58e1d9dd9017e097.png','//cdn50.ehaier.com/file/5901df0958e1d9dd9017e09a.png','//cdn50.ehaier.com/file/5901df1358e1d9dd9017e09d.png','//cdn50.ehaier.com/file/5901df1e58e1d9dd9017e0a0.png','//cdn50.ehaier.com/file/5901df2958e1d9dd9017e0a3.png','//cdn50.ehaier.com/file/5903058a3e7e6a316cce330d.png'],
		'name':['单门','两门','三门','多门','对开','干湿分储'],
		'right':{
			'img':['//cdn50.ehaier.com/file/5ac97f303e7e1c80b732ac86.png','//cdn50.ehaier.com/file/5a1cff7bb702e266004ffa2f.png','//cdn50.ehaier.com/file/5aeaa7dffac0d058d4bd0d4b.png','//cdn50.ehaier.com/file/59b8de823e7ea0831a448b46.png'],
			'names':['BCD-470WDPG 470升十字对开变频静音节能干湿分储电冰箱','BCD-258WDVLU1','BCD-642WDVMU1 642升变频对开门大容量冰箱','BCD-458WDVMU1 458升风冷无霜十字对开门 变频干湿分储 WIFI智能家用冰箱'],
			'moneny':['¥4,399','¥2,599','¥3,799','¥3,799'],
		}
	},
	'空调':{
		'imgs':['//cdn50.ehaier.com/file/591bb48ffac0f90e278a5e15.png','//cdn50.ehaier.com/file/591bb42c58e1579b9a2869b4.png','//cdn50.ehaier.com/file/5901de3c58e1d9dd9017e092.png','//cdn50.ehaier.com/file/5901de4c58e1d9dd9017e095.png','//cdn50.ehaier.com/file/5901de573e7e3f464c58752c.png','//cdn50.ehaier.com/file/5901de653e7e3f464c58752f.png','//cdn50.ehaier.com/file/5901de733e7e3f464c587532.png'],
		'name':['壁挂式空调','柜式空调','空气类产品','风管机/一拖一','家中机/一拖多','柜机','嵌入机'],
		'right':{
			'img':['//cdn50.ehaier.com/file/59eee9f2b702d89f77a99e2d.png','//cdn50.ehaier.com/file/5aeaa83efac0d058d4bd0d4d.png','//cdn50.ehaier.com/file/5aeaad92fac0d058d4bd0d4f.png','//cdn50.ehaier.com/file/59eeeaf63e7e17179504fa26.png'],
			'names':['KFR-50LW/16AHBP-2U1套机 2匹智能变频柜机/品质压缩机/二级能效','KFR-35GW/21TMAAL23AU1套机','KFR-50GW/08AH-2套机 2匹智能空调/二级能效/急速冷暖','KFR-72LW/09VTM21AU1套机 3匹内外自清洁变频空调/超静音/一级能效'],
			'moneny':['¥3,499','¥2,066','¥2,799','¥7,199']
		}
	},
	'洗衣机':{
		'imgs':['//cdn50.ehaier.com/file/5901df9158e1d9dd9017e0b6.png','//cdn50.ehaier.com/file/5901df8458e1d9dd9017e0b3.png','//cdn50.ehaier.com/file/5901df7a58e1d9dd9017e0ae.png','//cdn50.ehaier.com/file/5901df9f58e1d9dd9017e0b9.png','//cdn50.ehaier.com/file/5901dfae58e1d9dd9017e0be.png','//cdn50.ehaier.com/file/5901dfb958e1d9dd9017e0c1.png','//cdn50.ehaier.com/file/5901dfcbfac09a46355a541d.png'],
		
		'name':['滚筒','波轮','双缸','mini','免清洗','干衣机','洗烘一体'],
		'right':{
			'img':['//cdn50.ehaier.com/file/59eeeb513e7e17179504fa29.png','//cdn50.ehaier.com/file/59eeebbc3e7e17179504fa2d.png','//cdn50.ehaier.com/file/59eeebfcfac0676201b85316.png','//cdn50.ehaier.com/shoppingmall-admin-web/navigationrecommendcontroller/image/2019/02/730467d8d1284278866277a120292e71.jpg'],
			'names':['EG8012B919GU1 8公斤iMate8智能变频滚筒洗衣机','EB80BM39TH 8kg/公斤 直驱变频波轮洗衣机','EG8014HB39GU1 8公斤变频全自动洗烘一体滚筒洗衣机','EG10014B39GU1 10公斤/kg智能变频滚筒全自动洗衣机'],
			'moneny':['¥2,099','¥1,399','¥2,899','¥2,699']
		}
	},
	'电视':{
		'imgs':['//cdn50.ehaier.com/file/5901dff0fac09a46355a541f.png','//cdn50.ehaier.com/file/5901dffbfac09a46355a5422.png','//cdn50.ehaier.com/file/5901e004fac09a46355a5425.png'],
		
		'name':['智能电视','LED电视','4K电视'],
		'right':{
			'img':[],
			'names':[],
			'moneny':[]
		}
	},
	'热水器':{
		'imgs':['//cdn50.ehaier.com/file/5901e01bfac09a46355a542b.png','//cdn50.ehaier.com/file/5901e023fac09a46355a542e.png','//cdn50.ehaier.com/file/5901e02d58e1d9dd9017e0cf.png'],
		'name':['电热水器','燃气热水器','小厨宝'],
		'right':{
			'img':['//cdn50.ehaier.com/file/5977f0b7b70269fe715c1c15.png','//cdn50.ehaier.com/file/5ae96308fac0d058d4bd0d25.png','//cdn50.ehaier.com/file/59eef3d73e7e17179504fa39.png','//cdn50.ehaier.com/file/5ae9636dfac0d058d4bd0d27.png'],
			'names':['EC6003-YT1 60升即热恒温储水式家用电热水器','EC6003-YT1 60升即热恒温储水式家用电热水器','EC8003-MT3(U1) 80升速热储水式WiFi智控家用电热水器','EC8003-MT3(U1) 80升速热储水式WiFi智控家用电热水器'],
			'moneny':['¥2,099','¥1,399','¥2,899','¥2,699']
		}
	},
	'厨房电器':{
		'imgs':['//cdn50.ehaier.com/file/5901e105fac09a46355a543f.png','//cdn50.ehaier.com/file/5901e0ae58e1d9dd9017e0d3.png','//cdn50.ehaier.com/file/5901e0b758e1d9dd9017e0d6.png','//cdn50.ehaier.com/file/5901e0c7fac09a46355a5436.png','//cdn50.ehaier.com/file/5901e0d5fac09a46355a5439.png','//cdn50.ehaier.com/file/5901e0ecfac09a46355a543b.png'],
		'name':['厨房套系','吸油烟机','燃气灶','消毒柜','电烤箱','洗碗机'],
		'right':{
			'img':['//cdn50.ehaier.com/file/5aeaa746fac0d058d4bd0d48.png','//cdn50.ehaier.com/file/5aeaa79258e1a154ad89dea1.png','//cdn50.ehaier.com/shoppingmall-admin-web/navigationrecommendcontroller/image/2019/11/85fd7b0d576948f592d39e04dd5d5801.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/navigationrecommendcontroller/image/2019/11/1996783107394dd083194b0805b4248a.jpg'],
			'names':['E900T6R(T)+QE5B1/欧式/顶吸/4.1KW大火力/天然气','E900C10/侧吸/灵动开合/爆炒/延时','EC202+QE5B1天然气/智慧自清洗/大火力鸳鸯灶','MA3T3+QE5B1天然气/家用顶吸/壁挂式/鸳鸯猛火/烟灶套系'],
			'moneny':['¥2,199','¥1,899','¥4,299','¥2,799']
		}
	},
	'冷柜':{
		'imgs':['//cdn50.ehaier.com/file/5901df3b58e1d9dd9017e0a5.png','//cdn50.ehaier.com/file/5901df4858e1d9dd9017e0a8.png','//cdn50.ehaier.com/file/5901df5358e1d9dd9017e0ab.png','//cdn50.ehaier.com/file/5901df5db70261b69e8882db.png'],
		'name':['冷柜','冰吧','酒柜','展示柜'],
		'right':{
			'img':['//cdn50.ehaier.com/file/5aac86033e7e1384bd89d139.png','//cdn50.ehaier.com/file/59817989fac0b011c31ac979.png','//cdn50.ehaier.com/file/598179b6fac0b011c31ac97b.png','//cdn50.ehaier.com/file/5aac86bd58e111be4c77c5c0.png'],
			'names':['FCD-215SEA 215升大容量冷柜/冷藏冷冻双温 小冰柜 家用商用冰箱','BC/BD-318HD 318升家商用冰箱','BC/BD-102HT 102升家用冷柜 小冰柜冷藏冷冻转换柜 小型迷你冷柜 节能单温冰箱','BC/BD-318HD 318升家商用冰箱'],
			'moneny':['¥1,049','¥1,499','¥749','¥2,699']
		}
	},
	'智能产品':{
		'imgs':['//cdn50.ehaier.com/file/5901e043b70261b69e8882e0.png','//cdn50.ehaier.com/file/5901e04bb70261b69e8882e3.png','//cdn50.ehaier.com/file/5901e06b3e7e3f464c587568.png','//cdn50.ehaier.com/file/5901e083fac09a46355a5431.png','//cdn50.ehaier.com/file/5901e08d58e1d9dd9017e0d1.png'],
		
		'name':['智能洁身器','无线智能充电','智能扫地机','智能私人影院','智能烤箱'],
		'right':{
			'img':[],
			'names':[],
			'moneny':[]
		}
	},
	'净水器':{
		'img':[],
		'name':[],
		'right':{
			'imgs':[],
			'names':[],
			'moneny':[]
		}
	},
	'生活小家电':{
		'imgs':['//cdn50.ehaier.com/file/5901e00958e1d9dd9017e0cc.png','//cdn50.ehaier.com/file/5901e0103e7e3f464c58755f.png','//cdn50.ehaier.com/file/5901e018fac09a46355a5428.png','//cdn50.ehaier.com/file/5901e02c3e7e3f464c587565.png'],
		
		'name':['吸尘器','挂烫机','空气净化器','电风扇'],
		'right':{
			'img':[],
			'names':[],
			'moneny':[]
		}
	},
	'厨房小家电':{
		'imgs':['//cdn50.ehaier.com/file/5901df753e7e3f464c587546.png','//cdn50.ehaier.com/file/5901df8058e1d9dd9017e0b1.png','//cdn50.ehaier.com/file/5901df8b3e7e3f464c58754a.png','//cdn50.ehaier.com/file/5901df943e7e3f464c58754d.png','//cdn50.ehaier.com/file/5901dfa458e1d9dd9017e0bb.png','//cdn50.ehaier.com/file/5901dfaf3e7e3f464c587550.png','//cdn50.ehaier.com/file/5901dfc63e7e3f464c587553.png','//cdn50.ehaier.com/file/5901dfd658e1d9dd9017e0c7.png'],
		
		'name':['多功能料理机','破壁机','榨汁机','奶泡机','搅拌机','多士炉','煮蛋器','微波炉'],
		'right':{
			'img':[],
			'names':[],
			'moneny':[]
		}
	},
}
var brand={
	'洗衣机':{
		
		'clss':['icon icon-xiyiji'],
		'bigimg':['http://cdn21.ehaier.com/file/59c309ee3e7e8bcdb9b3c285.png'],
		'title':['8公斤智能洗烘一体','8公斤iMate8智能变频滚筒洗衣机','8公斤变频双动力波轮洗衣机','9公斤直驱变频波轮洗衣机','10公斤直驱变频滚筒','10公斤洗烘一体变频滚筒洗衣机','10公斤募级水流智能波轮','10公斤大容量变频滚筒洗衣机'],
		'price':['¥2099.00','¥2999.00','¥2899.00','¥1599.00','¥4799.00','¥3499.00','¥1699.00','¥1799.00'],
		'img':['http://cdn22.ehaier.com/file/59a3ae1558e116c813cc0c7c.png','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/9b5128463c8e492bb30ff9538f8a5a82.jpg','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/aa0f6b9aed434586952f55ab73c87a24.jpg','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/f7fe39c9305a4a358514ea0ea5f7ddbb.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/02/788f76bc616a48348303d4e655555a8e.jpg','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/d252c67260e946a9ba8265e57c188de7.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/02/d2726d9ffea04e9398bde61f8f279284.jpg','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/709fd02bbe094db8a8ad0addd7dd418a.jpg']
	},
	'冰箱':{
		'clss':['icon icon-bingxiang'],
		'bigimg':['http://cdn22.ehaier.com/file/5a7031e93e7e93959ca2769a.png'],
		'title':['470升全空间保鲜十字对开','335升法式彩晶变频多门','258升干湿分储静谧','卡萨帝629升十字对开','651升全空间保鲜对开门','440升全空间保鲜四门冰箱','329升静谧金全空间保鲜','531升智能十字对开双变频冰箱'],
		'price':['¥4099.00','¥3699.00','¥2599.00','¥9999.00','¥4699.00','¥5199.00','¥3199.00','¥4399.00'],
		'img':['http://cdn21.ehaier.com/file/59a3ac4a58e116c813cc0c73.png','http://cdn21.ehaier.com/file/5a12b1a2b70259571863c3cf.png','http://cdn22.ehaier.com/file/5a7034fcfac038c4b9c76451.png','http://cdn22.ehaier.com/file/5b04dd08fac04b66d0b403dd.png','http://cdn21.ehaier.com/file/5a6acd69b702e15fd420a18e.png','http://cdn22.ehaier.com/file/5b04dd42b702481a6ffe2986.png','http://cdn22.ehaier.com/file/59a3adc758e116c813cc0c76.png','http://cdn21.ehaier.com/file/5b04de1258e1284453bd8213.png']
		
	},
	'空调':{
		'clss':['icon icon-air-condition'],
		'bigimg':['http://cdn21.ehaier.com/file/59c30a3a3e7e8bcdb9b3c288.png'],
		'title':['1.5匹海尔智能变频空调','1.5匹内机自清洁挂式空调','1.5匹自清洁一级能效空调','2匹大风量挂式空调','卡萨帝天玺空调','3匹变频一键自清洁','2匹智能帝樽空调','御樽2匹变频柜机'],
		'price':['¥2099.00','¥2999.00','¥3399.00','¥4999.00','¥36999.00','¥759900','¥4799.00','¥8599.00'],
		'img':['http://cdn21.ehaier.com/file/5af01724fac0d058d4bd0daa.png','http://cdn21.ehaier.com/file/5b091d2758e1284453bd82ee.png','http://cdn22.ehaier.com/file/5b064c08fac04b66d0b40427.png','http://cdn22.ehaier.com/file/5b091dd558e1284453bd82f1.png','http://cdn22.ehaier.com/file/5b07d4f6b702481a6ffe2a48.png','http://cdn22.ehaier.com/file/59a3b51358e116c813cc0c8e.png','http://cdn22.ehaier.com/file/59a3b637b7021e41193dae18.png','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/07/9990517a86f74d77af7335beab28a384.jpg']
		
	},
	'彩电':{
		'clss':['icon icon-television20'],
		'bigimg':['//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/05/c771e0c965c741c89f8a6f3eccf17a39.jpg'],
		'title':['58英寸4K屏幕，真4K观影体验，高性能ARM64位cortexA53处理器，手机也能遥控，方便自如，投屏互动分享精彩，丰富教育课程。','55英寸4K超高清曲面电视，OD20纤薄机身，语音遥控，蓝牙连接','65英寸4K超高清超薄 人工智能 语音遥控 超窄边框LED液晶电视2+16G','50英寸4K超高清智能 全新人工智能 语音操控 360°立体环绕音 2G+16G超大内存','55英寸4K超高清智能 全新人工智能 语音操控 360°立体环绕音 2G+16G超大内存','70英寸4K高清大屏电视，YUNOS智能系统，32G大储存，语音遥控控制，丰富影视资源','高清画质 智能网络 丰富资源','32英寸流媒体高清液晶电视，广色域A+屏，色彩丰富鲜艳，画面真实；高清画质增强技术，画质更清晰；高清数字降噪技术，色彩更艳丽；多重声音处理技术，360°环绕影音，打造影院级真实体验。两种底座外观随机发货。'],
		'price':['¥2099.00','¥2999.00','¥3399.00','¥4999.00','¥36999.00','¥759900','¥4799.00','¥8599.00'],
		'img':['//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/05/2346ee0a781b4a0b9d392a78ef4fd17a.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/05/20f871c8480e4e53b31e54b70487668b.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/06/7bc2e6298fde48a0850f71451413ebc6.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/06/eeb446005aae412283c38088726b0ecb.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/06/fbd91962cd474679a6aa6d440ec0be82.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/05/0d2f5e37e2724d5a9b0ee24f34770fc9.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/06/2fc2e8db2ebc46db83b3d9ea99e53c0e.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/05/b2249abb7e954f1dafc28b20fff9093f.jpg']
	},
	'热水器':{
		'clss':['icon icon-distilled-faucet-filter-osmosis-tap-water'],
		'bigimg':['http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/13f35777321342a6836a3728f841db83.jpg'],
		'title':['60升健康抑菌一级能效','60升水温恒定预约洗','80升变频速热型电热水器','60升3D速热型防电墙电热水器','16升抑菌静音燃气热水器','13升水气双调燃气热水器','12升专利安防智能恒温','13升智能变升家用燃气热水器'],
		'price':['¥1299.00','¥999.00','¥1399.00','¥2199.00','¥1499.00','¥1999.00','¥1899.00','¥1799.00'],
		'img':['http://cdn21.ehaier.com/file/59a3b834b7021e41193dae1e.png','http://cdn22.ehaier.com/file/59a3b85e3e7e45ae86e06579.png','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/ee4de9df4e9349d8be75054b8cf9097e.jpg','http://cdn22.ehaier.com/file/5a9765a3b702e1798d9947cf.png','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/5c7508e7f0a5491c9e0553bc1752d178.jpg','http://cdn22.ehaier.com/file/5a976510fac0390ee9ac7aaa.png','http://cdn22.ehaier.com/file/59a661d93e7ec55fb176ad04.png','http://cdn21.ehaier.com/file/5b0666cf3e7e48ffc5a22d01.png']
		
	},
	'厨电':{
		'clss':['icon icon-television20'],
		'bigimg':['http://cdn21.ehaier.com/file/59b4d0afb7029acece06fc0a.png'],
		'title':['17立方大风量 瞬吸速排 双层油网 WIFI互联 4.5Kw大火力 瞬燃点火','20m³/min爆炒大风量 U+智能远程控制 宽幅锁烟 鸳鸯猛火','自净芯烟机+大火力灶具','自净芯自清洗+大火力鸳鸯灶','20m³/min爆炒大风量 灵动自开合 宽幅锁烟 鸳鸯猛火4.1KW','宽距侧吸 大显风范 精致不锈钢装饰罩搭配五重防爆玻璃面板灶具','海尔侧吸吸油烟机燃气灶套餐，灵动自开合，20m³/min爆炒大风量，3分钟延时关机；大火力鸳鸯灶，五重防爆钢化玻璃','海尔嵌入式消毒柜，消毒存储二合一，光波巴氏消毒，纯物理绿色消毒技术，环保健康，呵护珍贵餐具'],
		'price':['¥1479.00','¥2279.00','¥1779.00','¥1979.00','¥1979.00','¥1229.00','¥2219.00','¥989.00'],
		'img':['//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/2d5e22913ca1406e89c371fd3b246aac.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/652f4db63457447788148f7481624829.jpg','http://cdn21.ehaier.com/file/5a27b9c33e7e0bb70d7d247d.png','http://cdn21.ehaier.com/file/5a27bb323e7e0bb70d7d2480.png','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/fff96856a8624530a602e6e718d68d24.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/6249f69d91094b2f882f71d9e327f289.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/f20b43e0b8b94f1baf0e1d44ebea80ed.jpg','//cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2019/09/8aa30f2181a84c6b8732702bbbce9458.jpg']
	},
	'冷柜':{
		'clss':['icon icon-christmas-christmastree-decoration-ornament-snowflake-xmas'],
		'bigimg':['http://cdn21.ehaier.com/file/5a9129133e7eec8469df6574.png'],
		'title':['102升彩晶低霜家用小冰柜','331开圆弧玻璃门冷藏冷冻转换柜','151升智能无霜立式冷柜','518大i力用大容量','卡萨帝366升博芬系列酒柜','52瓶精准控温酒柜','20升梯度变温冰吧','242升高效节能冷藏展示柜'],
		'price':['¥1099.00','¥2299.00','¥2599.00','¥2849.00','¥10999.00','¥2599.00','¥1349.00','¥2299.00'],
		'img':['http://cdn22.ehaier.com/file/5b064d1858e1284453bd8276.png','http://cdn21.ehaier.com/file/5b065d57b702481a6ffe29e9.png','http://cdn21.ehaier.com/file/5b065b4ffac04b66d0b40433.png','http://cdn21.ehaier.com/file/5b065eeb3e7e48ffc5a22cf9.png','http://cdn21.ehaier.com/file/5b065c8158e1284453bd8279.png','http://cdn21.ehaier.com/file/59a3bbd5b7021e41193dae25.png','http://cdn21.ehaier.com/file/59a3bbf0b7021e41193dae28.png','http://cdn21.ehaier.com/file/59a3bc0cb7021e41193dae2b.png']
	},
	'生活家电':{
		'clss':['icon icon-appliances-fan'],
		'bigimg':['http://cdn21.ehaier.com/file/59a08e8db70281d2275b1fad.png'],
		'title':['6级吸附过滤空气净化器','恒温即热智能洁身器','美国陶氏RO膜，智能WiF','海尔电饭煲','m92000W快速熨烫 10档清新护理','新品家用蒸汽挂烫机手持式熨斗烫衣服','无桶大通量，无泵静音','海尔施特劳斯净水机'],
		'price':['¥999.00','¥1499.00','¥1899.001','¥199.000','¥258.00','¥198.00','¥1189.00','¥6999.00'],
		'img':['http://cdn22.ehaier.com/file/59a3be85fac0ebbd61bece28.png','http://cdn21.ehaier.com/file/59a3be98fac0ebbd61bece2b.png','http://cdn22.ehaier.com/file/5a0c1b16b70259571863c34e.png','http://cdn50.ehaier.com/shoppingmall-admin-web/indexmanagcontroller/image/2018/09/f9fef86b9f67420e99f8e1e65256622c.jpg','http://cdn22.ehaier.com/file/5a13fd2afac0e37eb4b1cce4.png','http://cdn22.ehaier.com/file/5a13fce5fac0e37eb4b1cce1.png','http://cdn21.ehaier.com/file/5a0c1b49b70259571863c351.png','http://cdn21.ehaier.com/file/5ac9f83efac0f6c70c9d713b.png']
		
	}
}
function jiance(){
	var user=localStorage.getItem('userInformation');
	if(user != null){
		//已经登录了
		user.split('分')
		var lowCity= document.querySelectorAll('.you-position ul li');
		
		lowCity[0].innerHTML=
		`
		<p >
			欢迎您
			<i>${user.split('分')[0]}</i>
			<i>退出</i>
		</p>
		`
		lowCity[1].style.opacity=0;
		lowCity[2].style.opacity=0;
	}
}
jiance();
function fx(){
	//获取×的span
	var cha=document.querySelector('.cha');
	var zhe=document.querySelector('.one-zhe');
	//给他添加点击事件
	cha.onclick=function(){
		zhe.style.display='none';
	}
	//获取本地城市并添加点击事件
	var lowCity=document.querySelector('.low-city');
	lowCity.onclick=function(){
		zhe.style.display='block';
		abiao();
	}
	//获取Merchant（商户）
	var Merchant=document.querySelector('.Merchant');
	//给Merchant添加鼠标移入事件
	Merchant.onmouseenter=function(){
		//获取他的最后一个a标签子元素
		var chile=Merchant.lastElementChild;
		chile.style.display='block';
		Merchant.style.border='1px solid #999999';
		Merchant.style.background="#FFFFFF";
	}
	Merchant.onmouseleave=function(){
		//获取他的最后一个a标签子元素
		var chile=Merchant.lastElementChild;
		chile.style.display='none';
		Merchant.style.border='none';
		Merchant.style.background="none";
	}
}
fx();
function abiao(){
	var zhe=document.querySelector('.one-zhe');
	//获取本地城市
	var lowCity=document.querySelector('.low-city');
	//获取所有dd下的a标签并添加点击事件
	var aS=document.querySelectorAll('dd a');
	//给所有的a标签添加点击事件
	for(var i=0;i<aS.length;i++){
		aS[i].onclick=function(){
			lowCity.innerHTML =this.innerHTML.substr(0,2);
			zhe.style.display='none';
			
		}
	}
}
var contentContentx=document.querySelectorAll('.content-content ul li');
moveex(contentContentx,'right',15,10);
function moveex(lis,direction,num,numTwo){
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.lastElementChild.firstElementChild.style[direction]=num+'px';
		}
		lis[i].onmouseleave=function(){
			this.lastElementChild.firstElementChild.style[direction]=numTwo+'px';
		}
	}
}
//将节点转化为字符串的包装函数
function nodeToString(node){  
    //createElement()返回一个Element对象
   var tmpNode = document.createElement( "div" ); 
   //appendChild()  参数Node对象   返回Node对象  Element方法
   //cloneNode()  参数布尔类型  返回Node对象   Element方法
   tmpNode.appendChild( node.cloneNode( true ) );  
   var str = tmpNode.innerHTML;  
   tmpNode = node = null; // prevent memory leaks in IE  
   return str;  
  } 

//搜索框数据渲染
function fn(){
	//获取搜索框的内容
	var cont=document.querySelector('.content-input');
	//获取ul
	var ul=document.querySelector('.search-box');
	
	//给input框添加点击事件
	cont.onclick=function(){
		//让ul显示
		cont.placeholder='';
		var sta=''
		ul.style.display='block';
		for(var i=0;i<dat['hot'].name.length;i++){
			sta +='<li>'+
					 '<span>'+dat['hot'].name[i]+'</span>'+
					 '<span>约'+dat['hot'].nuber[i]+'个商品</span>'+
				  '</li>'
		}
		ul.style.height=dat['hot'].name.length*22.4+'px';
		ul.innerHTML=sta;
		//解决事件冲突问题
		event.cancelBubble='true';
	}
	//oninput事件
	oninput=function (){
		sta=''
		for(var arrt in dat){
			//判断cont和数据的那些相同
			if(arrt == cont.value){
				//设置ul的高度
				ul.style.height=dat[cont.value].name.length*22.4+'px';
				
				//通过cont.value在数据中取值
				for(var i=0;i<dat[cont.value].name.length;i++){
					sta +='<li>'+
							 '<span>'+dat[cont.value].name[i]+'</span>'+
							 '<span>约'+dat[cont.value].nuber[i]+'个商品</span>'+
						  '</li>'
				}
				ul.innerHTML=sta;
			}else{
				//判断input框的内容在数据里面是否存在 若存在则显示，若不存在则隐藏
				if(dat[cont.value]){
					ul.style.overflow='visible';
				}else{
					ul.style.overflow='hidden';
					ul.style.height=0;
				}
			}
		} 
	}
	//获取Search盒子 添加点击事件让ul消失
	var Search=document.querySelector('body');
	Search.onclick=function(){
		ul.style.display='none';
	}
}
fn();



//渲染左边导航栏
function fm(){
	//获取sideNavigation
	var sideNavigation=document.querySelector('.sideNavigation');
	//获取sideNavigation-left下的ul
	var uls=document.querySelector('.sideNavigation-left ul');
	//获取sideNavigation-box下left的ul
	var box=document.querySelector('.sideNavigation-box .left ul');
	//获取sideNavigation-box下right下的ul
	var boxTwo=document.querySelector('.sideNavigation-box .right ul');
	//定义一个储存的变量
	var str='',strr='',sttr='';
	//获取nav-columns
	var navColumns=document.querySelector('.nav-columns');
	var aaaa=navColumns.querySelector('a');
	var sideNavigationLeft=document.querySelector('.sideNavigation-left');
	var sideNavigationRight=document.querySelector('.sideNavigation-right');
	var sideNavigationRightLeft=sideNavigationRight.querySelector('.left');
	var sideNavigationRightRight=sideNavigationRight.querySelector('.right');
	//sideNavigationLeft下ul添加鼠标悬浮事件
	var u=sideNavigationLeft.querySelector('ul');
	sideNavigation.style.display='none';
	for(var attr in wuping){
		str += '<li>'+
				'<a href="">'+attr+'</a>'+
				'<span class="glyphicon glyphicon-menu-right"></span>'+
			 ' </li>';
	}
	uls.innerHTML =str;
	//添加事件
	aaaa.onmouseenter=function(){
		uls.innerHTML ='';
		//通过for循环在ul中加入li
		/* event.cancelBubble='true'; */
		//获取sideNavigation-left
		sideNavigation.style.display='block';
		sideNavigationLeft.style.display='block';
		str='';
		for(var attr in wuping){
			str += '<li>'+
					'<a href="javascript:;">'+attr+'</a>'+
					'<span class="glyphicon glyphicon-menu-right"></span>'+
				 ' </li>';
		}
		//将str写入uls中
		uls.innerHTML =str;
		
	}
	//获取li并给里添加鼠标悬浮事件
	
	u.onmouseenter=function(){
		var lis =uls.querySelectorAll('li');
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseenter=function(){
				//获取this下的a标签
				var as=this.querySelector('a');
				//通过as获取数据里面的数据并渲染到left中
				strr='';
				//判断wuping[as.innerHTML].name.length是否为0，为0则不显示
				if(wuping[as.innerHTML].name.length !=0){
					sideNavigationRight.style.display='block';
					sideNavigationRightLeft.style.display='block';
					for(var j=0;j<wuping[as.innerHTML].name.length;j++){
						strr +='<li>'+
								' <a href="#">'+
									 '<img src="'+wuping[as.innerHTML].imgs[j]+'" >'+
									  wuping[as.innerHTML].name[j] +
								 '</a>'+
							   '</li>'
					}
				}else{
					//获取sideNavigation-right
					sideNavigationRight.style.display='none';
				}
				box.innerHTML=strr;
				//判断right下的name是否为空为空就不显示不为空就加载数据
				if(wuping[as.innerHTML].right.names.length != 0){
					sideNavigationRight.style.width=447+'px';
					sideNavigationRightRight.style.display='block';
					sttr='';
					for(var i=0;i<wuping[as.innerHTML].right.names.length;i++){
						sttr +='<li>'+
								'<p>'
						if(i%2){
							sttr +='<span style="background: #FFFFFF;"></span>'
						}else{
							sttr +=(i==0?'<span>限时优惠</span>':'<span style="background: blue;">最新单品</span>')
						}
						sttr +=	'</p>'+
								'<a href="#">'+
									'<img src="'+wuping[as.innerHTML].right.img[i]+'" >'+
									'<div>'+
										'<span>'+wuping[as.innerHTML].right.names[i]+'</span>'+
										'<span>'+wuping[as.innerHTML].right.moneny[i]+'</span>'+
									'</div>'+
								'</a>'+
							   '</li>'
					}
					boxTwo.innerHTML = sttr;
				}else{
					sideNavigationRight.style.width=207+'px';
					sideNavigationRightRight.style.display='none';
				}
			}
		}
	}
	
	sideNavigation.onmouseleave=function(){
		sideNavigationRight.style.display='none';
		//下拉列表不消失
		/* sideNavigation.style.display='none'; */
		//sideNavigationRightRight.style.display='none';
		//sideNavigationRightLeft.style.display='none';
	}
	
	
	//通过事件监听给nav-columns添加鼠标移入移出事件sideNavigation-left
	navColumns.addEventListener('mouseenter',function(){
		sideNavigation.style.display='block';
	})
	navColumns.addEventListener('mouseleave',function(){
		sideNavigation.style.display='none';
	})
}
fm();
function retur(){
	var returntotheTop=document.querySelector('.return-to-the-top')
	returntotheTop.addEventListener('click',function(){
		//获取滚动条的位置
		var page=window.pageYOffset;
		//开启定时器
		var timer = setInterval(function(){
			if(page<=0){
				clearInterval(timer);
			}else{
				page -=100;
				window.scrollTo(0,page);
			}
		},10)
	})
}
retur();

//点击退出
function tuichu(){
	var topSpan=document.querySelector('.glyphicon-map-marker');
	
	var tuichu = topSpan.nextElementSibling.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
	tuichu.onclick=function(){
		localStorage.removeItem('userInformation');
		localStorage.removeItem('dizhi');
		localStorage.removeItem('shuju');
		localStorage.removeItem('shangping');
		history.go(0);
	}
}
tuichu()