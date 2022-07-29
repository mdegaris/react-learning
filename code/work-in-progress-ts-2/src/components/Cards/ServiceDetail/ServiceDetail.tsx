import React from 'react';
import { isPropertySignature } from 'typescript';
import { AppProps, ServiceItem } from '../../../types';
import Card from '../../UI/Card';
import styles from './ServiceDetail.module.css';

interface ServiceDetailsProps extends AppProps {
  service?: ServiceItem;
}

const ServiceDetail = (props: ServiceDetailsProps) => {
  console.log(props.service?.id);

  const title =
    props.service?.serviceName +
    ' : ' +
    props.service?.study +
    '-' +
    props.service?.round;

  return (
    <div className={styles.container}>
      <Card title={title}>
        <div className='card service-detail'>
          <div className='card-content'>
            <div className='service-info'>
              <div className='study-manager'>
                Study Manager: {props.service?.studyManager}
              </div>
              <div className='deadline'>
                Deadline: {props.service?.deadlineDate}
              </div>
              <div className='grid-section'>
                <table className='scrollable-table variables-table'>
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        {props.service?.serviceName} (
                        {props.service?.serviceCode})
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ProteinType</td>
                      <td>Microsomes</td>
                    </tr>
                    <tr>
                      <td>ProteinSource</td>
                      <td>Liver</td>
                    </tr>
                    <tr>
                      <td>ProteinConc</td>
                      <td>0.5</td>
                    </tr>
                    <tr>
                      <td>Species</td>
                      <td>Dog</td>
                    </tr>
                    <tr>
                      <td>Strain</td>
                      <td>Beagle</td>
                    </tr>
                    <tr>
                      <td>Sex</td>
                      <td>MALE</td>
                    </tr>
                    <tr>
                      <td>SubstrateConc</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>FinalTimePoint</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>Cofactor</td>
                      <td>NADPH</td>
                    </tr>
                    <tr>
                      <td>BufferType</td>
                      <td>KPO4/MgC12</td>
                    </tr>
                    <tr>
                      <td>TerminationSolution</td>
                      <td>ACN</td>
                    </tr>
                    <tr>
                      <td>SingleIncubation</td>
                      <td>True</td>
                    </tr>
                    <tr>
                      <td>Method</td>
                      <td>Cofactor Incubation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='grid-section'>
                <table>
                  <thead>
                    <tr>
                      <th colSpan={2}>Compounds</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Received</td>
                      <td>10-May-2022</td>
                    </tr>
                    <tr>
                      <td>Ordered</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Undelivered</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='grid-section'>
                <table className='scrollable-table tasks-table'>
                  <thead>
                    <tr>
                      <th>Labsys Task</th>
                      <th>SOP</th>
                      <th>Compounds</th>
                      <th>Locked?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11345</td>
                      <td>P078</td>
                      <td>5</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>11342</td>
                      <td>P078</td>
                      <td>10</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>11325</td>
                      <td>P078</td>
                      <td>15</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>11313</td>
                      <td>P078</td>
                      <td>15</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>11213</td>
                      <td>P078</td>
                      <td>15</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='grid-section nav-links'>
                <button id='service-matrix'>Service Matrix</button>
                <button id='ful-matrix'>Fulfilment Matrix</button>
                <button id='details'>Round Details</button>
                <button id='extract'>Result Extraction</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceDetail;
