import React, { useState, useEffect, useRef } from "react";
 import { Bar} from "react-chartjs-2";
import './BarGraph.css';

function splitLongLabels(labels){
 
    var i = 0, len = labels.length;
    var splitlabels = labels;
    while (i < len) {
        var words = labels[i].trim().split(" ");

        if(words.length>1 && words.length<=3){
      splitlabels[i] = words;
        } 

		else if(words.length>3)
         {
			splitlabels[i]=(words.slice(0,3));
			splitlabels[i].push("....");
		 }

        i++;
        }
    return splitlabels;
}


function IndividualProjectChart({individual_data,clickedLabel, Onclick}) {
	
	let projectWiseData = individual_data[clickedLabel];

	const onChange = (event) => {
		const value = event.target.value;
		Onclick(value);
	    projectWiseData = individual_data[value];
	  };

	  
	const data={
		labels: splitLongLabels(Object.keys(projectWiseData)),
		datasets: [
		{
			// Label for Comparison bar graph
			label: "Inprogress",
			borderSkipped: 'left',
			// Data or value of your each variable
			data: Object.values(projectWiseData).map(record=>{return (record.in_progress)}),
			// Color of each bar
			backgroundColor: ["#87bdd8"],
			
		},
		 {
			// Label for Comparison bar graph
			label: "Completed",
			// Data or value of your each variable
			data:Object.values(projectWiseData).map(record=>{return (record.completed)}),
			// Color of each bar
			backgroundColor: ["#93C572"],
			
		}, 
		{
			// Label for Comparison bar graph
			label: "Todo",
			// Data or value of your each variable
			data: Object.values(projectWiseData).map(record=>{return (record.yet_to_do)}),
			// Color of each bar
			backgroundColor: ["#ff6f69"],
			
		},
		],
	
	} 
	const options = {
		scales: {
			
			x: {
			  beginAtZero: true,
			  font:10, 	
			  ticks:
			  {
                 autoSkip: false,
				 // retricts rotation of x-labels
                maxRotation: 0,
                minRotation: 0
			  },
			  title: {
				display: true,
				text: clickedLabel+' OD/BD Sections',
				
				font:
				{
					weight:'bold',
					size:  15
				} },
				grid: {
					display: false
				  }
			  
			},
			y: {
			  beginAtZero: true, 
			  title: {
				display: true,
				text: 'Employee count',
				font:
				{
					weight:'bold',
					size:  15,
				}
				
			},
			ticks: {
				min: 0,
				stepSize: 10,
					
				
			},
			grid: {
				display: false
			  }
			  }
			
		  },


		responsive : true, 
		barPercentage:1,


		plugins: {
			tooltip: {

				enabled: true,
				 callbacks: {
				title:  (tooltipItems)=>{
					      let key_label=Object.keys(projectWiseData);
						return key_label[tooltipItems[0].dataIndex];
					 
				},
				 }
			  },		  
			interaction : {
				includeInvisible: true,
				
			},
			title: {
				display: true,
				
			},
			legend: {
			   display: false,
			}
		 }
		}
	
return (
	<div>
           <div className="project-graph-title">{clickedLabel}</div>
		    <div className="project-list"> 
			<select value={clickedLabel} onChange={onChange}>
			{Object.keys(individual_data).map((value, index) => <option value={value} >{value}</option>)}
			</select>
			</div> 

		  <Bar width={900} height={400} data={data} options={options}/>
	</div>
	
);
}

export default IndividualProjectChart;
