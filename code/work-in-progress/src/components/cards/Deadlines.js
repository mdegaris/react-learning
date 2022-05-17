import Card from '../UI/Card';
import { useSelector } from 'react-redux';

import Table from '../UI/Table';

const Deadlines = () => {
  const deadlines = useSelector((state) => state.dashboard.upcomingDeadlines);
  // console.log('deadlines', deadlines);

  return (
    <Card>
      <Table
        headers={['Study', 'Round', 'Deadline', 'Service', 'Actions']}
        tableData={deadlines}
      />
      {/* <Table
        headers={['Study', 'Round', 'Deadline', 'Service', 'Actions']}
        tableData={[
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
          ['CYP0323', 'R2A', '12-MAY-2022', 'Metabolic Stability', ''],
        ]}
      /> */}
    </Card>
  );
};

export default Deadlines;
