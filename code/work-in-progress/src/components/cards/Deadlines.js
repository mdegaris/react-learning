import Card from '../UI/Card';
import Table from '../UI/Table';
import { useMemo } from 'react';
// import { useSelector } from 'react-redux';

// import Table from '../UI/Table';

const Deadlines = () => {
  // const allDeadlines = useSelector((state) => state.deadlines.deadlineItems);

  const columns = useMemo(
    () => [
      {
        Header: 'Upcoming deadlines',

        columns: [
          {
            Header: 'Study',
            accessor: 'studyId',
          },
          {
            Header: 'Round',
            accessor: 'round',
          },
          {
            Header: 'Service',
            accessor: 'service',
          },
          {
            Header: 'Deadline Date',
            accessor: 'date',
          },
        ],
      },
    ],
    []
  );

  // const data = useMemo(
  //   () =>
  //     allDeadlines.map((deadline) => {
  //       return {
  //         studyId: deadline.studyId,
  //         round: deadline.round,
  //         service: deadline.service,
  //         date: deadline.date,
  //       };
  //     }),
  //   [allDeadlines]
  // );

  return (
    <Card>
      <Table />
    </Card>
  );
};

export default Deadlines;
