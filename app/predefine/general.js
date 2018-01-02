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
        '2-8': {name: '云中'},
				'3-10': {name: '雁门'},
				'2-11': {name: '代郡'},
				'4-9': {name: '太原'},
				'5-12': {name: '邯郸'},
				'2-14': {name: '上谷'},
				'3-13': {name: '灵寿'},
				'3-16': {name: '蓟'},
				'2-18': {name: '辽西'},
				'2-20': {name: '辽东'},
				'6-2': {name: '陇西'},
				'3-6': {name: '义渠'},
				'9-2': {name: '蜀'},
				'10-4': {name: '巴'},
				'7-5': {name: '咸阳'},
				'5-8': {name: '河东'},
				'5-10': {name: '上党'},
				'6-11': {name: '濮阳'},
				'6-9': {name: '长平'},
				'7-12': {name: '大梁'},
				'4-14': {name: '饶安'},
				'5-15': {name: '临淄'},
				'6-14': {name: '定陶'},
				'6-16': {name: '莒'},
				'5-18': {name: '即墨'},
				'6-7': {name: '渑池'},
				'8-7': {name: '商'},
				'8-9': {name: '安邑'},
				'9-10': {name: '郑'},
				'9-12': {name: '陈'},
				'8-11': {name: '洛阳'},
				'10-7': {name: '郢'},
				'11-10': {name: '南阳'},
				'11-13': {name: '寿春'},
				'8-16': {name: '下邳'},
				'10-18': {name: '吴'}
      }
    },
    //return states info
    getStatesInfo: function() {
      return [
        {code: 0, name: '野', color: 'DarkGrey'},
				{code: 1, name: '齐', color: 'DarkOrange'},
				{code: 2, name: '楚', color: 'DarkGreen'},
				{code: 3, name: '燕', color: 'DarkPurple'},
				{code: 4, name: '赵', color: 'DarkRed'},
				{code: 5, name: '韩', color: 'Chocolate'},
				{code: 6, name: '魏', color: 'DarkBlue'},
				{code: 7, name: '秦', color: 'Black'},
				{code: 8, name: '周', color: 'RosyBrown'}
      ]
    }
  }
});