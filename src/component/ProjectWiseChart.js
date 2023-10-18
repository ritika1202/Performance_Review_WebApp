import { Bar } from "react-chartjs-2";

function ProjectWiseChart (props) {

    const handleClick = (event, activeElements) => {
		if (activeElements.length > 0) {
		  const clickedLabel = data.labels[activeElements[0].index];
		  props.Onclick(clickedLabel);
		  window.scrollBy(0, 645);
		}
	  };

	const data={
		// Name of the variables on x-axies for each bar
		labels: Object.keys(props.data),
		datasets: [
		{ // Label for bars
			label: "Inprogress",
			borderSkipped: 'left',
			//Mapped Data or value for each Project
			data :  Object.values(props.data).map(record=>{return (record.in_progress)}),
			// Color of each bar
			backgroundColor: ["#87bdd8"],
			
		},
		 {
			// Label for bars
			label: "Completed",
			// Mapped Data or value for each Project
			data: Object.values(props.data).map(record=>{return (record.completed)}),
			// Color of each bar
			backgroundColor: ["#93C572"],
			
		}, 
		{
			// Label for bars
			label: "Todo",
			// Mapped Data or value for each Project
			data:Object.values(props.data).map(record=>{return (record.yet_to_do)}),
			// Color of each bar
			backgroundColor: ["#ff6f69"],
			
		},
		],
	}
const options={
		responsive: true,
			barPercentage:1,
		 onClick: handleClick,
		 scales: {
			x: {
				title: {
					display: true,
					text: 'Projects',
					font:
					{
						weight:'bold',
						size:  15,
					}},
			  grid: {
				display: false
			  }
			  
			},
			y: {
				title: {
					display: true,
					text: 'Section count',
					font:
					{
						weight:'bold',
						size:  15,
					}},
					ticks: {
						min: 0,
						stepSize: 5,
					},
			  grid: {
				display: false
			  }
			}
		  }
	}


    return (
        <Bar height={100} data={data} options={options} />
    );
}

export default ProjectWiseChart;