var budgetForecastChartOpts = {
    chart: {
        height: 380,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'Actual Spent',
        data: [0,31, 40, 28, 51, 42, 109, 100]

    },
    {
      name: 'Previously Sent',
      data: [0,20, 30, 18, 41,32, 99, 90]
      
  },{
    name: 'Budgeted',
    data: [80,80,80,80,80,80,80,80],    
}],
    xaxis: {
        type: 'String',
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],                
    },
    tooltip: {
        x: {
            format: 'dd'
        },
    },
    markers: {
      size: [0, 0, 7]
    }
}

var backgroundChecksOpts = {
    chart: {
        height: 380,
        type: 'area',
        stacked: true,
        events: {
          selection: function(chart, e) {
            console.log(new Date(e.xaxis.min) )
          }
        },
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: []
        
          } 
         }
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
          enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
          name: 'Credit Check',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Fraud Check',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
          })
        },
        
        {
          name: 'Criminal Check',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 15
          })
        }
      ],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center'
      },
      xaxis: {
        type: 'datetime'
      },
    }

    /*
      // this function will generate output in this format
      // data = [
          [timestamp, 23],
          [timestamp, 33],
          [timestamp, 12]
          ...
      ]
      */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }


var checkStatusOpts = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: []
        
          } 
         }
    },
    plotOptions: {
        bar: {
            // horizontal: true,
            dataLabels: {
            position: 'top',
        },
    }  
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name:"Completed",
        data: [44]
    },{
        name:"Pending",
        data: [53]
    },{
      name:"Out of SLA",
      data: [12]
  }],
    xaxis: {
        categories: ['Checks Status'],
    },
}

var barChartOpts = {
  chart: {
      height: 380,
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
      
        } 
       }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    series: [{
      name: 'Total Paid On Check',
      data: [44, 55, 41, 67, 22, 43]
     }, //{
    //   name: 'Criminal Check',
    //   data: [13, 23, 20, 8, 13, 27, 33, 12]
    // }, 
    {
      name: 'Total Saved On Duplicates',
      data: [11, 17, 15, 15, 21, 14]
    }],
    xaxis: {
      categories: ['Identity', 'Academic', 'Credit', 'Criminal', 'Employment', 'Enatis'],
    },
    fill: {
      opacity: 1
    },

legend: {
    position: 'bottom'
},
}

var options = {
  chart: {
      height: 275,
      type: 'area',
  },
  dataLabels: {
      enabled: false
  },
  colors: ['#D9316E', '#8B288D'],
  stroke: {
      curve: 'smooth'
  },
  series: [{
      name: 'February',
      data: [31, 40, 28, 51, 42, 109, 100]
  }, {
      name: 'January',
      data: [11, 32, 45, 32, 34, 52, 41]
  }],

  xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy HH:mm'
      },
  }
}

var budgetManagementChart = new ApexCharts(
  document.querySelector("#budget-forecast-page"),
  options
);



var budgetForecastChart = new ApexCharts(
  document.querySelector("#budgetForecastChart"),
  budgetForecastChartOpts
);

var backgroundChecks = new ApexCharts (
  document.querySelector('#backgroundChecks'),
  backgroundChecksOpts
);

var checkStatus = new ApexCharts (
  document.querySelector('#checkStatus'),
  checkStatusOpts
);
var barChart = new ApexCharts (
  document.querySelector('#barChart'),
  barChartOpts
);

budgetForecastChart.render();
backgroundChecks.render();
checkStatus.render();
barChart.render();
budgetManagementChart.render();
