// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mapConts'));
// 指定图表的配置项和数据
$.get('resources/commons/mapJson/province/hainan.json', function(gdJson) {
    echarts.registerMap('hainan', gdJson);

    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [
            {
                name: '海南',
                type: 'map',
                map: 'hainan',
                center:[110.102773,19.362916],
                layoutCenter: ['50%', '50%'],
                layoutSize:'600%',
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '屯昌县', selected: true}
                ]
            }
        ]
    };
    myChart.setOption(option);
});
// 使用刚指定的配置项和数据显示图表。
