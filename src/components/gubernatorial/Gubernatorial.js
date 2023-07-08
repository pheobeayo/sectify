import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { GParent } from "./gubernatorial.styles";
Chart.register(ChartDataLabels); // Register the datalabels plugin for every charts

const Gubernatorial = () => {
   
    return (
        <GParent>
    <Bar
        data={{
            labels: ["Babajide Sanwoolu", "Rhodes-Vivour", "Tomi Aiyeola", "Sowore Omoyele", "Ikechukwu Chistopher"],
            datasets: [
                {
                    label: "Top 5 Gubernatorial candidate 2023 (by vote)",
                    backgroundColor: ["#61D0FF","#D70015", "#009947", "#483C31", "#A408CB"],
                    borderWidth: 1,
                    hoverBackgroundColor: "#D9D9D9",
                    data: [40, 30, 20, 8, 2],
                    borderRadius: 2 // Make Rectangle rounded
                }
            ]
        }}
        options={{
            indexAxis: "y", // Horizontal bar
            plugins: {
                datalabels: {
                    formatter: value => value + " %", // Add the percentage after the value
                    align: "end",
                    anchor: "end",
                    clip: true // Hide label if outside of the chart
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // Hide x grid
                    }
                },
                y: {
                    grid: {
                        display: false // Hide y grid
                    }
                }
            }
        }}
    />
    </GParent>
)


}

export default Gubernatorial;