import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from "@angular/core";
import "chart.js";

declare var window: any;
@Component({
  selector: 'chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css']
})
export class ChartJsComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild("canvas") canvas: ElementRef;

  @Input() config;

  private chart;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.render();
  }

  render() {
    this.chart = new window.Chart(
      this.canvas.nativeElement.getContext("2d"),
      this.config
    );
    this.chart.height = "100%";
  }

  ngOnChanges({ config }: SimpleChanges) {
    if (config && !config.isFirstChange()) {
      this.destroyChart();
      this.render();
    }
  }

  ngOnDestroy() {
    this.destroyChart();
  }

  destroyChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = undefined;
    }
  }
}
