import type { MetaFunction } from "@remix-run/cloudflare";
import { Header } from "@/components/Header";
import { createChart, IChartApi } from 'lightweight-charts';
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  let chart = useRef<IChartApi>();
  const chartDOM = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = createChart(chartDOM.current!, { height: 300 });
      const lineSeries = chart.current.addLineSeries();
      lineSeries.setData([
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        { time: '2019-04-13', value: 76.64 },
        { time: '2019-04-14', value: 81.89 },
        { time: '2019-04-15', value: 74.43 },
        { time: '2019-04-16', value: 80.01 },
        { time: '2019-04-17', value: 96.63 },
        { time: '2019-04-18', value: 76.64 },
        { time: '2019-04-19', value: 81.89 },
        { time: '2019-04-20', value: 74.43 },
      ]);
    }
  }, []);

  return <div>
    <Header />
    <div ref={chartDOM}></div>
    <div>
      <Button onClick={() => alert('你好，世界')}>你好，世界</Button>
    </div>
  </div>;
}
