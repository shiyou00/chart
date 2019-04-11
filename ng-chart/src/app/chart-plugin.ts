import * as Chart from "chart.js";

const drawBgColorFactory = function (Chart) {
  const drawBgColor = {
    // 在组装图出现之前
    beforeDraw: function(chartInstance) {
      // chartInstance === 画布实例
      console.log(chartInstance);
      // 首先我们去获取配置表，看是否配置了chartAreaBackground，如果没有配置则不执行
      if (!chartInstance.options.chartAreaBackground) return;
      var ctx = chartInstance.chart.ctx; // 获取画布上下文
      var chartArea = chartInstance.chartArea; // 画布区域
      var left = chartArea.left;
      var right = chartArea.right;
      var yOptions = chartInstance.scales["y-axis-0"];
      var yAxesTop = yOptions.paddingTop;
      var yAxesBottom = yOptions.paddingBottom;
      var top = chartArea.top + yAxesTop;
      var bottom = chartArea.bottom - yAxesBottom;
      var width = right - left; // 获取到画布宽度
      var height = bottom - top; // 获取画布的高度
      ctx.fillStyle = chartInstance.options.chartAreaBackground; // 获取背景色
      ctx.fillRect(left, top, width, height); // 举行填充
    }
  };

  Chart.pluginService.register(drawBgColor);
};


drawBgColorFactory(Chart);
