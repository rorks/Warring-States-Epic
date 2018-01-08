Vue.mixin({
  methods: {
    //return cities info
    getCitiesInfo: function() {
      return {
        '3-11': {name: '云中', food: 1, tax: 0},
				'3-14': {name: '雁门', food: 0, tax: 1},
				'4-16': {name: '代郡', food: 1, tax: 0},
				'6-13': {name: '太原', food: 0, tax: 1},
				'7-16': {name: '邯郸', food: 1, tax: 1},
				'2-20': {name: '上谷', food: 0, tax: 1},
				'4-19': {name: '灵寿', food: 0, tax: 1},
				'3-22': {name: '蓟', food: 1, tax: 1},
				'2-25': {name: '辽西', food: 1, tax: 0},
				'3-28': {name: '辽东', food: 1, tax: 0},
				'8-4': {name: '陇西', food: 0, tax: 1},
				'4-8': {name: '义渠', food: 0, tax: 0},
				'12-3': {name: '蜀', food: 2, tax: 0},
				'15-4': {name: '巴', food: 0, tax: 1},
				'10-7': {name: '咸阳', food: 1, tax: 1},
				'6-10': {name: '河东', food: 1, tax: 0},
				'8-12': {name: '上党', food: 0, tax: 1},
				'9-17': {name: '濮阳', food: 1, tax: 1},
				'9-14': {name: '长平', food: 0, tax: 0},
				'11-18': {name: '大梁', food: 1, tax: 1},
				'6-20': {name: '饶安', food: 1, tax: 0},
				'7-22': {name: '临淄', food: 1, tax: 1},
				'9-20': {name: '定陶', food: 0, tax: 1},
				'9-23': {name: '莒', food: 1, tax: 0},
				'7-26': {name: '即墨', food: 0, tax: 1},
				'9-10': {name: '渑池', food: 0, tax: 0},
				'11-11': {name: '安邑', food: 1, tax: 0},
				'13-14': {name: '郑', food: 1, tax: 1},
				'13-17': {name: '陈', food: 1, tax: 1},
				'11-15': {name: '洛阳', food: 0, tax: 2},
				'14-9': {name: '郢', food: 0, tax: 1},
				'16-13': {name: '南阳', food: 1, tax: 0},
				'15-19': {name: '寿春', food: 1, tax: 1},
				'12-22': {name: '下邳', food: 0, tax: 1},
				'15-25': {name: '吴', food: 1, tax: 0}
      }
    },
    //return states info
    getStatesInfo: function() {
      return [
        {code: 0, name: '野', color: 'DarkGrey'},
				{code: 1, name: '齐', color: 'DarkOrange', special: 5, owner: 0},
				{code: 2, name: '楚', color: 'MediumAquaMarine', special: 6, owner: 10},
				{code: 3, name: '燕', color: 'HotPink', special: 7, owner: 20},
				{code: 4, name: '赵', color: 'Red', special: 8, owner: 30},
				{code: 5, name: '韩', color: 'Olive', special: 9, owner: 40},
				{code: 6, name: '魏', color: 'SkyBlue', special: 10, owner: 50},
				{code: 7, name: '秦', color: 'MediumPurple', special: 11, owner: 60}
      ];
    },
		//return army type
		getArmysInfo: function() {
			return [
				{code: 0, name: '步兵', attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 1, name: '枪兵', attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 2, name: '盾兵', attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 3, name: '弓兵', attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 4, name: '骑兵', attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 5, name: "技击", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 6, name: "舟师", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 7, name: "死士", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 8, name: "劲骑", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 9, name: "材士", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 10, name: "武卒", attack: 1, defend: 1, range: 1, cost: 1, move: 1},
				{code: 11, name: "锐士", attack: 1, defend: 1, range: 1, cost: 1, move: 1}
			];
		},
		//return heros info
		getHerosInfo: function() {
			return [
				{code: 0, name: "齐威王", state: 1, battle: 4, kill: 2, safe: 3, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 5},
				{code: 1, name: "孙膑", state: 1, battle: 10, kill: 8, safe: 7, enhance: 0, build: 1, tax: 1, food: 0, recruit: 1, army: 3},
				{code: 2, name: "田单", state: 1, battle: 9, kill: 7, safe: 9, enhance: 0, build: 1, tax: 0, food: 1, recruit: 1, army: 2},
				{code: 3, name: "匡章", state: 1, battle: 8, kill: 5, safe: 4, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 1},
				{code: 4, name: "田忌", state: 1, battle: 7, kill: 6, safe: 2, enhance: 0, build: 1, tax: 1, food: 0, recruit: 1, army: 4},
				{code: 5, name: "邹忌", state: 1, battle: 6, kill: 4, safe: 6, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 6, name: "孟尝君", state: 1, battle: 5, kill: 2, safe: 5, enhance: 0, build: 0, tax: 1, food: 1, recruit: 1, army: 0},
				{code: 7, name: "檀子", state: 1, battle: 3, kill: 1, safe: 3, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 8, name: "朌子", state: 1, battle: 2, kill: 2, safe: 2, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 0},
				{code: 9, name: "黔夫", state: 1, battle: 1, kill: 3, safe: 1, enhance: 0, build: 0, tax: 0, food: 1, recruit: 0, army: 0},
				
				{code: 10, name: "楚威王", state: 2, battle: 6, kill: 5, safe: 4, enhance: 0, build: 1, tax: 1, food: 0, recruit: 1, army: 6},
				{code: 11, name: "吴起", state: 2, battle: 10, kill: 10, safe: 8, enhance: 1, build: 1, tax: 0, food: 0, recruit: 1, army: 1},
				{code: 12, name: "项燕", state: 2, battle: 9, kill: 7, safe: 3, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 4},
				{code: 13, name: "景阳", state: 2, battle: 8, kill: 3, safe: 2, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 2},
				{code: 14, name: "景翠", state: 2, battle: 7, kill: 2, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 1, army: 3},
				{code: 15, name: "昌平君", state: 2, battle: 5, kill: 1, safe: 5, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 16, name: "春申君", state: 2, battle: 4, kill: 4, safe: 2, enhance: 1, build: 0, tax: 0, food: 0, recruit: 1, army: 0},
				{code: 17, name: "申包胥", state: 2, battle: 3, kill: 2, safe: 6, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 0},
				{code: 18, name: "屈原", state: 2, battle: 2, kill: 1, safe: 3, enhance: 0, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 19, name: "李园", state: 2, battle: 1, kill: 3, safe: 1, enhance: 1, build: 0, tax: 0, food: 0, recruit: 0, army: 0},
				
				{code: 20, name: "燕昭王", state: 3, battle: 5, kill: 4, safe: 3, enhance: 0, build: 1, tax: 1, food: 0, recruit: 1, army: 7},
				{code: 21, name: "乐毅", state: 3, battle: 10, kill: 7, safe: 6, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 2},
				{code: 22, name: "秦开", state: 3, battle: 9, kill: 6, safe: 6, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 4},
				{code: 23, name: "剧辛", state: 3, battle: 8, kill: 5, safe: 2, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 1},
				{code: 24, name: "太子丹", state: 3, battle: 7, kill: 2, safe: 4, enhance: 0, build: 0, tax: 0, food: 0, recruit: 1, army: 3},
				{code: 25, name: "将渠", state: 3, battle: 6, kill: 2, safe: 4, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 26, name: "苏秦", state: 3, battle: 4, kill: 2, safe: 3, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 27, name: "荆轲", state: 3, battle: 3, kill: 3, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 0, army: 0},
				{code: 28, name: "邹衍", state: 3, battle: 2, kill: 1, safe: 1, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 29, name: "郭隗", state: 3, battle: 1, kill: 1, safe: 1, enhance: 0, build: 0, tax: 0, food: 1, recruit: 1, army: 0},
				
				{code: 30, name: "赵武灵王", state: 4, battle: 5, kill: 6, safe: 2, enhance: 1, build: 0, tax: 1, food: 0, recruit: 1, army: 8},
				{code: 31, name: "李牧", state: 4, battle: 10, kill: 8, safe: 9, enhance: 0, build: 1, tax: 0, food: 1, recruit: 1, army: 4},
				{code: 32, name: "廉颇", state: 4, battle: 9, kill: 5, safe: 8, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 2},
				{code: 33, name: "赵奢", state: 4, battle: 8, kill: 6, safe: 5, enhance: 1, build: 1, tax: 1, food: 0, recruit: 0, army: 3},
				{code: 34, name: "庞煖", state: 4, battle: 7, kill: 7, safe: 4, enhance: 0, build: 0, tax: 0, food: 0, recruit: 1, army: 1},
				{code: 35, name: "乐乘", state: 4, battle: 6, kill: 4, safe: 3, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 0},
				{code: 36, name: "赵括", state: 4, battle: 4, kill: 2, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 0, army: 0},
				{code: 37, name: "蔺相如", state: 4, battle: 3, kill: 1, safe: 6, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 38, name: "平原君", state: 4, battle: 2, kill: 1, safe: 5, enhance: 1, build: 0, tax: 1, food: 0, recruit: 1, army: 0},
				{code: 39, name: "肥义", state: 4, battle: 1, kill: 1, safe: 3, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				
				{code: 40, name: "韩昭侯", state: 5, battle: 3, kill: 1, safe: 4, enhance: 0, build: 0, tax: 0, food: 1, recruit: 1, army: 9},
				{code: 41, name: "靳黈", state: 5, battle: 10, kill: 2, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 1, army: 3},
				{code: 42, name: "冯亭", state: 5, battle: 9, kill: 3, safe: 1, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 4},
				{code: 43, name: "暴鸢", state: 5, battle: 8, kill: 1, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 0, army: 1},
				{code: 44, name: "申不害", state: 5, battle: 7, kill: 1, safe: 8, enhance: 0, build: 0, tax: 1, food: 1, recruit: 0, army: 2},
				{code: 45, name: "韩非子", state: 5, battle: 6, kill: 1, safe: 6, enhance: 1, build: 1, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 46, name: "段规", state: 5, battle: 5, kill: 1, safe: 5, enhance: 0, build: 0, tax: 1, food: 0, recruit: 1, army: 0},
				{code: 47, name: "张平", state: 5, battle: 4, kill: 1, safe: 3, enhance: 0, build: 0, tax: 0, food: 1, recruit: 0, army: 0},
				{code: 48, name: "张开地", state: 5, battle: 2, kill: 1, safe: 3, enhance: 0, build: 0, tax: 0, food: 1, recruit: 0, army: 0},
				{code: 49, name: "侠累", state: 5, battle: 1, kill: 1, safe: 2, enhance: 0, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				
				{code: 50, name: "魏文侯", state: 6, battle: 5, kill: 4, safe: 2, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 10},
				{code: 51, name: "庞涓", state: 6, battle: 10, kill: 6, safe: 1, enhance: 0, build: 1, tax: 1, food: 0, recruit: 0, army: 1},
				{code: 52, name: "公叔痤", state: 6, battle: 9, kill: 2, safe: 3, enhance: 0, build: 0, tax: 1, food: 1, recruit: 0, army: 3},
				{code: 53, name: "西门豹", state: 6, battle: 8, kill: 1, safe: 4, enhance: 0, build: 1, tax: 0, food: 0, recruit: 1, army: 4},
				{code: 54, name: "信陵君", state: 6, battle: 7, kill: 3, safe: 3, enhance: 1, build: 1, tax: 0, food: 0, recruit: 1, army: 2},
				{code: 55, name: "乐羊", state: 6, battle: 6, kill: 2, safe: 3, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 0},
				{code: 56, name: "李悝", state: 6, battle: 4, kill: 1, safe: 7, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 57, name: "翟璜", state: 6, battle: 3, kill: 1, safe: 3, enhance: 1, build: 0, tax: 0, food: 0, recruit: 1, army: 0},
				{code: 58, name: "公孙衍", state: 6, battle: 2, kill: 1, safe: 2, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0},
				{code: 59, name: "任章", state: 6, battle: 1, kill: 1, safe: 2, enhance: 0, build: 1, tax: 0, food: 1, recruit: 0, army: 0},
				
				{code: 60, name: "秦昭襄王", state: 7, battle: 4, kill: 3, safe: 1, enhance: 0, build: 0, tax: 1, food: 0, recruit: 1, army: 11},
				{code: 61, name: "白起", state: 7, battle: 10, kill: 10, safe: 7, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 4},
				{code: 62, name: "王翦", state: 7, battle: 9, kill: 9, safe: 8, enhance: 0, build: 0, tax: 0, food: 0, recruit: 1, army: 2},
				{code: 63, name: "蒙恬", state: 7, battle: 8, kill: 5, safe: 6, enhance: 1, build: 1, tax: 0, food: 0, recruit: 0, army: 3},
				{code: 64, name: "李信", state: 7, battle: 7, kill: 6, safe: 1, enhance: 0, build: 0, tax: 0, food: 0, recruit: 0, army: 1},
				{code: 65, name: "蒙骜", state: 7, battle: 6, kill: 3, safe: 4, enhance: 0, build: 1, tax: 0, food: 0, recruit: 0, army: 0},
				{code: 66, name: "内史腾", state: 7, battle: 5, kill: 3, safe: 5, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 67, name: "商鞅", state: 7, battle: 3, kill: 1, safe: 3, enhance: 1, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 68, name: "范雎", state: 7, battle: 2, kill: 1, safe: 2, enhance: 0, build: 0, tax: 1, food: 1, recruit: 0, army: 0},
				{code: 69, name: "李斯", state: 7, battle: 1, kill: 1, safe: 1, enhance: 1, build: 0, tax: 1, food: 0, recruit: 0, army: 0}
			];
		},
		//return stages name
		getStageName: function(code) {
			switch(code) {
				case 0:
					return '政务';
				case 1:
					return '军事';
				case 2:
					return '事件';
				case 3:
					return '结算';
			}
		},
		//get grid action name
		getActionName: function(code) {
			switch(code) {
				case 'build':
					return '升级军事';
				case 'enhance':
					return '升级农商';
				case 'recruit':
					return '招募乡勇';
				case 'nominate':
					return '更换郡守';
			}
		},
		//return icon src info
		getIconSrc: function(name) {
			//<a href="https://icons8.com">Icon pack by Icons8</a>
			switch(name) {
				case 'supply':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEkUlEQVRoQ92ZjZUMQRSF70aACBABGwEiQASIABEgAkSACBABIkAEiMCKgPP1qbvnbm3VTk9PT8+MOmfPbk/XVL/77rvvp/dI/8k62mMcNyX9lHQSNt6VdFsS9/i5LOmbpON9BIKhbyRds5GS7kl6WT5r+f5o34A8LCDS2M+FBT77JemtJD6Dqa+S/sDMPgGBiU8FwYtiKCx4PZX0Kq69/wtA9wnI7xLzgHheDMbrlyS9lvSkiilAPfa9XQJBrGgBQeNVvD94Nww2uOtlX2L5UTRzX9KHXQFByMQ3WSfXo6IBf/a3/FHbCTsARzOcpV0BQQt4/nsx9Eb5facIuQZypWgGowknh9nAxq6AWKRkm8GbJc1elXRqmKRWBquzGcCHtSQjhBE/CPlBJWCHCmkV49iHBurQAzyLBGAHsP9kKSAWthnAwAwjrhE9BlKp2cdnaADg1I5cBs5nx3xnCSA979Z6gI1bYa1DL1sU3wbcs6XFjjcJJYTN3y5yqQcMdDq1sUMPVTHBJQBcZxYTOyGCgSzXAhcysg2GsOil3jeMhiX2wwpnkQBcZ86k6m2FFuEEC5wPAx+LsdiaesCzMEVhtLDRBXpBVxZ1YuQ+gAB5urYBBAPwroXNw7Lt4LrWA5+hCQwc6kIBxjXCJjWz6n5ra0DwKhU7QbSAWDfp1FozvseZAKdovitgz0Xh3Iw4mxAuxD3exYC66QMszOWqWUsgdALsr3uxrTHiJs+plYdjNGJF7PzOdr32LMBhC0cQTuwltGCF0OOabLYVRniIG7gzub08DeMYUREwRtowbmMw9wlFGGyJm30wgV44o7k2DS08Du3ZStT0O9zSALyL4Zl53L7QFLLYY4bOZKhtMOJYJyU6s9RAWs1fTw/Y6PYjw7FHxCwasYGAgBmuCTHoRw9erQzFHqp23X4QYqRuziPs6oTQBbRJaJmNrLAYCDPO9xZ7ywBAANJNoiu3w6or7DlCyx7j4TDA8tDD3xlG2cVyjxrgYsc+EkBrsY/wajWLszDSG0+T1RYDvbSJx+mjPB3CIkC7mekioawTWr3xdBWQXheLXdlU9ir7SqGzYSyQ1njqQSjnilaqdSaiuufiTJIDLDphrBVOedhYIM482WrYaDyON6kDdU3JZwHcVRkmnJEAQU1pVuxRdKzBiDNU7y1HPg9NEPuAx3iM5Np1xnu9z/PGWJub+8Yy4vdLw3wcJznd5uH1Ht/LObvbjk9FMxYIxpNdxjCS6Tjtyha/9Qp0Kobhe2OBeDzNeaD33gnQeDz7I6ZFNIU2LnqpMBnMWCCZJlvjKQbQY+V4SgbyrG0DaTtwwEbCbqEdC4TvthjAu8R+vnfiGrDZkgPACWCy1+cqiC0wG42ncyJahxHXiexIe9kn93bH010AScMcJrzCYRFWHk/JbPV46n9qzmn3ubPGMFKDwFBEjGaI+8nj6ZzIVgHpgbANZDPEDTjYIIw8m68cT5cCsgrEnHZsfFaPkYMC0avsBweiBeQgQdRADhZEDSRHWafYjUW41AEpdtIlrBwciHXa+KUcO/k5qwri5IOX/uI/9BQ4Qo3kI/YAAAAASUVORK5CYII=';
				case 'treasure':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADkUlEQVRoQ+2Zj5ENQRDGv4sAEXARIAJEwEWACBABIkAEXASIABEgAkSACKjf1vRW7+zs7uzMvL13r95UXd3b9+ZPf/3n657eEx3IODkQHJoD8kDSK0k39gTsT0nPJH1IyZMCcjUAeLQnAGIx3gVAf/wPKSBvJRkINPB6TwA9DQpGHKxyNgfkhaTnkv5KuivpWwUI1j8J+7DNZ0lvwv/SbW+F9VckvZSEvN3wFiEWfoTvQZv0xUwJTCGp6QMBMvfz04jd9+GLU0nEzgAILoQGvzgtFpzTWfJTWIhr4tMM3BXyYNyrtAzWvRMsjMsNgNiPj93hJUCw5P0QkHF8mZ9/lIRmSwdKIZZ7pXvX+le66wWug7muxRbB165foFAlR/+yPOctYgF67ui3ZPMt1hB3Dz1zpVgLc8EGg4SzhXSZZ5CwYVf+J1mLfVoFfKZMRdNGgR7HiFEkbAAgKLJkWIljrASLQcOtLAy1Q/EDdo1LFIQg6MmcvdlWovkqiQzsBxXC7ZX7pKZb0qby4HOvnFStNQqkBQG8BfjMgDC6RBVqNQKTwcFWMWAxeybb51hskpBSQHxmLlEi2sIiXekQNIdFsHKrMaoMWgEhw1pMmHt6ob0bWLZPWSwXaBaQJddKuRLZNcc15vw+/o39ENhX4NmuleTo6IQ4mHEli41cjcbzjBwQms8ITL2Ge0ISpiQL9lGui10rxdEspmrlALv2+mC2IC4FMbXOclp8uUvmuhhIzNEIjgW8xuNgbg3A9jPSwUq4mFnFlD3IdakSxXO0leRLwbwrMAgP2+FiXPYAlcx1S0Xj77CwJphrQOIRsBzx4uNitmikENuX1k8ueCxFBTK4IV7Gi1WPIXVDrO0+mkKm9ln6Pdcag32OQGbUFmt86TnXAvG8zS1y6YEYZVutRGVADoDSY6IpscrOLTJVWiCs9bVqm4DstXMg1tIkgVH8UZcxuFzxjFVqW7KbAOEQy7wpl2nVbtq5RUx4LIMFboYvvofnmua4V8xmQEoCeM2aI5A12tpi7tEiW2h5zRmLFoFV+DP+X7P5FnPJRzCitZ+6wnfuRQ8ZmsRV2uZpDYpEyrtD7vJ+TAKhOQz/89KnppndGog1Rni5g3w023tjTN1HQE+xB5jad4otAFnnBBAUn3jJYowYOFtc++KyBRDr5nilLgJpcfCWe4xiBFeyumhLQWrOon7r2q21jYYaIZquPRgg/wHa+fMzFCVpIwAAAABJRU5ErkJggg==';
				case 'shield':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPoSURBVGhDzZpbqFVFGICPlZBlaJqJD1aakRcUtALJJEGRUFAIMTEQRQRv4QWUSstMQkQQNfNB8UkFLyiKFEoYRtCLIKX5ICWmokh5yTJRTPP7BkY26Npn733WWns++B5mzqxZ/6w9a9ZcTktBDMUv8Re8iZfwe5yH3TB5huFh/L+KN3AVPofJ8QZ+gzHYa7gGzX8Sn8eJeBDvoWX+xhX4LDadN7GyAX/hZ9gZs3gdD2C85jraoK5YKk/gBLTPVzbgc6zn6fprfY2xDrvcRuyPheINluN5jDf/E5diJ2yUwbgH76J12vV8z6ZgW+p9wGM4BJfgcYzB61Gcivb/vOiFq/Eyxvvcwn34PnbHmumHs3E3Vlao59Ab+QSLpAO+h3vRhsT7+0s5nK/D8dgFM6kM3AuPoUPlcPQXKhu7ll1sG/6BlfFtx0xioWnokJkS7dDesBON0YEhE0cfC5U+FNbBR2iMdvNMLqKFfPFSZSUao9+rTE6jhQaFVJrYpYxxcUhlEIfZt0IqTXzJjXFWSGXwHVpoXEilifM1Y3w3pDLYjBaaG1Jp8isaY9XuH0cEPzop4jzvDhpjRzOy8ItqISdzKdIHjc/RtSpOsS3oz5ciY9D4fgipKjyD/6E/31NmJManaEPWh1Qr/IQWHhFSaXEIjc3VZqtsQAu7zkiJx9HlsbH1MKM1JqOFHa9TwrWRcf0WUjXwInqBa+n2ZiSCCzzj8ltXMz+jF70TUmng2qjumD5BL9oSUs2nNxrPFayrl/RFL7yKKXQvZ7oNP9gT6MVjQ6p5uMSO86tRZtTLB+jFzR69fJDGcRJd7taNu4X/oJsQhW+aVSFO22eEVIM4FbCSTSFVPm42+CDdCHSbqGGcbTrvcn/pJTNKJu4rfxxSbcRfw8rcWyoTl9ve9wLmMoF1XvMvujdb9C5jxHmV27I2ZLoZeeFOu5X+iN6kaDzZ8n7OMHK939PoZM3KF5pRID3R0dJ38zUz8uZtdATxTPAVMwrApx/PXdyIKwwPOL2Ji68iVpCev1i/+2t5Hlk8hMHHWehWM3LEvTSX2S4fXjWjaNwXdhZqYz40IwcGokdv1umxXmmMxNvoO+NpUlt4GeNx3jIzysYG2BBHl0lmNMAL+DvaiKrnHUWzAG2MfduTpXoYgGfRRuzCMr5PVZmJfvVt0BdYyxGdXTMeKu3ApjciYtfy+2Jg+9GNviw81vP9suxXmEwjIs7DzqABnkL/K6ISDzadePp336s5mCyePX6LBmt3W4su0Nz5iC+1+wCjMXnsKovQGbOBx++DHsGUzycfiVs4cWHkJHA+NuOsPjdcINW0V9s4LS33Aa12D5GR+vfLAAAAAElFTkSuQmCC';
				case 'arrow':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASISURBVGhD7ZpZyG5TGIB/85AhQwgXJKWIi4MLhciYTBem6GQ85xiSMULKlIgLKUIhhIhMZbogZL5DMpYiU8hMxufZzqq3/e/97bX2/vbnvzhPPfXtfb6193rPt/Za73r3P7eCBcw1+Bveg+t4YoGyJd6M3+MJnqhjEP8s9zO8Cg/HffAgPBbPQQO+BR/Ap/E1fA8/Cr6JT6LfOxf3xLVwCJviDRj7eSnO41ZMXxhDO/AsnoIbYi4r4Un4Lcbr/YCb4DxscDb+gbHBGP6Ct+H22MVd2HSNy3Aib6FffAPfxW/wc/T8c/gg3osOm/vQofU11m+U4194B26OTWyETe2833o4kUfRLx9aHeWzLS5B28dxnKMd8zmsszb669W/vxQ7uQ798nnVUT98Bs7AD7DeiTb/xmUYOQLrQ/0VXBk7OQ1tcFN1NAxveCS+g7Ezbf6Ju6HEIO7GF9ChvDVmsT/a2Kl1WqyCJ6LPWux4kw9jDOIS7MU26AVcD6aNQ+5+jB2v+yP6y/i5dxCyKvq/oat5YgSOxvq6UNcFd00chL+GF/PXGYst8AmsBxD9Eh1mvXkKvdAB1dG47II+j/Ugks5mJ2MvnLG8iDPY2DirpWfCBTIGkfwdF2ExJnpe4PrqaDxiED7YLy7/3OT7uAYWcQja2FV6LOpByFkYO1/Xfy9iB7Sh+dUYNAUh/o+nXK/Jr7BoO2CO40NmnmNWPE3agkjshD4T9SCSi7GIT9GGTpPToiuIxEUYOx99FYswt7HhHtXRcHKDEFOalzEGkHSkbIXZ3I42NEcaSkkQie2wnvkm3XJnczHayL37EPoEkbgRYwDJxzEb8yEbmeT1ZUgQsjGaRMYg1F1rNqYONnLL24ehQSRclGMQybbt8Tw2QBt8Vx2VMa0gxFmzaTreC7NJqXZJ+WaaQSQewhiEHoXZvI422rU66maMIMRCSAxCrQlkY9nHRsdUR5MZKwhZHS3IxUAuxGyuRBs5FU9izCAS9U1YUSDHo43urI6amUUQ4iLYO5Dd0UbmN/68dWYVhOyHMZDTMRur8amh6YIpts/NBWgWOqsgJFV3ksdhFr5O+Blj46Q7OWuv5mOzCEKs6MQ+HIyddAWRXgRdgev+93F0vE/sh8N+IrlBXI6ey11jhrI+xr7siK2UBqHObLNgM4z9ad3w7YulQei1OAv8BdI93Vy1VkHd2McOJicFoc/jNLfDbTha0j2/8EQb5i6uFzEV6AoiaqHC6fkRNPU+Fa3sO21aTx6KL4LSvT7xRA7uiQ/EnCB89db1usA16EO0NGoV01X6MLTsZMUmh16BROqpQTQWzOyQ49hF1Lddvgt/Bj/Gtr130oqNxQ7XJfM6d6du7OL2YWdM3/8JLVAU4cMcb5osqfr5YPqO0aFmauHQs4r5Nv6KTddPuq11l/pYOKe+uy/C93rxAs4YxaXLCVgAdLKwY1ZsLHZYJ7Dzk96hvIRN+V8re2NqPO0gcnB4ueg63K5G+5D6cz5m499+/F9BNGEwKRA/F2G269+iLAR8yM9En92SWsIKZsjc3L9sJoGX7ECJNQAAAABJRU5ErkJggg==';
				case 'city':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASPSURBVGhD7ZlZqFVVHMZvE2U0QhnRBEWWYBQEETRZVhoR9GBJChlWUBBEVCAkPQjSixT14ItJRUkiZC/S4NCDShBmZWFlUpHNijQalQ1+v3PXZ/+z7t5n73OH9i32Bz/O+v/X3ueu76xx7zvQqlWrca+D0mejOklsFE+IQ0j0qUliq5jfiRrUJvF34mESfehw8Ynw/XNFIzpafC9oxJ9ijehH54kfBff/LpaJMRFj95TBYqlOFzTks07Uvy4V3L+6E5WL3jtxsNifjhcvCf7IM+IIUaR/w8gFgiH4q7iLRF2dLLYL/oB5XTCUco21kavEXhHbslhU6kjxruCGbWKm+DzF68TBIioaYdWiJ48RlnPxRzhUONfLCD3xs6D+eXGP+C3FD4qe4gIufE8cR0KisV8I8jeTCIpGmLyU+SEs51iiLTeeXC8j/HDULRXea64Xf4hfBCOnVB8Kbr66E/2jeYI88yYqGrkolT8S3lMuFuTeEu7NawW5N8VlqZwbOUOQ/04cRSJopaDuvk5UoCmCZXSfYKM6M3C54OY9gsZbNsIy+m0qA7/mlYLrnaOx1wgv2eAfLhpheDOpyW8QsR3wkKDuRXGCGCJ/eRVxYtuIeU3szHKviK+zHD27O8TRCMMnXtuLJWKIPhZU0iuUI58K6uitON6jkW/EOeKWkPtSnC3uDLkd4izhXx2iEXrSxlmx8ra4538SC0WhuICuz3WsoC5fZvMeGS75HHGv5Hk0W1C3vBOViAts5DQxVUwUVUboqfyXqwM9VtTgaIQV63xxiZggahuhyzjN/pViGrkolcuM5Pm6Klt+bWSzYChTBobvk6lcacQwPjndYsS5XkbowbgZnipizLVxKSWeIbi/zIj5SryT5QqNcCBbL+KFLLnoVuEcvcQ6zhKJbCTWPyd4xnD8tOCUQMxC8pTwsmuiEYZQPN5jwpsz3+08m+IDokurBJUMK39aHCfIeUel/JhA0QjLKQc7x6wuHM/LYlYmvpOyjdBjXpW83/DDWXMEOY4uHvrTxQH5YDY5fcaVyxOdnHfq9wWykR8EvXRdincJjt43ppjz2mHCE5XlnN3/thTbiDdehtENqRyHUJzoPMhRflQcEAmIjbZizg33XMnj/LyVn7XiOQvlkz2uVi6XGXG5a1MkAf8bI1ekT+bIhYmY85czvqnL41kpZveO8dspvr0kxhjxvSF2+WVBHficRc7lQiP/RQqNcLTuhR+6eMApqh8p9CTfzzAuqo94iS40UqV8Toy24hypUs85UqXWSE21RqzWSCaOOLy4qGKaYKPNNS6MsHHGI38VvFnJ32A2boSnSI7b1L0h1lbgJ8OuRkiNGuF9FW/iydPIOv8n4QzmEzfHGKtRIwsEOZ4teK15U01eENzHIwBvWlBjRpiw/cyLMp4VqDEjvOF4RPAU96qgjnMScRm8xOM6niiJVwjeQKLGJzvKn0XKlD+TRLVGLBJQNCkjdwuuY1jkdfcL6uoa+UDk38EwpW5LyJXxuODaQiOjQV0jo0WXkXxCjoSqf42dK4ruGy53iFatWvXUwMB+rps355Avv8YAAAAASUVORK5CYII=';
				case 'leave':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHISURBVGhD7Zo7LwRRGIY3JFQunUREo9QIUVFoxDXR+A2Iwi9QiJKWiIjCXUPlN6gkGp2eSqJDQnjfw9mc2Ns3uxnzHpknebJ7TjKT8+wku5kzWwAtcAM+wE8BP+AdnIeJYES5E2btOxyBZh4hDxxwIw3WIde05UZG/CegxAzkmq7cyEgekiJ5SB6SEtPwX4TwR5oR0YcQxix/v7WhGpKYPCQleuET3IPNnLCiFtINnyHXdADNMWohZBj6mENoilEMIWHMEawZoxpCwphjWDVGOYSYY9RDSBhzAsvGxBBCwphTWBITSwipGhNTCAljzmAxptGQHjj0xy5B7rJw3efQxTQS0gVfoT9HVu7D4qAeWuEFvMlAf0XeIO8oGwrJik3oI2Y5QWILCSPclfDEFFIxgsQSEkZwc6KEGELCiClOlEM9xEfwa75iBFEOMUcQ1ZAwYpITtVAM8Q+fXqApgqiFjEIfMcEJK2oh7XAbjrlRAtRC6kY5pOPn1YRqyCDknpYZxZA+yG3T/ImVCnlIHpISdYX4m/gmN9JgDnJNl25k5BbyIP6BZUHARXgNuaZVaGYcKuxN/fYedsJE9MM1uCvgDlyBbdBIofAFP1SNoGHo6NgAAAAASUVORK5CYII=';
				case 'wall':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGuSURBVGhD7dm9LgVRFAXg+wbeQKFXUUo0OjUSjUcglHpqjyChUesUilsoEEJBg4hCRIL4LfyuNckk28mcM/vkFpxk7eQrZu+75S7MmLk6KpUqqw7huxDzEC2+4AvuMjwA9z5Mz+MRuPdueh7PwL11iBZfwDeWU/3AvaPqyF8jwL1udeSvaVCQVCkIKAgoSKz+bRBe3wcy1G/o1PQ8JoF7u6bnMQeuIKVoDfIJZ4EL4Ix/hcNZyhVw7830PK6Bey+mV7sBV5Cmc6QPOLusjvw1CNzLPQ/GgXub1dHv6ulkVxBQEFAQBYnUnwZ5gqHAKHDG63s4S5kC7h2YnscscI/fgHC2CK4gpWgNwmfvvQy8WeTeq+l58N6Me/wNaJrHnIMrSNM5kirdxoOCgILESkFAQaA1CD9bHctQf2Fe35vmMfWz97HpeSyBK0gpWoPwuXwrsA2c8dk7nKXsAPfuTc+D92bcuzW9Gn+CriBN54hu40FBQEEUJFIKAj0H4eetE4EZ4IzX9XCWsgDcOzE9j2Xg3r7p1VagNQj/Nc0XlWAVosXv4EYB1mAYVCqVqzqdH+umxvVkf6TeAAAAAElFTkSuQmCC';
				case 'farm':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPQSURBVGhD7dlbqBVVHMfxU1lqUanlg5VhColiYoX04AUyNDAlEFIMUVBBBMMHxXpQghR9sIRKLKyX8BYapSZoCAYJ2UWLgrxikphgWZbaRbt+vxvWYRpn7z0zznZGOj/4cM5c9/z3nr1mrbXbOvI/yr1YgdPYh5m4CVdFOmECduJv/BPzE17EAFQyd+BZnEC46LNYhfsxCe8jbLPIXXgC16PUXINReAsXES7yS8zGzYhnIF6Gn0zY/ySew124oumGuTiIcDG/Yy2GIU38rvid+QzhHH/ibYyBb1LLMhSv4xeEF/8aT6Mn8uYhvIHfEM57GPPQA4WkK6bjE4QX+QvvYiyuRVG5DfNxBOG1foVFWmzuWET09jmFpeiDVsY351FshrdbeP1FyJU58AR+zJPRGWnSBd2bSPsd6I0lsJU7h8y3ms+Do7CQ8a5IGS/yR4R3sZ5XkSVb4HELa0sZYrvvgV8hSwtyHzzuAnwj4r6F23cjS0bA476Dt3zqhGZxWm0pfUIhPkuSMhx5CjF74LE+o1JlNDzAp/QNrsiQVhbyODzWVu06VzTLe/AAm8KsaWUhtmYH4PETXdEo9ovc8QySuhjN0spCjL0Bj/+0ttQgG+COy2pL2dPqQrzV7Zt5joddkZR78AdscXq5IkdCIT5I+ybwlricQswCeI4dtaWEvAR3WF1bypdB8BzNfIC8sdNq79mH5BBXRHM77Azaj+rvipzxqb4Ve5uYhcvJcviG2OP+TxwUueFjPIhbUNV4i46Dn4hfhbvRHjuE0Y/eJ3oVMxLxIfRitGcl/Mg/hxu9B6uYJ+H1/QCv9yP4AL8kt+JqKGRdbalBshTihIPfp6I8gGZDhcILsTE4D/ct0mtolMILsaWIXoD2I9rEpvE9oufYhkZpWSFOGIRJg0NwgiJN7AA+A3sR4fX8W1oh38C5qjB+sV13bO0Is14c8/tkd38fwC/A2UmXSy3E2Jmzo+mFuf5D9EM8U/Ez3Oc4nOAzj8F1pRcS4pD0GNzmZIHdbuOkwSa4Xuvh+D6kcoUYWzTnotyu7Qhjdcc5Xkw8lSwkZAqi3QkbA6d3klLZQhxp2l9zn1CMf1/BjYincoXYrDoXHJrVLzAYT8HpT9clNdOVKiTerD6PaJfDZtpfrtweb6YrU0i9ZjWees106YU489eoWa2XeDPtSM//Sysk6h34U1paMxD9qU5XvJA7Eb2Aojjeb5TCC3Fi2+n+jQV6E4+gUQovpKxkLsSpoaT7umz+Rp+qEJ+68VmKKrIv1zT+9Jx0D1fFGtgF6khHOpI6bW3/AtFFPbSylXlnAAAAAElFTkSuQmCC';
				case 'morale':
					return 'data:image/png;base64,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';
			}
		},
		//return true for active grid on map
    checkGridActive: function(code) {
      var inactive = [
        '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13',
				'1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20', 
        '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17',
        '3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-25', '3-26',
				'4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-24', '4-25', '4-26',
				'5-1', '5-2', '5-3', '5-4', '5-5', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27', '5-28',
				'6-1', '6-2', '6-3', '6-4', '6-23', '6-24', '6-25', '6-26', '6-27', '6-28',
				'7-1', '7-2', '7-3', '7-27', '7-28',
				'8-1', '8-26', '8-27', '8-28',
				'9-1', '9-25', '9-26', '9-27', '9-28',
				'10-1', '10-25', '10-26', '10-27', '10-28',
				'11-1', '11-26', '11-27', '11-28',
				'12-27', '12-28', 
				'13-28', 
				'14-28',
				'15-1', '15-27', '15-28', 
				'16-1', '16-5', '16-6', '16-28', 
				'17-1', '17-2', '17-3', '17-4', '17-5', '17-6', '17-24', '17-25', '17-26', '17-27', '17-28',
				'18-1', '18-2', '18-3', '18-4', '18-5', '18-6', '18-7', '18-8', '18-15', '18-16', '18-17', '18-18', 
				'18-19', '18-20', '18-21', '18-22', '18-23', '18-24', '18-25', '18-26', '18-27', '18-28',
      ];
      return inactive.indexOf(code) === -1;
    },
  }
});