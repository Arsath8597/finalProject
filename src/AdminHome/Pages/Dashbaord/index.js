import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Orders from "../Orders";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState("");
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [date,setDate]=useState(0);


useEffect(()=>{
  fetch('http://localhost:5000/getAdmin',{
    method:"GET",
    headers:{
      "Content-Type":'application/json'
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error("Network Error")
    }
    return response.json();
  })
  .then(data=>{
    setOrders(data.data.length)
  })
  .catch(error=>{
    console.error('error fetching Data',error)
  })
},[])


useEffect(() => {
  fetch('http://localhost:5000/api/dates', {
    method: "GET",
    headers: {
      "Content-Type": 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    })
    .then(data => {
      // Update the state with the dates array
     
      // Update the state with the length of the dates array
      setDate(data.length);
    })
    .catch(error => {
      console.error('Error fetching data', error);
    });
}, []);


useEffect(()=>{
  fetch('http://localhost:5000/getAlluser',{
    method:"GET",
    headers:{
      "Content-Type":'application/json'
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error("Network Error")
    }
    return response.json();
  })
  .then(data=>{
    setCustomers(data.data.length)
  })
  .catch(error=>{
    console.error('error fetching Data',error)
  })
},[])

const data = {
  labels: ["May 1", "May 2", "May 3", "May 4", "May 5"],
  datasets: [
    {
      label: "User Registration Count",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [10, 15, 20, 18, 25],
    },
  ],
};
return (
    <div className="bg-gradient-to-br from-rose-400 to-white'">
      <AppHeader/>
      <div  className="flex">
      
      <SideMenu/>
    <Space size={20} direction="vertical">
      <div className="text-4xl px-3 font-semibold mt-[-30px] text-center " >Dashboard</div>
      <div className="flex mx-10 font-semibold ">
        <DashboardCard 
      
          icon={
            <ShoppingCartOutlined 
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 40,
                fontSize: 25 ,
                marginRight:20,
                padding: 30,
                boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.25)" 
              }}
            />
          }
          title={"Tatal Shedule"}
          value={date}
        />
        <div className="ml-10">
      
      </div>
        <div className="ml-10 rounded-2xl">
        <DashboardCard
          icon={
            <UserOutlined
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 40,
              fontSize: 25 ,
              marginRight:20,
              padding: 30,
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.25)" 
            }}
            />
          }
          title={"Total Users"}
          value={customers}
        /></div>
        <div className="ml-10">
        <DashboardCard
          icon={
            <UserOutlined
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 40,
              fontSize: 25 ,
              marginRight:20,
              padding: 30,
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.25)" 
            }}
            />
          }
          title={"Total Admin"}
          value={orders}
        /></div>
      </div>
      <Space>
        
        <BarChart/>
        <DashboardChart />
      </Space>
    </Space></div></div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

const BarChart = () => {
  // Sample data (replace with your actual data)
  const data = {
    labels: ["May 1", "May 2", "May 3", "May 4", "May 5"],
    datasets: [
      {
        label: "User Registration Count",
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [10, 15, 20, 18, 25],
      },
    ],
  };

  return (
    <div className="w-full flex items-center justify-center rounded-2xl shadow-2xl ml-10 max-w-xl px-20 bg-white h-[300px] mx-auto mt-8">
      <Bar className=""
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};



function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Register Date",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "User Register",
      },
    },
  };

  return (
    <div className="mt-10">
    <Card style={{ width: 500 ,backgroundColor:"#e6e6fa",height: 300 }}>
    <p></p>
      <Bar options={options} data={reveneuData} />
    </Card></div>
  ); 
}
export default Dashboard;
