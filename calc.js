const armors = [
	{
		increase: 35,
		powerP: 15,
		name: "地灵",
	},
	{
		increase: 18,
		critical: 250,
		criticalA: 88,
		skillA: [13],
		name: "暗杀",
	},
	{
		power: 250,
		critical: 220,
		mitigation: 10000,
		increase: 30,
		skillA: [7, 5],
		name: "克罗姆",
	},
	{
		mitigation: 23000,
		increase: 13,
		powerP: 19,
		skillA: [5],
		name: "千年树木",
	},
	{
		element: 135,
		increase: 7,
		skillA: [9],
		name: "烈焰盾",
		disable: ["千年之光"],
	},
	{
		power: 100,
		critical: 100,
		mitigation: -14000,
		add: 16,
		increase: 10,
		skillA: [10, 2.5],
		other: `10~20+2`,
		name: "燃烧的深海",
	},
	{
		element: 12,
		add: 20,
		increase: 16,
		skillA: [11, 8, 3],
		other: `随机冷却
-8%CD`,
		name: "玄冥精灵",
	},
	{
		power: 50,
		element: 81,
		powerP: 5,
		skillA: [7, 13],
		name: "未知的航行",
	},
	{
		critical: 280,
		add: 8,
		increase: 27,
		powerP: 8,
		criticalA: 44,
		other: `10~30+2`,
		skillA: [2],
		name: "暗黑中的先知-暴击",
	},
	{
		add: 8,
		increase: 27,
		powerP: 26,
		criticalA: 14,
		other: `10~30+2`,
		skillA: [2],
		name: "暗黑中的先知-力智",
	},
	{
		add: 33,
		increase: 27,
		powerP: 8,
		criticalA: 14,
		other: `10~30+2`,
		skillA: [2],
		name: "暗黑中的先知-附加",
	},
	{
		add: 25,
		increase: 15,
		attackP: 10,
		powerP: 7,
		skillA: [11],
		name: "火焰瑞克",
	},
	{
		element: 55,
		eAdd: 10,
		increase: 32,
		skillA: [8],
		name: "燃烧魔女",
		disable: ["千年之光"],
	},
	{
		power: 250,
		attack: 360,
		increase: 12,
		powerP: 9,
		skillA: [9],
		name: "胜者的差距",
	},
	{
		increase: 10,
		attackP: 24,
		powerP: 20,
		criticalA: 16,
		skillA: [8, 8],
		name: "艾莉郊游",
	},
	{
		increase: 26,
		powerP: 30,
		skillA: [6, 11],
		other: `45+1
35+1
10+1
40+1
50+2"`,
		skillA: [6],
		name: "假面艾萨克",
	},
	{
		power: 100,
		critical: 50,
		add: 5,
		increase: 46,
		skillA: [10],
		name: "荒野猎人",
	},
	{
		increase: 75,
		powerP: 8,
		skillA: [11],
		name: "超重力",
	},
	{
		add: 28,
		attackP: 20,
		powerP: 10,
		skillA: [10, 6],
		name: "达莉亚",
	},
	{
		power: 230,
		element: 12,
		attack: 110,
		critical: 50,
		add: 12,
		increase: 20,
		skillA: [8],
		other: `10~30+1`,
		skillA: [1],
		name: "遗迹守护",
	},
	{
		element: 32,
		increase: 45,
		name: "荣耀辉煌",
		skillA: [10, 10],
	},
	{
		element: 30,
		add: 25,
		increase: 10,
		powerP: 8,
		skillA: [7],
		name: "闪亮女神",
	},
	{
		element: 90,
		increase: 15,
		attackP: 12,
		powerP: 6,
		skillA: [8],
		name: "千年玄铁",
		disable: ["千年之光", "梵天剑"],
	},
];
const jewelry = [
	{
		element: 60,
		eAdd: 10,
		skillA: [22],
		name: "祈祷首饰",
	},
	{
		element: 8,
		add: 11,
		attackP: 3,
		powerP: 10,
		skillA: [17],
		name: "大GBL",
	},
	{
		power: 200,
		add: 7,
		attack: 12,
		powerP: 4,
		skillA: [15],
		other: "-5%cd",
		name: "战争狂想",
	},
	{
		element: 7,
		critical: 40,
		increase: 5,
		attackP: 13,
		criticalA: 13,
		skillA: [25],
		name: "增幅波动",
	},
	{
		element: 9,
		add: 10,
		attackP: 12,
		powerP: 17,
		other: `50+1`,
		skillA: [2],
		name: "深海",
	},
	{
		element: 12,
		critical: 200,
		mitigation: 3000,
		increase: 15,
		powerP: 7,
		name: "彷徨",
	},
	{
		element: 9,
		attackP: 30,
		powerP: 5,
		name: "罗魂罗",
	},
	{
		attackP: 30,
		powerP: 12,
		breaking: 30,
		element: -7,
		name: "罗魂黑-破招",
	},
	{
		attackP: 30,
		powerP: 12,
		element: -7,
		name: "罗魂骨",
	},
	{
		attackP: 30,
		powerP: 12,
		breaking: 50,
		element: -7,
		name: "罗魂骨破招",
	},
];
const arms = [
	{
		power: 75,
		attack: 812,
		increase: 40,
		criticalA: 23,
		criticalP: 3,
		name: "血月",
	},
	{
		power: 75,
		attack: 812,
		powerP: 25,
		criticalA: 60,
		criticalP: 3,
		name: "混血刀",
	},
	{
		power: 75,
		attack: 812,
		criticalP: 3,
		add: 50,
		powerP: 7,
		name: "屠戮",
	},
	{
		power: 50,
		attack: 835,
		add: 50,
		criticalP: 5,
		powerP: 8,
		giant: true,
		name: "破碎",
	},
	{
		power: 50,
		attack: 835,
		mitigation: 6700,
		criticalP: 5,
		increase: 40,
		giant: true,
		name: "戾波尖啸",
	},
	{
		power: 50,
		attack: 835,
		add: 29,
		criticalP: 5,
		attackP: 20,
		giant: true,
		name: "雷鸣剑",
	},
	{
		power: 50,
		element: 32,
		attack: 835,
		powerP: 10,
		criticalP: 5,
		skillA: [30],
		giant: true,
		name: "升级团武-属强",
	},
	{
		power: 50,
		attack: 835,
		attackP: 15,
		powerP: 10,
		criticalP: 5,
		skillA: [30],
		giant: true,
		name: "升级团武双攻",
	},
	{
		power: 50,
		attack: 791,
		element: 50,
		eAdd: 17,
		criticalP: 5,
		skillA: [2],
		name: "千年之光",
	},
	{
		power: 50,
		attack: 791,
		criticalP: 5,
		critical: 143,
		add: 33,
		attackP: 20,
		name: "无轩",
	},
	{
		power: 50,
		attack: 791,
		criticalP: 8,
		critical: 100,
		criticalA: 30,
		increase: 20,
		name: "血之挽歌",
	},
	{
		power: 75,
		element: 130,
		critical: 2,
		attack: 857,
		giant: true,
		name: "邪龙魔剑",
	},
	{
		power: 75,
		attack: 857,
		critical: 2,
		increase: 65,
		giant: true,
		name: "幸存者",
	},
	{
		power: 75,
		attack: 857,
		critical: 2,
		eAdd: 25,
		giant: true,
		name: "梵天剑",
	},
	{
		power: 75,
		attack: 857,
		critical: 2,
		element: 35,
		eAdd: 25,
		giant: true,
		name: "梵天剑-红眼剑魔",
	},
];
const lefts = [
	{
		power: 29,
		add: 5,
		powerP: 5,
		name: "护符",
	},
	{
		power: 394,
		name: "布万家",
	},
	{
		power: 29,
		criticalA: 15,
		name: "帕丽斯",
	},
	{
		power: 29,
		attack: 112,
		name: "西岚",
	},
];
const model = {
	power: 3500,
	element: 160,
	attack: 140,
	critical: 780,
	add: 18,
	increase: 16,
	attackP: 5,
};

function extract(key, model, armor, jewel, arm, left, callback) {
	let num = [];
	if (model[key]) {
		num.push(model[key]);
	}
	if (armor[key]) {
		num.push(armor[key]);
	}
	if (arm[key]) {
		num.push(arm[key]);
	}
	if (jewel[key]) {
		num.push(jewel[key]);
	}
	if (left[key]) {
		num.push(left[key]);
	}

	return num.length ? callback(num) : 0;
}

function plus(arr) {
	return arr.reduce((a, b) => a + b);
}

function skill(arr) {
	return arr.length > 1 ? arr.reduce((a, b, index) => (index == 1 ? (a / 100 + 1) * (b / 100 + 1) : a * (b / 100 + 1))) : arr.length == 1 ? arr[0] / 100 + 1 : 1;
}

const result = [];
const defensive = 100000;
for (let i in armors) {
	let armor = armors[i];
	for (let j in jewelry) {
		let jewel = jewelry[j];
		for (let k in arms) {
			let arm = arms[k];
			if (armor.disable && armor.disable.includes(arm.name)) {
				continue;
			}
			for (let l in lefts) {
				let left = lefts[l];
				let r = {
					power: extract("power", model, armor, jewel, arm, left, plus),
					element: extract("element", model, armor, jewel, arm, left, plus),
					attack: extract("attack", model, armor, jewel, arm, left, plus),
					critical: extract("critical", model, armor, jewel, arm, left, plus),
					mitigation: extract("mitigation", model, armor, jewel, arm, left, plus),
					eAdd: extract("eAdd", model, armor, jewel, arm, left, plus),
					add: extract("add", model, armor, jewel, arm, left, plus),
					increase: extract("increase", model, armor, jewel, arm, left, plus),
					attackP: extract("attackP", model, armor, jewel, arm, left, plus),
					powerP: extract("powerP", model, armor, jewel, arm, left, plus),
					criticalA: extract("criticalA", model, armor, jewel, arm, left, plus),
					criticalP: extract("criticalP", model, armor, jewel, arm, left, plus),
					skillA: extract("skillA", model, armor, jewel, arm, left, (arr) => arr.flat()),
					breaking: jewel.breaking || 0,
					other: extract("other", model, armor, jewel, arm, left, (arr) => arr.join("+")),
					name: extract("name", model, armor, jewel, arm, left, (arr) => arr.join("+")),
				};
				r.attack = arm.giant ? (r.attack + 560) * 1.1 : r.attack + 560;
				// console.log(r.skillA);
				r.hurt = (r.power * (r.powerP / 100 + 1) * 0.004 + 1) * (r.attack * (r.attackP / 100 + 1)) * (r.element / 220 + 1) * (((50 + r.criticalA) * (r.critical / 23 + 12 + r.criticalP)) / 100 / 100 + 1) * (((r.element / 220 + 1) * r.eAdd + r.add) / 100 + 1) * ((r.increase + (r.breaking || 0)) / 100 + 1) * skill(r.skillA) * (1 - (defensive - r.mitigation) / (65 * 200 + (defensive - r.mitigation)));
				result.push(r);
			}
		}
	}
}
result.sort((a, b) => b.hurt - a.hurt);
for (let item of result) {
	console.log(((item.hurt / result[0].hurt) * 100).toFixed(2) + "%", item.name);
}
