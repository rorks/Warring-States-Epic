Vue.mixin({
    methods: {
        getStageName: function(i) {
            switch(i) {
                case 0:
                    return "缔盟";
                case 1:
                    return "毁约";
                case 2:
                    return "运筹";
                case 3:
                    return "劫掠";
                case 4:
                    return "行军";
                case 5:
                    return "征税";
                case 6:
                    return "募兵";
                case 7:
                    return "华夏";
            }
        }
    }
});