import React from 'react';

const Dashboard = () => {
  console.log('bananan');

  const fetchData = async () => {
    const response = await fetch('http://localhost:5050');
    const data = await response.json();
    console.log(data);
  };
  React.useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    fetchData();
    console.log('Banan');
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
