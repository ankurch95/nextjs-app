import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, SplineSeries, Selection}
from'@syncfusion/ej2-react-charts';
// import { splineData } from 'datasource.ts';

const  splineData: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
const SpineChart=()=> {

  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    minimum: -5, maximum: 35, interval: 5,
    title: 'Temperature in Celsius', labelFormat: '{value}C'
  };
  const marker = { visible: true, width: 10, height: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='CO2 - Intensity Analysis'>
      <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' width={2} name='London' type='Spline'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default SpineChart;