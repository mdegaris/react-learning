import React from 'react';
import Card from '../../UI/Card';
import classes from './ServiceList.module.css';

type Props = {};

const ServiceList = (props: Props) => {
  return (
    <div className={classes.container}>
      <Card>ServiceList</Card>
    </div>
    // <div className='card service-list'>
    //   <header className='card-header'>
    //     <div>Work for May 2022</div>
    //   </header>
    //   <div className='card-content'>
    //     <div className='service-filter'>
    //       <input type='search' placeholder='Filter, e.g. 694 stability rat ' />
    //     </div>
    //     <div>
    //       <table className='scrollable-table services-table'>
    //         <thead>
    //           <tr>
    //             <th>Study</th>
    //             <th>Round</th>
    //             <th>Service</th>
    //             <th>Receipt Date</th>
    //             <th>Deadline</th>
    //             <th>Compounds</th>
    //             <th>Delivered</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100A</td>
    //             <td>Metabolic Stability</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>12</td>
    //             <td>10</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0323</td>
    //             <td>R100B</td>
    //             <td>MDCK</td>
    //             <td>10-May-2022</td>
    //             <td>17-May-2022</td>
    //             <td>8</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP0694</td>
    //             <td>R188A</td>
    //             <td>Matrix Matched Protein Binding</td>
    //             <td>15-May-2022</td>
    //             <td>22-May-2022</td>
    //             <td>55</td>
    //             <td>0</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1676</td>
    //             <td>R287A</td>
    //             <td>Reversible Inhibition</td>
    //             <td>22-May-2022</td>
    //             <td>29-May-2022</td>
    //             <td>23</td>
    //             <td>20</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1822</td>
    //             <td>R387B</td>
    //             <td>Nuclear Receptor Activation</td>
    //             <td>2-May-2022</td>
    //             <td>9-May-2022</td>
    //             <td>18</td>
    //             <td>5</td>
    //           </tr>
    //           <tr>
    //             <td>CYP1143</td>
    //             <td>R355C</td>
    //             <td>Hepatocyte Stability</td>
    //             <td>5-May-2022</td>
    //             <td>19-May-2022</td>
    //             <td>32</td>
    //             <td>0</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //     <div className='gauges-container'>
    //       <div className='gauge-labels'>
    //         <div>28 Completed</div>
    //         <div>Rounds</div>
    //         <div>21 Active</div>
    //       </div>
    //       <div className='gauges-rounds'>
    //         <div className='done'></div>
    //         <div className='todo'></div>
    //       </div>
    //       <div className='gauge-labels'>
    //         <div>324 Delivered</div>
    //         <div>Compounds</div>
    //         <div>278 Undelivered</div>
    //       </div>
    //       <div className='gauges-compounds'>
    //         <div className='done'></div>
    //         <div className='todo'></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ServiceList;
