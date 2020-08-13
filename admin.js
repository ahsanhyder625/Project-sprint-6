let log_out=document.getElementById("log_out")
log_out.addEventListener("click",()=>{
    window.location.href="login.html"
})

var data=[
    {
    restName: "Eat Street",
    sales: 123
    },

    {
    restName: "Dadar Vada Pav",
    sales: 333
    },

    {
    restName: "Shahi Darbar",
    sales: 193
    },

    {
    restName: "BBQ Ride",
    sales: 203
    },
]

var daily=[
    {   id:1,
        label:"Fri Jun 12 2020",
        sale:206982
    },
    {
        id:2,
        label: "Sat Jun 13 2020",
        sale: 117589,
    },
      {
        id:3,
        label: "Sun Jun 14 2020",
        sale: 86435,
      },
      {
        id:4,
        label: "Mon Jun 15 2020",
        sale: 126552,
      },
      {
        id:5,
        label: "Tue Jun 16 2020",
        sale: 64079,
      },
      {
        id:6,
        label: "Wed Jun 17 2020",
        sale: 105265,
      },
      {
        id:7,
        label: "Thu Jun 18 2020",
        sale: 156243,
      },
      {
        id:8,
        label: "Fri Jun 19 2020",
        sale: 146727,
      },
      {
        id:9,
        label: "Sat Jun 20 2020",
        sale: 265726,
      },
      {
        id:10,
        label: "Sun Jun 21 2020",
        sale: 144392,
      },
      {
        id:11,
        label: "Mon Jun 22 2020",
        sale: 86920,
      },
      {
        id:12,
        label: "Tue Jun 23 2020",
        sale: 178592,
      },
      {
        id:13,
        label: "Wed Jun 24 2020",
        sale: 189293,
      },
      {
        id:14,
        label: "Thu Jun 25 2020",
        sale: 285135,
      },
      {
        id:15,
        label: "Fri Jun 26 2020",
        sale: 190731,
      },
      {
        id:16,
        label: "Sat Jun 27 2020",
        sale: 255364,
      },
      {
        id:17,
        label: "Sun Jun 28 2020",
        sale: 136079,
      },
      {
        id:18,
        label: "Mon Jun 29 2020",
        sale: 53839,
      },
      {
        id:19,
        label: "Tue Jun 30 2020",
        sale: 58374,
      },
      {
        id:20,
        label: "Wed Jul 01 2020",
        sale: 58856,
      },
      {
        id:21,
        label: "Thu Jul 02 2020",
        sale: 93477,
      },
      {
        id:22,
        label: "Fri Jul 03 2020",
        sale: 273749,
      },
      {
        id:23,
        label: "Sat Jul 04 2020",
        sale: 244317,
      },
      {
        id:24,
        label: "Sun Jul 05 2020 ",
        sale: 185956,
      },
      {
        id:25,
        label: "Mon Jul 06 2020",
        sale: 148110,
      },
      {
        id:26,
        label: "Tue Jul 07 2020",
        sale: 229041,
      },
      {
        id:27,
        label: "Wed Jul 08 2020",
        sale: 98151,
      },
      {
        id:28,
        label: "Thu Jul 09 2020",
        sale: 171087,
      },
      {
        id:29,
        label: "Fri Jul 10 2020",
        sale: 99468,
      },
      {
        id:30,
        label: "Sat Jul 11 2020",
        sale: 207144,
      }
]

var ctx1,ctx2,myChart1,myChart2

window.onload=()=>{

    ctx1=document.getElementById("myChart1")
    ctx2=document.getElementById("myChart2")

    myChart1=new Chart(ctx1,{
        type: "bar",
        data:{
            labels: data.map((item)=>item.restName),
            datasets:[
                {
                    label: "Sales",
                    data: data.map((item)=>item.sales),
                    backgroundColor: [createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                      createcolor(255),
                    
                    ]
                }
            ]
        },
        options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
    })


myChart2=new Chart(ctx2,{
    type: "bar",
    data:{
        labels: daily.map((item)=>item.label),
        datasets:[
            {
                label: "Daily Sales",
                data: daily.map((item)=>item.sale),
                backgroundColor: [createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                  createcolor(255),
                ]
            }
        ]
    },
    options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
})
}

function random(num){
    return Math.floor(Math.random()*num)
}
function createcolor(num){
    return `rgba(${random(255)},${random(255)},${random(255)})`
}