import React, { useRef, useEffect } from 'react';
import { Chart, ChartData, registerables } from 'chart.js';

Chart.register(...registerables);

const RadarChart: React.FC = () => {
	const chartRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d');
			if (ctx) {
				const data: ChartData<'radar'> = {
					labels: [
						'Eating',
						'Drinking',
						'Sleeping',
						'Designing',
						'Swimming',
						'Cycling',
						'Running'
					],
					datasets: [{
						label: 'First Dataset',
						data: [65, 59, 90, 81, 56, 55, 40],
						fill: true,
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: '#748d92',
						pointBackgroundColor: '#748d92',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: '#748d92'
					}, {
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 96, 27, 100],
						fill: true,
						backgroundColor: 'rgba(54, 162, 235, 0.2)',
						borderColor: 'rgb(54, 162, 235)',
						pointBackgroundColor: 'rgb(54, 162, 235)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgb(54, 162, 235)'
					}]
				};

				const config = {
					type: 'radar' as const,
					data,
					options: {
						elements: {
							line: {
								borderWidth: 2
							}
						}
					},
				};

				new Chart(ctx, config);
			}
		}

		return () => {
			const canvas = chartRef.current;
			if (canvas) {
				const instance = Chart.getChart(canvas); 
				if (instance) {
					instance.destroy();
				}
			}
		};
	}, []);

	return <canvas ref={chartRef} />;
};

export default RadarChart;
