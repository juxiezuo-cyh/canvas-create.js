(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

	// library properties:
	lib.properties = {
		width: 750,
		height: 1206,
		fps: 30,
		color: "#FFFFFF",
		loadfest: [
			{ src: "images/_1_0000s_0002_shou.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0000s_0002_shou.png*/, id: "_1_0000s_0002_shou" },
			{ src: "images/_1_0009_lian02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0009_lian02.png*/, id: "_1_0009_lian02" },
			{ src: "images/_1_0010_lian01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0010_lian01.png*/, id: "_1_0010_lian01" },
			{ src: "images/_9527_0011_yan03.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0011_yan03.png*/, id: "_9527_0011_yan03" },
			{ src: "images/_9527_0012_yan02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0012_yan02.png*/, id: "_9527_0012_yan02" },
			{ src: "images/_9527_0013_yan01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0013_yan01.png*/, id: "_9527_0013_yan01" },
			{ src: "images/fl02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/fl02.png*/, id: "fl02" },
			{ src: "images/jindutiao01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/jindutiao01.png*/, id: "jindutiao01" },
			{ src: "images/jindutiao02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/jindutiao02.png*/, id: "jindutiao02" },
			{ src: "images/pc_0010_jiao.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/pc_0010_jiao.png*/, id: "pc_0010_jiao" }
		],
		manifest: [
			{ src: "images/_1_0000s_0002_shou.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0000s_0002_shou.png*/, id: "_1_0000s_0002_shou" },
			{ src: "images/_1_0009_lian02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0009_lian02.png*/, id: "_1_0009_lian02" },
			{ src: "images/_1_0010_lian01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_1_0010_lian01.png*/, id: "_1_0010_lian01" },
			{ src: "images/_9527_0011_yan03.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0011_yan03.png*/, id: "_9527_0011_yan03" },
			{ src: "images/_9527_0012_yan02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0012_yan02.png*/, id: "_9527_0012_yan02" },
			{ src: "images/_9527_0013_yan01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/_9527_0013_yan01.png*/, id: "_9527_0013_yan01" },
			{ src: "images/bianti4.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/bianti4.png*/, id: "bianti4" },
			{ src: "images/biantsi3.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/biantsi3.png*/, id: "biantsi3" },
			{ src: "images/biaoti2.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/biaoti2.png*/, id: "biaoti2" },
			{ src: "images/boom.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/boom.png*/, id: "boom" },
			{ src: "images/changan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/changan.png*/, id: "changan" },
			{ src: "images/chuan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/chuan.png*/, id: "chuan" },
			{ src: "images/diaosinixi.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/diaosinixi.png*/, id: "diaosinixi" },
			{ src: "images/erweima.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/erweima.png*/, id: "erweima" },
			{ src: "images/fl02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/fl02.png*/, id: "fl02" },
			{ src: "images/guanzhu.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/guanzhu.png*/, id: "guanzhu" },
			{ src: "images/hehe.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/hehe.png*/, id: "hehe" },
			{ src: "images/high.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/high.png*/, id: "high" },
			{ src: "images/huoguo.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/huoguo.png*/, id: "huoguo" },
			{ src: "images/ji.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/ji.png*/, id: "ji" },
			{ src: "images/jindutiao01.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/jindutiao01.png*/, id: "jindutiao01" },
			{ src: "images/jindutiao02.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/jindutiao02.png*/, id: "jindutiao02" },
			{ src: "images/li.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/li.png*/, id: "li" },
			{ src: "images/logo5.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/logo5.png*/, id: "logo5" },
			{ src: "images/meng.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/meng.png*/, id: "meng" },
			{ src: "images/nadaoshouruan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/nadaoshouruan.png*/, id: "nadaoshouruan" },
			{ src: "images/nerrong4.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/nerrong4.png*/, id: "nerrong4" },
			{ src: "images/nrigong2.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/nrigong2.png*/, id: "nrigong2" },
			{ src: "images/nriong4.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/nriong4.png*/, id: "nriong4" },
			{ src: "images/pc_0010_jiao.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/pc_0010_jiao.png*/, id: "pc_0010_jiao" },
			{ src: "images/ptlogo.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/ptlogo.png*/, id: "ptlogo" },
			{ src: "images/ren3.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/ren3.png*/, id: "ren3" },
			{ src: "images/ren4.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/ren4.png*/, id: "ren4" },
			{ src: "images/shandian.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/shandian.png*/, id: "shandian" },
			{ src: "images/song.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/song.png*/, id: "song" },
			{ src: "images/wande.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/wande.png*/, id: "wande" },
			{ src: "images/wanzhuan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/wanzhuan.png*/, id: "wanzhuan" },
			{ src: "images/x11.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x11.png*/, id: "x11" },
			{ src: "images/x12.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x12.png*/, id: "x12" },
			{ src: "images/x21.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x21.png*/, id: "x21" },
			{ src: "images/x222.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x222.png*/, id: "x222" },
			{ src: "images/x41.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x41.png*/, id: "x41" },
			{ src: "images/x42.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x42.png*/, id: "x42" },
			{ src: "images/x43.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x43.png*/, id: "x43" },
			{ src: "images/x44.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/x44.png*/, id: "x44" },
			{ src: "images/xian.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/xian.png*/, id: "xian" },
			{ src: "images/xiezi.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/xiezi.png*/, id: "xiezi" },
			{ src: "images/yiguoduan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/yiguoduan.png*/, id: "yiguoduan" },
			{ src: "images/zhandan.png"/*tpa=http://www.ajexoop.com/demo/pingtai/images/zhandan.png*/, id: "zhandan" }
		]
	};



	// symbols:



	(lib._1_0000s_0002_shou = function () {
		this.initialize(img._1_0000s_0002_shou);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 133, 151);


	(lib._1_0009_lian02 = function () {
		this.initialize(img._1_0009_lian02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 106, 64);


	(lib._1_0010_lian01 = function () {
		this.initialize(img._1_0010_lian01);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 110, 82);


	(lib._9527_0011_yan03 = function () {
		this.initialize(img._9527_0011_yan03);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 113, 135);


	(lib._9527_0012_yan02 = function () {
		this.initialize(img._9527_0012_yan02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 103, 126);


	(lib._9527_0013_yan01 = function () {
		this.initialize(img._9527_0013_yan01);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 94, 127);


	(lib.bianti4 = function () {
		this.initialize(img.bianti4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 620, 282);


	(lib.biantsi3 = function () {
		this.initialize(img.biantsi3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 627, 285);


	(lib.biaoti2 = function () {
		this.initialize(img.biaoti2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 619, 281);


	(lib.boom = function () {
		this.initialize(img.boom);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 729, 527);


	(lib.changan = function () {
		this.initialize(img.changan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 481, 35);


	(lib.chuan = function () {
		this.initialize(img.chuan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 41);


	(lib.diaosinixi = function () {
		this.initialize(img.diaosinixi);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 300, 245);


	(lib.erweima = function () {
		this.initialize(img.erweima);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 307, 303);


	(lib.fl02 = function () {
		this.initialize(img.fl02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 100, 97);


	(lib.guanzhu = function () {
		this.initialize(img.guanzhu);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 101, 496);


	(lib.hehe = function () {
		this.initialize(img.hehe);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 686, 126);


	(lib.high = function () {
		this.initialize(img.high);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 340, 113);


	(lib.huoguo = function () {
		this.initialize(img.huoguo);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 577, 588);


	(lib.ji = function () {
		this.initialize(img.ji);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 41);


	(lib.jindutiao01 = function () {
		this.initialize(img.jindutiao01);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 238, 12);


	(lib.jindutiao02 = function () {
		this.initialize(img.jindutiao02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 238, 12);


	(lib.li = function () {
		this.initialize(img.li);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 41);


	(lib.logo5 = function () {
		this.initialize(img.logo5);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 199, 69);


	(lib.meng = function () {
		this.initialize(img.meng);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 333, 426);


	(lib.nadaoshouruan = function () {
		this.initialize(img.nadaoshouruan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 318, 144);


	(lib.nerrong4 = function () {
		this.initialize(img.nerrong4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 560, 172);


	(lib.nrigong2 = function () {
		this.initialize(img.nrigong2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 679, 118);


	(lib.nriong4 = function () {
		this.initialize(img.nriong4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 644, 128);


	(lib.pc_0010_jiao = function () {
		this.initialize(img.pc_0010_jiao);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 21, 10);


	(lib.ptlogo = function () {
		this.initialize(img.ptlogo);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 288, 100);


	(lib.ren3 = function () {
		this.initialize(img.ren3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 628, 556);


	(lib.ren4 = function () {
		this.initialize(img.ren4);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 684, 497);


	(lib.shandian = function () {
		this.initialize(img.shandian);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 35, 95);


	(lib.song = function () {
		this.initialize(img.song);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 39, 41);


	(lib.wande = function () {
		this.initialize(img.wande);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 612, 193);


	(lib.wanzhuan = function () {
		this.initialize(img.wanzhuan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 92, 494);


	(lib.x11 = function () {
		this.initialize(img.x11);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 59);


	(lib.x12 = function () {
		this.initialize(img.x12);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 59);


	(lib.x21 = function () {
		this.initialize(img.x21);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 58);


	(lib.x222 = function () {
		this.initialize(img.x222);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 27, 38);


	(lib.x41 = function () {
		this.initialize(img.x41);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 22, 29);


	(lib.x42 = function () {
		this.initialize(img.x42);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 30, 52);


	(lib.x43 = function () {
		this.initialize(img.x43);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 39, 62);


	(lib.x44 = function () {
		this.initialize(img.x44);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 31, 47);


	(lib.xian = function () {
		this.initialize(img.xian);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 189, 185);


	(lib.xiezi = function () {
		this.initialize(img.xiezi);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 326, 101);


	(lib.yiguoduan = function () {
		this.initialize(img.yiguoduan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 120, 194);


	(lib.zhandan = function () {
		this.initialize(img.zhandan);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 716, 484);


	(lib.zhandan_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.zhandan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 716, 484);


	(lib.yiguoduan_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.yiguoduan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 120, 194);


	(lib.xiezi_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.xiezi();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 326, 101);


	(lib.xian_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.xian();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 189, 185);


	(lib.x44_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x44();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 31, 47);


	(lib.x43_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x43();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 39, 62);


	(lib.x42_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x42();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 30, 52);


	(lib.x41_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x41();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 22, 29);


	(lib.x22 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x222();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 27, 38);


	(lib.x21_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x21();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 58);


	(lib.x12_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x12();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 59);


	(lib.x11_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.x11();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 59);


	(lib.wanzhuan_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.wanzhuan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 92, 494);


	(lib.wande_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.wande();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 612, 193);


	(lib.song_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.song();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 39, 41);


	(lib.shandian_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.shandian();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 35, 95);


	(lib.ren4_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.ren4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 684, 497);


	(lib.ren3_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.ren3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 628, 556);


	(lib.ptlogo_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.ptlogo();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 288, 100);


	(lib.nrigong3 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.nriong4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 644, 128);


	(lib.nrigfong2 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.nrigong2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 679, 118);


	(lib.neirong4 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.nerrong4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 560, 172);


	(lib.nadashouruan = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.nadaoshouruan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 318, 144);


	(lib.meng_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.meng();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 333, 426);


	(lib.logo = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.logo5();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 199, 69);


	(lib.li_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.li();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 41);


	(lib.ji_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.ji();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 43, 41);


	(lib.huoguo_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.huoguo();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 577, 588);


	(lib.high_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.high();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 340, 113);


	(lib.heheh = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.hehe();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 686, 126);


	(lib.guanzhu_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.guanzhu();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 101, 496);


	(lib.erweima_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.erweima();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 307, 303);


	(lib.diaosinixi_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.diaosinixi();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 300, 245);


	(lib.chuan_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.chuan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 42, 41);


	(lib.changan_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.changan();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 481, 35);


	(lib.boom_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.boom();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 729, 527);


	(lib.biaoti3 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.biantsi3();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 627, 285);


	(lib.biaoti2_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.biaoti2();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 619, 281);


	(lib.bianti4_1 = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.bianti4();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 620, 282);


	(lib.ren = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// juhua
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#010001").s().p("AkxGoIgGgRQgFgLAAgSQAAgIAAgGQADgLAGAEQAHACgBAIIgDAOQAAAPALARIAKARQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgDADgEAAQgHAAgGgNgAnJCSQgVgZAAgSQAAgGAGgJQAFgJABANQAAATACAFQADAQAxAeQAKAAAJgCQALAAgBAHQAAAEgIACQgHACgJAAQgZAAgZgdgAGrCqIAAgDQAAgEAIgEIAAgBIgBgEIAOgQQAPgTABgMIAAgRIAAgIQAAgQAIALQAHALAAAMQgVBJgYAAQgFAAgCgDgAmljTIgBgZIAAgVQACgJAHgFQAHgGAAANIgDAcIABAXIAFALQAFAHAGABQAEABAAACIgBAEQgCACgHAAQgSAAgFgagAGDjRQAAgDAEgJIADgMIgCgXQAAgPAHANQAIANAAAKQgDAigJAAQgIAAAAgIgAEqlgIgBgDQAAgGAOgUQAMgTgBgHQgCgRAEgHQAKgPABAiQgRA/gPAAQgEAAgBgDg");
		this.shape.setTransform(-20.8, -69.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#09090B").ss(1.5, 1, 1).p("AF0lQIAPAQAGDkkQAeAigeAkAmRC0IAAAaAmKETQAZBPARgX");
		this.shape_1.setTransform(-28.7, -84.7);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#010001").s().p("AgPApIgBgEQAAgFALgSQAJgRAAgIIgCgXQAAgIADgCQAEgCAFANQADANAAAJQAAALgMAWQgJAXgFAAQgFAAgBgEg");
		this.shape_2.setTransform(19.6, -47.4);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 5).to({ state: [{ t: this.shape }] }, 5).wait(39));

		// lian
		this.instance = new lib._1_0010_lian01();
		this.instance.setTransform(-42.3, -86.8, 0.5, 0.5);

		this.instance_1 = new lib._1_0009_lian02();
		this.instance_1.setTransform(-41.2, -82, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 23).wait(26));

		// yan
		this.instance_2 = new lib._9527_0013_yan01();
		this.instance_2.setTransform(8, -119.7, 0.5, 0.5);

		this.instance_3 = new lib._9527_0012_yan02();
		this.instance_3.setTransform(12.7, -123.2, 0.5, 0.5);

		this.instance_4 = new lib._9527_0011_yan03();
		this.instance_4.setTransform(11.8, -127.7, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_2 }] }, 23).to({ state: [{ t: this.instance_3 }] }, 5).to({ state: [{ t: this.instance_4 }] }, 5).to({ state: [] }, 5).wait(11));

		// ren
		this.instance_5 = new lib._1_0000s_0002_shou();
		this.instance_5.setTransform(-70.5, -125);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49));

		// jiao
		this.instance_6 = new lib.pc_0010_jiao();
		this.instance_6.setTransform(38.7, 2.8, 1, 1, -15);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#280D08").s().p("AgdArQAAgJAGgBIAFACIADAEQAAADgGAEIgHABQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBgAgYAbIAAgDIABAAIAIAAQAHAAAFADIAAACQgBABgHAAIgMABIAAABQgBAAAAgFgAgHAOQAGgHADAEQAEACAMAKQAAADgDACQgEgBgSgNgAAJABIgBAAQgCgBAAgDIABAAIgBgBQAEgCAFACIAJADIAGABIgCABQgEACgGAAQgHAAgCgCgAgMgkIABgBIgBgDQACgDAEACIADgCQAHgEAEACQgHALgLACIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
		this.shape_3.setTransform(61.5, 9.2);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_6 }] }).to({ state: [{ t: this.shape_3 }, { t: this.instance_6 }] }, 5).to({ state: [{ t: this.instance_6 }] }, 5).to({ state: [{ t: this.shape_3 }, { t: this.instance_6 }] }, 13).to({ state: [{ t: this.instance_6 }] }, 5).to({ state: [{ t: this.shape_3 }, { t: this.instance_6 }] }, 5).to({ state: [{ t: this.instance_6 }] }, 5).to({ state: [{ t: this.shape_3 }, { t: this.instance_6 }] }, 5).to({ state: [{ t: this.instance_6 }] }, 5).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({ rotation: 0, x: 40.7, y: 1 }, 0).wait(5).to({ rotation: -15, x: 38.7, y: 2.8 }, 0).wait(13).to({ rotation: 0, x: 40.7, y: 1 }, 0).wait(5).to({ rotation: -15, x: 38.7, y: 2.8 }, 0).wait(5).to({ rotation: 0, x: 40.7, y: 1 }, 0).wait(5).to({ rotation: -15, x: 38.7, y: 2.8 }, 0).wait(5).to({ rotation: 0, x: 40.7, y: 1 }, 0).wait(5).to({ rotation: -15, x: 38.7, y: 2.8 }, 0).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-70.5, -125, 133, 151);


	(lib.jiazai = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_0 = new cjs.Graphics().p("A0nHGIAAjFMApPAAAIAADFg");
		var mask_graphics_3 = new cjs.Graphics().p("A0mHBIAAjGMApOAAAIAADGg");
		var mask_graphics_6 = new cjs.Graphics().p("A0mHBIAAjGMApNAAAIAADGg");
		var mask_graphics_9 = new cjs.Graphics().p("A0mHCIAAjFMApOAAAIAADFg");
		var mask_graphics_12 = new cjs.Graphics().p("A0nHGIAAjGMApOAAAIAADGg");
		var mask_graphics_15 = new cjs.Graphics().p("A0nHGIAAjGMApOAAAIAADGg");
		var mask_graphics_18 = new cjs.Graphics().p("A0nHGIAAjGMApPAAAIAADGg");

		this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: mask_graphics_0, x: -12, y: 45.5 }).wait(3).to({ graphics: mask_graphics_3, x: -55.6, y: 45 }).wait(3).to({ graphics: mask_graphics_6, x: -49.1, y: 45 }).wait(3).to({ graphics: mask_graphics_9, x: -42, y: 45.1 }).wait(3).to({ graphics: mask_graphics_12, x: -36.7, y: 45.4 }).wait(3).to({ graphics: mask_graphics_15, x: -30, y: 45.4 }).wait(3).to({ graphics: mask_graphics_18, x: -23.7, y: 45.4 }).wait(3));

		// dian
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("ABUAFIABAAIgBgBIAAAAQACgGAEgEQAEgEADAAIAHAAQAEACABADQACAAABAJQgCAMgJAAQgRAAAAgLgAATACIABAAIgBAAIAAgBQACgFAEgFQAEgEADAAIAFABIACAAQAEACABADQACAAABAIQgCANgJAAQgRAAAAgMgAgpACIAAAAIAAAAIAAgBQACgFADgFQAEgEADAAIAGABIACAAQADACACADQABAAACAIQgCANgKAAQgQAAAAgMgAhqACIAAAAIAAAAIAAgBQACgFADgFQAEgEADAAIAGABIACAAQADACACADQABAAACAIQgCANgKAAQgQAAAAgMgAiuACIABAAIgBAAIAAgBQACgFAEgFQAEgEADAAIAFABIACAAQAEACABADQACAAABAIQgCANgJAAQgRAAAAgMgACTAAIAAAAIAAAAIAAAAQACgHADgEQAEgEADAAIAGAAIACAAQADACACADQABAAACAKQgCALgKAAQgQAAAAgLg");
		this.shape.setTransform(94.9, 82.9);

		this.shape.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(77.4, 81.2, 35.1, 3.3);


	(lib.hua = function () {
		this.initialize();

		// 图层 1
		this.instance = new lib.fl02();
		this.instance.setTransform(-13, -12.6, 0.26, 0.26);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-13, -12.6, 26.1, 25.3);


	(lib.zzz = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x42_1();
		this.instance.setTransform(15, 26, 0.05, 0.05, 0, 0, 0, 15, 26);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ scaleX: 1, scaleY: 1 }, 9).to({ scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(14.3, 24.7, 1.5, 2.6);


	(lib.xxx2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x21_1();
		this.instance.setTransform(21, 29, 0.05, 0.05, 0, 0, 0, 21, 29);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ scaleX: 1, scaleY: 1 }, 9).to({ scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(20, 27.6, 2.1, 2.9);


	(lib.xxx = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x41_1();
		this.instance.setTransform(11, 14.5, 0.05, 0.05, 0, 0, 0, 11, 14);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regY: 14.5, scaleX: 1, scaleY: 1 }, 9).to({ regY: 14, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(10.5, 13.8, 1.1, 1.4);


	(lib.xx = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x11_1();
		this.instance.setTransform(21.5, 29.5, 0.05, 0.05, 0, 0, 0, 21, 29);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 21.5, regY: 29.5, scaleX: 1, scaleY: 1 }, 9).to({ regX: 21, regY: 29, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(20.5, 28.1, 2.2, 2.9);


	(lib._1xxxxx = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x22();
		this.instance.setTransform(13.5, 19, 0.05, 0.05, 0, 0, 0, 13, 19);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 13.5, scaleX: 1, scaleY: 1 }, 9).to({ regX: 13, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(12.9, 18.1, 1.3, 1.9);


	(lib._1xx = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x12_1();
		this.instance.setTransform(21.5, 29.5, 0.05, 0.05, 0, 0, 0, 21, 29);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 21.5, regY: 29.5, scaleX: 1, scaleY: 1 }, 9).to({ regX: 21, regY: 29, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(20.5, 28.1, 2.2, 2.9);


	(lib._1www = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x43_1();
		this.instance.setTransform(19.5, 31, 0.05, 0.05, 0, 0, 0, 19, 31);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 19.5, scaleX: 1, scaleY: 1 }, 9).to({ regX: 19, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(18.6, 29.5, 1.9, 3.1);


	(lib._1ggg = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.x44_1();
		this.instance.setTransform(15.5, 23.5, 0.05, 0.05, 0, 0, 0, 15, 23);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 15.5, regY: 23.5, scaleX: 1, scaleY: 1 }, 9).to({ regX: 15, regY: 23, scaleX: 0.05, scaleY: 0.05 }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(14.8, 22.4, 1.6, 2.3);


	(lib.jindutiao = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

		// hua
		this.instance = new lib.hua();
		this.instance.setTransform(-69.9, 6.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ rotation: 750, x: 153.3, y: 6.6 }, 99).wait(1));

		// mask (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_0 = new cjs.Graphics().p("A65BiIAAjDMApOAAAIAADDg");
		var mask_graphics_1 = new cjs.Graphics().p("A6tBiIAAjDMApOAAAIAADDg");
		var mask_graphics_2 = new cjs.Graphics().p("A6gBiIAAjDMApOAAAIAADDg");
		var mask_graphics_3 = new cjs.Graphics().p("A6UBiIAAjDMApOAAAIAADDg");
		var mask_graphics_4 = new cjs.Graphics().p("A6IBiIAAjDMApOAAAIAADDg");
		var mask_graphics_5 = new cjs.Graphics().p("A58BiIAAjDMApOAAAIAADDg");
		var mask_graphics_6 = new cjs.Graphics().p("A5vBiIAAjDMApOAAAIAADDg");
		var mask_graphics_7 = new cjs.Graphics().p("A5jBiIAAjDMApOAAAIAADDg");
		var mask_graphics_8 = new cjs.Graphics().p("A5XBiIAAjDMApOAAAIAADDg");
		var mask_graphics_9 = new cjs.Graphics().p("A5LBiIAAjDMApOAAAIAADDg");
		var mask_graphics_10 = new cjs.Graphics().p("A4+BiIAAjDMApOAAAIAADDg");
		var mask_graphics_11 = new cjs.Graphics().p("A4yBiIAAjDMApOAAAIAADDg");
		var mask_graphics_12 = new cjs.Graphics().p("A4mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_13 = new cjs.Graphics().p("A4ZBiIAAjDMApOAAAIAADDg");
		var mask_graphics_14 = new cjs.Graphics().p("A4NBiIAAjDMApOAAAIAADDg");
		var mask_graphics_15 = new cjs.Graphics().p("A4BBiIAAjDMApOAAAIAADDg");
		var mask_graphics_16 = new cjs.Graphics().p("A31BiIAAjDMApOAAAIAADDg");
		var mask_graphics_17 = new cjs.Graphics().p("A3oBiIAAjDMApOAAAIAADDg");
		var mask_graphics_18 = new cjs.Graphics().p("A3cBiIAAjDMApOAAAIAADDg");
		var mask_graphics_19 = new cjs.Graphics().p("A3QBiIAAjDMApOAAAIAADDg");
		var mask_graphics_20 = new cjs.Graphics().p("A3EBiIAAjDMApOAAAIAADDg");
		var mask_graphics_21 = new cjs.Graphics().p("A23BiIAAjDMApOAAAIAADDg");
		var mask_graphics_22 = new cjs.Graphics().p("A2rBiIAAjDMApOAAAIAADDg");
		var mask_graphics_23 = new cjs.Graphics().p("A2fBiIAAjDMApOAAAIAADDg");
		var mask_graphics_24 = new cjs.Graphics().p("A2SBiIAAjDMApOAAAIAADDg");
		var mask_graphics_25 = new cjs.Graphics().p("A2GBiIAAjDMApOAAAIAADDg");
		var mask_graphics_26 = new cjs.Graphics().p("A16BiIAAjDMApOAAAIAADDg");
		var mask_graphics_27 = new cjs.Graphics().p("A1uBiIAAjDMApOAAAIAADDg");
		var mask_graphics_28 = new cjs.Graphics().p("A1hBiIAAjDMApOAAAIAADDg");
		var mask_graphics_29 = new cjs.Graphics().p("A1VBiIAAjDMApOAAAIAADDg");
		var mask_graphics_30 = new cjs.Graphics().p("A1JBiIAAjDMApOAAAIAADDg");
		var mask_graphics_31 = new cjs.Graphics().p("A09BiIAAjDMApOAAAIAADDg");
		var mask_graphics_32 = new cjs.Graphics().p("A0wBiIAAjDMApOAAAIAADDg");
		var mask_graphics_33 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_34 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_35 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_36 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_37 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_38 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_39 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_40 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_41 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_42 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_43 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_44 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_45 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_46 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_47 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_48 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_49 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_50 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_51 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_52 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_53 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_54 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_55 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_56 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_57 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_58 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_59 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_60 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_61 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_62 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_63 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_64 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_65 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_66 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_67 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_68 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_69 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_70 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_71 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_72 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_73 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_74 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_75 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_76 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_77 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_78 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_79 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_80 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_81 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_82 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_83 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_84 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_85 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_86 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_87 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_88 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_89 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_90 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_91 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_92 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_93 = new cjs.Graphics().p("A0mBiIAAjDMApOAAAIAADDg");
		var mask_graphics_94 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_95 = new cjs.Graphics().p("A0nBiIAAjDMApOAAAIAADDg");
		var mask_graphics_96 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");
		var mask_graphics_97 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_98 = new cjs.Graphics().p("A0mBiIAAjDMApNAAAIAADDg");
		var mask_graphics_99 = new cjs.Graphics().p("A0nBiIAAjDMApPAAAIAADDg");

		this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: mask_graphics_0, x: -172.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_1, x: -171, y: 3.8 }).wait(1).to({ graphics: mask_graphics_2, x: -169.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_3, x: -168.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_4, x: -167.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_5, x: -166.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_6, x: -164.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_7, x: -163.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_8, x: -162.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_9, x: -161.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_10, x: -160, y: 3.8 }).wait(1).to({ graphics: mask_graphics_11, x: -158.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_12, x: -157.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_13, x: -156.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_14, x: -155.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_15, x: -153.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_16, x: -152.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_17, x: -151.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_18, x: -150.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_19, x: -148.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_20, x: -147.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_21, x: -146.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_22, x: -145.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_23, x: -144, y: 3.8 }).wait(1).to({ graphics: mask_graphics_24, x: -142.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_25, x: -141.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_26, x: -140.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_27, x: -139.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_28, x: -137.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_29, x: -136.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_30, x: -135.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_31, x: -134.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_32, x: -133, y: 3.8 }).wait(1).to({ graphics: mask_graphics_33, x: -131.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_34, x: -129, y: 3.8 }).wait(1).to({ graphics: mask_graphics_35, x: -126.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_36, x: -124.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_37, x: -121.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_38, x: -119.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_39, x: -116.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_40, x: -114.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_41, x: -111.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_42, x: -109.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_43, x: -107, y: 3.8 }).wait(1).to({ graphics: mask_graphics_44, x: -104.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_45, x: -102, y: 3.8 }).wait(1).to({ graphics: mask_graphics_46, x: -99.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_47, x: -97.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_48, x: -94.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_49, x: -92.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_50, x: -89.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_51, x: -87.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_52, x: -84.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_53, x: -82.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_54, x: -80, y: 3.8 }).wait(1).to({ graphics: mask_graphics_55, x: -77.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_56, x: -75, y: 3.8 }).wait(1).to({ graphics: mask_graphics_57, x: -72.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_58, x: -70.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_59, x: -67.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_60, x: -65.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_61, x: -62.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_62, x: -60.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_63, x: -57.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_64, x: -55.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_65, x: -53, y: 3.8 }).wait(1).to({ graphics: mask_graphics_66, x: -50.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_67, x: -48, y: 3.8 }).wait(1).to({ graphics: mask_graphics_68, x: -45.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_69, x: -43.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_70, x: -40.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_71, x: -38.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_72, x: -35.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_73, x: -33.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_74, x: -30.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_75, x: -28.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_76, x: -26, y: 3.8 }).wait(1).to({ graphics: mask_graphics_77, x: -23.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_78, x: -21, y: 3.8 }).wait(1).to({ graphics: mask_graphics_79, x: -18.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_80, x: -16.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_81, x: -13.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_82, x: -11.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_83, x: -8.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_84, x: -6.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_85, x: -3.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_86, x: -1.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_87, x: 1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_88, x: 3.5, y: 3.8 }).wait(1).to({ graphics: mask_graphics_89, x: 6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_90, x: 8.4, y: 3.8 }).wait(1).to({ graphics: mask_graphics_91, x: 10.9, y: 3.8 }).wait(1).to({ graphics: mask_graphics_92, x: 13.3, y: 3.8 }).wait(1).to({ graphics: mask_graphics_93, x: 15.8, y: 3.8 }).wait(1).to({ graphics: mask_graphics_94, x: 18.2, y: 3.8 }).wait(1).to({ graphics: mask_graphics_95, x: 20.7, y: 3.8 }).wait(1).to({ graphics: mask_graphics_96, x: 23.1, y: 3.8 }).wait(1).to({ graphics: mask_graphics_97, x: 25.6, y: 3.8 }).wait(1).to({ graphics: mask_graphics_98, x: 28, y: 3.8 }).wait(1).to({ graphics: mask_graphics_99, x: 30.5, y: 3.8 }).wait(1));

		// jindutiao01.png
		this.instance_1 = new lib.jindutiao01();
		this.instance_1.setTransform(-78.1, -1.1);

		this.instance_1.mask = mask;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

		// jindutiao02.png
		this.instance_2 = new lib.jindutiao02();
		this.instance_2.setTransform(-78.1, -1.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-83, -6.1, 242.9, 25.3);


	(lib.zd = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.zhandan_1();
		this.instance.setTransform(358, 242, 1, 1, 0, 0, 0, 358, 242);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({ x: 366, y: 238 }, 0).wait(2).to({ x: 354, y: 246 }, 0).wait(2).to({ x: 356, y: 238 }, 0).wait(2));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 716, 484);


	(lib.p4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}
		this.frame_44 = function () {
			this.stop();
			if (model) model.dispatchEvent("over");
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

		// 平台logo
		this.instance = new lib.logo();
		this.instance.setTransform(606.6, 152.5, 1, 1, 0, 0, 0, 99.5, 34.5);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ y: 68.5, alpha: 1 }, 13, cjs.Ease.get(1)).wait(31));

		// 长按二维码   关注梦平台
		this.instance_1 = new lib.changan_1();
		this.instance_1.setTransform(613.6, 554.5, 1, 1, 0, 0, 0, 240.5, 17.5);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({ _off: false }, 0).wait(3).to({ y: 442.5 }, 0).wait(3).to({ regY: 17.4, rotation: -6 }, 0).wait(3).to({ regX: 240.6, rotation: 3, x: 613.7 }, 0).wait(3).to({ regY: 17.5, rotation: -2, x: 613.6 }, 0).wait(3).to({ rotation: 1.2, x: 613.7 }, 0).wait(3).to({ regX: 240.5, rotation: 0, x: 613.6 }, 0).wait(3));

		// 炸弹
		this.instance_2 = new lib.zhandan_1();
		this.instance_2.setTransform(997.1, 918, 1, 1, 0, 0, 0, 358, 242);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.instance_3 = new lib.zd();
		this.instance_3.setTransform(600.1, 796, 1, 1, 0, 0, 0, 358, 242);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_2 }] }, 1).to({ state: [{ t: this.instance_2 }] }, 8).to({ state: [{ t: this.instance_3 }] }, 1).wait(35));
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({ _off: false }, 0).to({ x: 600.1, y: 796, alpha: 1 }, 8, cjs.Ease.get(1)).to({ _off: true }, 1).wait(35));

		// 二维码
		this.instance_4 = new lib.erweima_1();
		this.instance_4.setTransform(606.6, 254.5, 0.1, 0.1, 0, 0, 0, 153.5, 151.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({ _off: false }, 0).wait(3).to({ scaleX: 1.2, scaleY: 1.2 }, 0).wait(3).to({ scaleX: 0.9, scaleY: 0.9 }, 0).wait(4).to({ scaleX: 1.02, scaleY: 1.02 }, 0).wait(4).to({ scaleX: 1, scaleY: 1 }, 0).wait(7));

		// boom
		this.instance_5 = new lib.boom_1();
		this.instance_5.setTransform(623.6, 874.2, 0.05, 0.05, 0, 0, 0, 364.1, 263.1);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({ _off: false }, 0).to({ regX: 364.5, regY: 263.5, scaleX: 1, scaleY: 1, y: 518.5 }, 10, cjs.Ease.get(1)).wait(21));

		// 背景
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FEDF28").s().p("EgkPArSMAAAhWjMBIfAAAMAAABWjg");
		this.shape.setTransform(603, 603, 2.599, 2.176);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1206, 1206);


	(lib.loadingBar = function () {
		this.initialize();

		// 图层 1
		this.bar = new lib.jindutiao();
		this.bar.setTransform(433, 865.6, 3.079, 3.079, 0, 0, 0, -17, 10);

		this.instance = new lib.ren();
		this.instance.setTransform(606.1, 550.1, 3.079, 3.079, 0, 0, 0, -4, -49.5);

		this.instance_1 = new lib.jiazai();
		this.instance_1.setTransform(501.5, 801.4, 3.079, 3.079, 0, 0, 0, -37.6, 45);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("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");
		this.shape.setTransform(607.7, 596.4);

		// 图层 2
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFF9D8").s().p("EheNBeOMAAAi8bMC8bAAAMAAAC8bg");
		this.shape_1.setTransform(603, 603);

		this.addChild(this.shape_1, this.shape, this.instance_1, this.instance, this.bar);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-575.4, 0, 1781.5, 1206);


	(lib.link = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 送
		this.instance = new lib.song_1();
		this.instance.setTransform(281.8, 48.8, 1, 1, 0, 0, 0, 19.5, 20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({ scaleX: 1.1, scaleY: 1.1, y: 44.8 }, 0).wait(3).to({ scaleX: 1, scaleY: 1, y: 48.8 }, 0).wait(9));

		// 传
		this.instance_1 = new lib.chuan_1();
		this.instance_1.setTransform(237.3, 48.8, 1, 1, 0, 0, 0, 21, 20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({ scaleX: 1.1, scaleY: 1.1, y: 44.8 }, 0).wait(3).to({ scaleX: 1, scaleY: 1, y: 48.8 }, 0).wait(14));

		// 即
		this.instance_2 = new lib.ji_1();
		this.instance_2.setTransform(191.8, 48.8, 1, 1, 0, 0, 0, 21.5, 20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({ scaleX: 1.1, scaleY: 1.1, y: 44.8 }, 0).wait(3).to({ scaleX: 1, scaleY: 1, y: 48.8 }, 0).wait(19));

		// 立
		this.instance_3 = new lib.li_1();
		this.instance_3.setTransform(146.3, 48.8, 1, 1, 0, 0, 0, 21, 20.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({ scaleX: 1.1, scaleY: 1.1, y: 44.8 }, 0).wait(3).to({ scaleX: 1, scaleY: 1, y: 48.8 }, 0).wait(24));

		// 鞋子
		this.instance_4 = new lib.xiezi_1();
		this.instance_4.setTransform(163, 50.5, 1, 1, 0, 0, 0, 163, 50.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 326, 101);


	(lib.home = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}
		this.frame_29 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

		// 平台logo
		this.instance = new lib.ptlogo_1();
		this.instance.setTransform(593, 102, 1, 1, 0, 0, 0, 144, 50);
		this.instance.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ alpha: 1 }, 9, cjs.Ease.get(1)).wait(21));

		// 玩的更爽
		this.instance_1 = new lib.wande_1();
		this.instance_1.setTransform(608, 213.5, 1, 1, 0, 0, 0, 306, 96.5);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({ _off: false }, 0).to({ y: 287.5, alpha: 1 }, 10, cjs.Ease.get(1)).wait(4));

		// 呵呵！你问我梦平台有什么优势  我怕说出来，吓坏宝宝！
		this.instance_2 = new lib.heheh();
		this.instance_2.setTransform(607, 1071, 1, 1, 0, 0, 0, 343, 63);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({ _off: false }, 0).to({ y: 1013, alpha: 1 }, 8).wait(1));

		// 关注梦平台
		this.instance_3 = new lib.guanzhu_1();
		this.instance_3.setTransform(887.5, 636, 0.05, 0.05, 0, 0, 0, 50, 248.1);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({ _off: false }, 0).to({ regX: 50.5, regY: 248, scaleX: 1, scaleY: 1 }, 10, cjs.Ease.get(1)).wait(9));

		//   玩转全电魂
		this.instance_4 = new lib.wanzhuan_1();
		this.instance_4.setTransform(321, 636, 0.05, 0.05, 0, 0, 0, 46, 247.1);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({ _off: false }, 0).to({ regY: 247, scaleX: 1, scaleY: 1 }, 10, cjs.Ease.get(1)).wait(13));

		// 线
		this.instance_5 = new lib.xian_1();
		this.instance_5.setTransform(788.6, 730.5, 0.7, 0.7, 0, 0, 0, 94.5, 92.5);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1, x: 758.5, y: 748.5, alpha: 1 }, 10, cjs.Ease.get(1)).wait(1));

		// 闪电
		this.instance_6 = new lib.shandian_1();
		this.instance_6.setTransform(455.5, 792.5, 1, 1, 0, 0, 0, 17.5, 47.5);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({ _off: false }, 0).to({ alpha: 1 }, 17, cjs.Ease.get(1)).wait(6));

		// 星星2
		this.instance_7 = new lib._1xx();
		this.instance_7.setTransform(779.5, 676.5, 1, 1, 0, 0, 0, 21.5, 29.5);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({ _off: false }, 0).wait(11));

		// 星星1
		this.instance_8 = new lib.xx();
		this.instance_8.setTransform(420.5, 676.5, 1, 1, 0, 0, 0, 21.5, 29.5);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({ _off: false }, 0).wait(18));

		// high
		this.instance_9 = new lib.high_1();
		this.instance_9.setTransform(591, 442.5, 0.05, 0.05, 0, 0, 0, 170.1, 56);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({ _off: false }, 0).to({ regX: 170, regY: 56.5, scaleX: 1, scaleY: 1, x: 647, y: 404.5 }, 6, cjs.Ease.get(1)).wait(18));

		// 梦
		this.instance_10 = new lib.meng_1();
		this.instance_10.setTransform(570.5, 645, 0.05, 0.05, 0, 0, 0, 166.1, 213.1);
		this.instance_10._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({ _off: false }, 0).to({ regX: 166.5, regY: 213, scaleX: 1, scaleY: 1 }, 8, cjs.Ease.get(1)).wait(21));

		// 背景
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FEB805").s().p("Egp3AuuMAAAhdbMBTvAAAMAAABdbg");
		this.shape.setTransform(603, 603, 2.25, 2.016);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1206, 1206);


	(lib.p3 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}
		this.frame_31 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));

		// 拿到手软
		this.instance = new lib.nadashouruan();
		this.instance.setTransform(457.1, 380, 3, 3, 0, 0, 0, 159, 72);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({ _off: false }, 0).to({ scaleX: 0.8, scaleY: 0.8 }, 5).to({ scaleX: 1.2, scaleY: 1.2 }, 4).to({ scaleX: 0.9, scaleY: 0.9 }, 4).to({ scaleX: 1, scaleY: 1 }, 4).wait(1));

		// 内容
		this.instance_1 = new lib.neirong4();
		this.instance_1.setTransform(875.1, 973, 1, 1, 0, 0, 0, 280, 86);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({ _off: false }, 0).to({ x: 596.1, alpha: 1 }, 10, cjs.Ease.get(1)).wait(13));

		// 人
		this.instance_2 = new lib.ren4_1();
		this.instance_2.setTransform(429.1, 601.5, 1, 1, 0, 0, 0, 342, 248.5);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({ _off: false }, 0).to({ x: 616.1, alpha: 1 }, 28, cjs.Ease.get(1)).wait(3));

		// 标题
		this.instance_3 = new lib.bianti4_1();
		this.instance_3.setTransform(599.1, 175.1, 1.5, 1.5, -125.8, 0, 0, 310, 141);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1, rotation: 0, y: 175, alpha: 1 }, 13, cjs.Ease.get(1)).wait(18));

		// 图层 7
		this.linkBtn = new lib.link();
		this.linkBtn.setTransform(595.1, 1126.9, 1, 1, 0, 0, 0, 163, 50.5);
		this.linkBtn.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.linkBtn).wait(15).to({ alpha: 1 }, 16).wait(1));

		// 图层 6
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FF5C39").s().dr(-603, -603, 1206, 1206);
		this.shape.setTransform(603, 603);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(32));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1206, 1206);


	(lib.p2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}
		this.frame_21 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

		// 星星4
		this.instance = new lib._1ggg();
		this.instance.setTransform(610.6, 371.5, 1, 1, 0, 0, 0, 15.5, 23.5);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({ _off: false }, 0).wait(2));

		// 星星3
		this.instance_1 = new lib._1www();
		this.instance_1.setTransform(804.6, 424, 1, 1, 0, 0, 0, 19.5, 31);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({ _off: false }, 0).wait(6));

		// 星星2
		this.instance_2 = new lib.zzz();
		this.instance_2.setTransform(808.1, 669, 1, 1, 0, 0, 0, 15, 26);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({ _off: false }, 0).wait(4));

		// 星星1
		this.instance_3 = new lib.xxx();
		this.instance_3.setTransform(922.1, 693.5, 1, 1, 0, 0, 0, 11, 14.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({ _off: false }, 0).wait(8));

		// 屌丝逆袭
		this.instance_4 = new lib.diaosinixi_1();
		this.instance_4.setTransform(503.1, 423.5, 0.8, 0.8, 23.2, 0, 0, 150, 122.5);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({ _off: false }, 0).to({ scaleX: 0.9, scaleY: 0.9, rotation: 15, x: 477.1, y: 399.6 }, 3).to({ scaleX: 1, scaleY: 1, rotation: 0, x: 435.1, y: 423.5 }, 4).wait(1));

		// 内容
		this.instance_5 = new lib.nrigong3();
		this.instance_5.setTransform(587.1, 989, 1, 1, 0, 0, 0, 322, 64);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({ _off: false }, 0).to({ alpha: 1 }, 10, cjs.Ease.get(1)).wait(3));

		// 人
		this.instance_6 = new lib.ren3_1();
		this.instance_6.setTransform(402.1, 603, 1, 1, 0, 0, 0, 314, 278);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({ _off: false }, 0).to({ x: 635.1, alpha: 1 }, 9, cjs.Ease.get(1)).wait(8));

		// 标题
		this.instance_7 = new lib.biaoti3();
		this.instance_7.setTransform(835.6, 182.5, 1, 1, 0, 0, 0, 313.5, 142.5);
		this.instance_7.alpha = 0;
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({ _off: false }, 0).to({ x: 591.6, alpha: 1 }, 8, cjs.Ease.get(1)).wait(13));

		// 图层 11
		this.linkBtn = new lib.link();
		this.linkBtn.setTransform(581.1, 1126.9, 1, 1, 0, 0, 0, 163, 50.5);
		this.linkBtn.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.linkBtn).wait(11).to({ alpha: 1 }, 10).wait(1));

		// 背景
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#A4EBE0").s().p("EgdNAr6MAAAhXzMA6bAAAMAAABXzg");
		this.shape.setTransform(603, 603, 3.224, 2.146);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(22));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1206, 1206.1);


	(lib.p1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			this.stop();
		}
		this.frame_29 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

		// 星星2
		this.instance = new lib._1xxxxx();
		this.instance.setTransform(308.6, 396, 1, 1, 0, 0, 0, 13.5, 19);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({ _off: false }, 0).wait(11));

		// 星星1
		this.instance_1 = new lib.xxx2();
		this.instance_1.setTransform(907.1, 450, 1, 1, 0, 0, 0, 21, 29);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({ _off: false }, 0).wait(16));

		// 一锅端
		this.instance_2 = new lib.yiguoduan_1();
		this.instance_2.setTransform(873.1, 612, 0.05, 0.05, 0, 0, 0, 60, 97);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({ _off: false }, 0).to({ scaleX: 1.2, scaleY: 1.2 }, 4).to({ scaleX: 0.93, scaleY: 0.93 }, 5).to({ scaleX: 1, scaleY: 1 }, 5).wait(1));

		// 内容
		this.instance_3 = new lib.nrigfong2();
		this.instance_3.setTransform(606.6, 1032, 1, 1, 0, 0, 0, 339.5, 59);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({ _off: false }, 0).to({ y: 976, alpha: 1 }, 10, cjs.Ease.get(1)).wait(10));

		// 火锅
		this.instance_4 = new lib.huoguo_1();
		this.instance_4.setTransform(600.6, 652, 1, 1, 0, 0, 0, 288.5, 294);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({ _off: false }, 0).to({ y: 560, alpha: 1 }, 9, cjs.Ease.get(1)).wait(15));

		// 标题
		this.instance_5 = new lib.biaoti2_1();
		this.instance_5.setTransform(597.6, 242.5, 1, 1, 0, 0, 0, 309.5, 140.5);
		this.instance_5.alpha = 0;
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({ _off: false }, 0).to({ y: 180.5, alpha: 1 }, 8, cjs.Ease.get(1)).wait(21));

		// 图层 9
		this.linkBtn = new lib.link();
		this.linkBtn.setTransform(591.1, 1126.9, 1, 1, 0, 0, 0, 163, 50.5);
		this.linkBtn.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.linkBtn).wait(15).to({ alpha: 1 }, 14).wait(1));

		// 背景
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FEDF28").s().p("A2VZUMAAAgynMAsrAAAMAAAAyng");
		this.shape.setTransform(603, 603, 4.215, 3.721);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1206, 1206);


	// stage content:
	(lib.assets = function () {
		this.initialize();

	}).prototype = p = new cjs.Container();
	p.nominalBounds = null;

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;