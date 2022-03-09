import React from 'react'
import { AnalyticsCard, Card } from '../../../components'
import { Bar, Doughnut } from 'react-chartjs-2';


export const Analytics = () => {
    return (
        <div >
            <div class="flex w-full">
               <AnalyticsCard description={"Orders"} count={15} icon={"fas fa-chevron-up"} color={"bg-green-500"} />
               <AnalyticsCard description={"Categories"} count={15} icon={"fas fa-home"} color={"bg-[#00abe7]"} />
               <AnalyticsCard description={"Users"} count={15} icon={"fas fa-user"} color={"bg-[#ffb238]"} />
               <AnalyticsCard description={"Products"} count={15} icon={"fa fa-store"} color={"bg-rose-500"} />
            </div>
            {/* content */}
            <div class="grid grid-cols-3 gap-3 px-5">

                <div class="col-span-2">
                    <Card title={"Total Orders"} subtitle={"Performance"}>
                    <Bar
                            data= {{
                                labels: ["2020/02/17", "", "2020/02/23", "", "2020/02/29", ""],
                                
                                datasets: [
                                  {
                                    type: "bar",
                                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                                    borderColor: "rgba(54, 162, 235, 1)",
                                    borderWidth: 1,
                                    label: "data 1",
                                    data: [60, 49, 72, 90, 100, 60]
                                  },
                                  {
                                    type: "line",
                                    label: "data 2",
                                    data: [25, 13, 30, 35, 25, 40],
                                  
                                  }
                                ]
                              }}
                        />
                    </Card>
                </div>
                <div class=" h-full ">
                    <Card title={"Products"} subtitle={"By Categories"}>
                    <Doughnut
                            data= {{
                                labels: ["data 1", "data 2", "data 3", "data 4", "data 5", "data 6"],
                                datasets:[{
                                    backgroundColor: [
                                        "rgba(255, 99, 132, 0.2)",
                                        "rgba(54, 162, 235, 0.2)",
                                        "rgba(255, 206, 86, 0.2)",
                                        "rgba(75, 192, 192, 0.2)",
                                        "rgba(153, 102, 255, 0.2)",
                                        "rgba(255, 159, 64, 0.2)",
                                      ],
                                    data: [60, 49, 72, 90, 100, 60],
                                }]
                              }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}
