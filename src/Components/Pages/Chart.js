import React, {Component  } from "react";
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Collection','Fees','Expence'],
                datasets: [{
                    data: [
                        10000,
                        4000,
                        3000
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]
                   
                }
                ]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    height={180}
                    options={{
                        maintainAspectRatio:false,
                        legend:{
                            display:false,
                            position:'top',
                            align:'left'
                        },
                        scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        stepSize: 2500
                                    }
                                }]
                            }
                    }}
                />
            </div>
        )
    }
}
export default Chart;