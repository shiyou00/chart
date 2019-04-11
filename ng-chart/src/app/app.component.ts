import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config;
  ngOnInit() {
    this.config = {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        chartAreaBackground:'#f5f5f5', // 配置自定义插件的参数
        responsive:true, // 改变大小时图标自适应
        responsiveAnimationDuration: 500, // 当resize事件触发时，动画执行的时间，单位毫秒
        maintaionAspectRatio:true, // 改变大小时，图表是否保持比例
        events:["click"], // 监听的事件
        onClick: function (event) {
          // click回调函数
          console.log(event);
        },
        legendCallback: function (char) {
          // 生成一个legend表单，参数是chart对象，默认返回html文本
          console.log(char);
        },
        onResize: function (event,size) {
          // 当resize触发时调用，得到两个参数，图表实例和大小
        },
        // 标题设置
        title: {
          display: true, // 是否显示标题
          text: '标题标题', // 标题
          fontColor: 'red' // 标题颜色
        },
        // legend设置
        legend: {
          display: true, // 是否显示legend
          position: 'bottom', // 位置
          labels: {
            fontColor:'blue', // 颜色
          }
        },
        // tooltips提示工具设置
        tooltips: {
          enabled: false,
          mode: 'nearest'
        }
      }
    }
  }
}
