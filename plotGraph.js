//This function plots the graph with the time and voltages passed as argument
function plotGraph(t,v) {
//build the trace to plot
var trace1 = {
	x: t,
	y: v,
	type: 'scatter'
};
var data = [trace1];
var layout = {
	title: 'WaveForm',
	xaxis: {
		title: 'Time (mS)',
		showgrid: false,
		zeroline: false
	},
	yaxis: {
		title: 'Voltage (mV)',
		showline: false
	}
};
//Plot graph
Plotly.newPlot(graphDiv, data, layout);
}
