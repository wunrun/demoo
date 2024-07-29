(function(){
  var myChart = echarts.init(document.querySelector(".san .loud"));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: '职业认同  内容:增强社区工作者的职业荣誉感和社会认同度  ' },
          { value: 40, name: '评优推先  内容:建立社区工作者表彰制度 ' },
          { value: 20, name: '职级体系  内容: 建立社区工作者职级序列  ' },
          { value: 80, name: '晋升通道  内容:建立社区工作者晋升机制  ' }
        ]
      }
    ]
  };
  myChart.setOption(option)
})()