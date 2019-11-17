export default {
    methods: {
        load() {
            const baseData = [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ];

            // 构造数量较多的 500 条数据
            const remoteData = [];
            for (let i = 0; i < 75; i++) {
                const item = Object.assign({}, baseData[i % 5]);
                item.name += '-' + (Math.random() * 20 >> 0);
                item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
                item.createdTime += i * 1000 * 3600 * 24;
                item.loginTime += i * 1000 * 3600 * 24;
                remoteData.push(item);
            }

            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
