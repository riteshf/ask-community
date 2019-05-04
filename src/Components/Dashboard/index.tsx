import React from 'react';
import Header from '../Header';
import Questions from '../Questions'

function Dashboard() {
  const [searchString, searchNow] = React.useState('');
  return (
    <div className="Dashboard">
      <Header searchNow={searchNow} />
      <Questions searchString={searchString} />
    </div>
  );
}

export default Dashboard;
