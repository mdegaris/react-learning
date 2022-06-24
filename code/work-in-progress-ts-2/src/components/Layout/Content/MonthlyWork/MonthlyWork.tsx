import React from 'react';
import Card from '../../../UI/Card';

type Props = {};

const MonthlyWork = (props: Props) => {
  return (
    <div>
      <Card>
        <div className='month-year'>
          <label>
            Month / Year
            <input
              name='month'
              type='text'
              list='monthYear'
              placeholder='Month'
            />
            <datalist id='monthYear'>
              <option value='March 2022' />
              <option value='April 2022' />
              <option value='May 2022' />
              <option value='June 2022' />
            </datalist>
          </label>
        </div>
        <div className='service-group'>
          <label>
            Service Group
            <input
              name='service'
              type='text'
              list='serviceGroup'
              placeholder='Service Group'
            />
            <datalist id='serviceGroup'>
              <option value='ALL' />
              <option value='PhysChem' />
              <option value='Transporters' />
              <option value='Permeability' />
              <option value='Other' />
            </datalist>
          </label>
        </div>
        <div className='study-pm'>
          <label>
            Study / PM
            <input
              name='study'
              type='text'
              list='studyPM'
              placeholder='Study / PM'
            />
            <datalist id='studyPM'>
              <option value='ALL' />
              <option value='James Harrison' />
              <option value='Adrian Walker' />
              <option value='CYP0174' />
              <option value='CYP0244' />
              <option value='CYP0694' />
              <option value='CYP1676' />
              <option value='CYP1822' />
            </datalist>
          </label>
        </div>
      </Card>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default MonthlyWork;
