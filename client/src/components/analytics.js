const d3 = require('d3-array');
const data = [
  { date: '2022-01-01', value: 100 },
  { date: '2022-01-02', value: 120 },
  { date: '2022-01-03', value: 110 },
  //...
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 500 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const xScale = d3.scaleTime()
 .domain([new Date('2022-01-01'), new Date('2022-01-31')])
 .range([0, width]);

const yScale = d3.scaleLinear()
 .domain([0, 150])
 .range([height, 0]);

const line = d3.line()
 .x((d) => xScale(d.date))
 .y((d) => yScale(d.value));

const svg = d3.select('body')
 .append('svg')
 .attr('width', width + margin.left + margin.right)
 .attr('height', height + margin.top + margin.bottom)
 .append('g')
 .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('path')
 .datum(data)
 .attr('class', 'line')
 .attr('d', line);

// Add axis and labels
svg.append('g')
 .attr('class', 'axis axis--x')
 .attr('transform', `translate(0, ${height})`)
 .call(d3.axisBottom(xScale));

svg.append('g')
 .attr('class', 'axis axis--y')
 .call(d3.axisLeft(yScale));
