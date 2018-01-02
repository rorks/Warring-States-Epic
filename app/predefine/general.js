Vue.mixin({
  methods: {
    //return true for active grid on map
    checkGridActive: function(code) {
      var inactive = [
        '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13',
        '2-1', '2-2', '2-3', '2-4',
        '3-1', '3-2', '3-3', '3-4', '3-17', '3-18', '3-19', '3-20',
        '4-1', '4-2', '4-3', '4-16', '4-17', '4-18', '4-19', '4-20',
        '5-1', '5-20',
        '6-1', '6-18', '6-19', '6-20',
        '7-1', '7-18', '7-19', '7-20',
        '8-19', '8-20',
        '9-20',
        '10-20',
        '11-1', '11-2', '11-3', '11-4', '11-20',
        '12-1', '12-2', '12-3', '12-4', '12-16', '12-17', '12-18', '12-19', '12-20'
      ];
      return inactive.indexOf(code) === -1;
    },
    //return cities info
    getCitiesInfo: function() {
      return {
        '2-8': {name: '云中', food: 1, tax: 0},
				'3-10': {name: '雁门', food: 0, tax: 1},
				'2-11': {name: '代郡', food: 1, tax: 0},
				'4-9': {name: '太原', food: 0, tax: 1},
				'5-12': {name: '邯郸', food: 1, tax: 1},
				'2-14': {name: '上谷', food: 0, tax: 1},
				'3-13': {name: '灵寿', food: 0, tax: 1},
				'3-16': {name: '蓟', food: 1, tax: 1},
				'2-18': {name: '辽西', food: 1, tax: 0},
				'2-20': {name: '辽东', food: 1, tax: 0},
				'6-2': {name: '陇西', food: 0, tax: 1},
				'3-6': {name: '义渠', food: 0, tax: 0},
				'9-2': {name: '蜀', food: 2, tax: 0},
				'10-4': {name: '巴', food: 0, tax: 1},
				'7-5': {name: '咸阳', food: 1, tax: 1},
				'5-8': {name: '河东', food: 1, tax: 0},
				'5-10': {name: '上党', food: 0, tax: 1},
				'6-11': {name: '濮阳', food: 1, tax: 1},
				'6-9': {name: '长平', food: 0, tax: 0},
				'7-12': {name: '大梁', food: 1, tax: 1},
				'4-14': {name: '饶安', food: 1, tax: 0},
				'5-15': {name: '临淄', food: 1, tax: 1},
				'6-14': {name: '定陶', food: 0, tax: 1},
				'6-16': {name: '莒', food: 1, tax: 0},
				'5-18': {name: '即墨', food: 0, tax: 1},
				'6-7': {name: '渑池', food: 0, tax: 0},
				'8-7': {name: '商', food: 0, tax: 1},
				'8-9': {name: '安邑', food: 1, tax: 0},
				'9-10': {name: '郑', food: 1, tax: 1},
				'9-12': {name: '陈', food: 1, tax: 1},
				'8-11': {name: '洛阳', food: 0, tax: 2},
				'10-7': {name: '郢', food: 0, tax: 1},
				'11-10': {name: '南阳', food: 1, tax: 0},
				'11-13': {name: '寿春', food: 1, tax: 1},
				'8-16': {name: '下邳', food: 0, tax: 1},
				'10-18': {name: '吴', food: 1, tax: 0}
      }
    },
    //return states info
    getStatesInfo: function() {
      return [
        {code: 0, name: '野', color: 'DarkGrey'},
				{code: 1, name: '齐', color: 'DarkOrange'},
				{code: 2, name: '楚', color: 'MediumAquaMarine'},
				{code: 3, name: '燕', color: 'HotPink'},
				{code: 4, name: '赵', color: 'Red'},
				{code: 5, name: '韩', color: 'Chocolate'},
				{code: 6, name: '魏', color: 'SkyBlue'},
				{code: 7, name: '秦', color: 'MediumPurple'}
      ];
    },
		//return heros info
		getHerosInfo: function() {
			return [
				{code: 0, name: "齐威王", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 1, name: "孙膑", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 2, name: "田单", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 3, name: "匡章", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 4, name: "田忌", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 5, name: "邹忌", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 6, name: "孟尝君", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 7, name: "檀子", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 8, name: "朌子", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 9, name: "黔夫", state: 1, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 10, name: "楚威王", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 11, name: "吴起", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 12, name: "项燕", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 13, name: "昌平君", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 14, name: "春申君", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 15, name: "景翠", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 16, name: "景阳", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 17, name: "申包胥", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 18, name: "屈原", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 19, name: "李园", state: 2, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 20, name: "燕昭王", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 21, name: "乐毅", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 22, name: "秦开", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 23, name: "剧辛", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 24, name: "郭隗", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 25, name: "苏秦", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 26, name: "将渠", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 27, name: "太子丹", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 28, name: "荆轲", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 29, name: "邹衍", state: 3, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 30, name: "赵武灵王", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 31, name: "李牧", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 32, name: "廉颇", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 33, name: "赵奢", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 34, name: "庞煖", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 35, name: "蔺相如", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 36, name: "平原君", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 37, name: "乐乘", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 38, name: "肥义", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 39, name: "赵括", state: 4, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 40, name: "韩昭侯", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 41, name: "暴鸢", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 42, name: "申不害", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 43, name: "韩非子", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 44, name: "张平", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 45, name: "冯亭", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 46, name: "段规", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 47, name: "靳黈", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 48, name: "张开地", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 49, name: "侠累", state: 5, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 50, name: "魏文侯", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 51, name: "庞涓", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 52, name: "公叔痤", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 53, name: "西门豹", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 54, name: "信陵君", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 55, name: "李悝", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 56, name: "乐羊", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 57, name: "翟璜", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 58, name: "公孙衍", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 59, name: "任章", state: 6, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				
				{code: 60, name: "秦昭襄王", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 61, name: "白起", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 62, name: "王翦", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 63, name: "蒙骜", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 64, name: "商鞅", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 65, name: "范雎", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 66, name: "蒙恬", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 67, name: "李信", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 68, name: "内史腾", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
				{code: 69, name: "李斯", state: 7, battle: 0, kill: 0, safe: 0, enhance: 0, build: 0, tax: 0, food: 0},
			];
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
				case 'enter':
					return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGQSURBVGhD7ZrBKkVBHIdPSBJJ3oCdsvIO9hY8AUL2tjY2d2ODsvEUsuMJFJZWQtlYkyJ8v4PFKYuZe+b/P6Pmq6/uTPfc5uuc6dbcW0Uwhgf4hJ8Z+IZXuIBRHONfH9i1rziLQQzhC+qiGU1kwAAeomJ2NBHCBOqCu3qUDxuodSkoiBJiTAkpIUaUkBJiRAkJCRnGGzzFUU0YYhoygreo95+jZYz5ozWN92gd47JHPGLcNrt1jFuIsIxxDRFWMe4hwiImOkQHDxd4Uo/6J3VMdEhKUsY0QiZx3tklfMa2MY2Qh59Bl56hTkViaYTsoZ5/b3W8pEV84Ar2Q6d7RGyhAtpEiOiQQdSzPVeP2pEqQkSHpPgeESkjRCchqSOEe4hFhHANsYoQbiGWEcIlxDpCmId4RAjTkCl8R0WsasIQ8zuyjYvfL01x2+zWlJASYkQJKSFGlJB/HzKOuuCxHuXDJmpd+/UokN9jox6uZeA6XqPWpDsTzDLqP1K6MCcvUb+SRaGTlF08ykDtC90VIqrqC43Fump84mc0AAAAAElFTkSuQmCC';
			}
		}
  }
});