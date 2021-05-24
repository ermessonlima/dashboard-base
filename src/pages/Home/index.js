import React from 'react';
import { Link } from 'react-router-dom';
import { FirstSection, SecondSection, SecondBox, FirstBox } from './styled';
import Doughnut from '../../components/Doughnut/Doughnut';
import VerticalVar from '../../components/VerTicalBar/VerticalBar';
const Page = () => {
    return (

        <div style={{
            position: 'absolute', flexDirection: 'row', display: 'flex', justifyContent: 'space-around',
            flex: 1, width: 950, alignItems: 'flex-end', height: 700, marginTop: -10
        }}>

            <FirstSection>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <FirstBox style={{ height: 145, flex: 1, marginRight: 5 }}>
                        <div className="content-chart">
                            <div className="card-chart">
                                <Doughnut />
                            </div>

                            <div className="chart-table">
                                <table className="table">
                                    <tbody>
                                        <tr className="row">
                                            <td className="row-blue">1</td>
                                            <td className="row-blue">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-purple">2</td>
                                            <td className="row-purple">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-orange">3</td>
                                            <td className="row-orange">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-darkorange">4</td>
                                            <td className="row-darkorange">34%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FirstBox>
                    <FirstBox style={{ height: 145, flex: 1, marginLeft: 5 }}>

                    </FirstBox>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <FirstBox style={{ height: 145, flex: 1, marginRight: 5 }}>
                        <div className="content-chart">
                            <div className="card-chart">
                                <Doughnut />
                            </div>

                            <div className="chart-table">
                                <table className="table">
                                    <tbody>
                                        <tr className="row">
                                            <td className="row-blue">1</td>
                                            <td className="row-blue">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-purple">2</td>
                                            <td className="row-purple">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-orange">3</td>
                                            <td className="row-orange">34%</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="row-darkorange">4</td>
                                            <td className="row-darkorange">34%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FirstBox>
                    <FirstBox style={{ height: 145, flex: 1, marginLeft: 5 }}>

                    </FirstBox>
                </div>




                <FirstBox style={{height: 300, width: 600, justifyContent: 'center', alignItems: 'center', display:"flex"}}>
                    <div className="graph-content">
                        <VerticalVar />
                    </div>
                </FirstBox>

            </FirstSection>

            <SecondSection>
                <div >

                    <SecondBox style={{ marginBottom: 10 }}>


                    </SecondBox>
                    <SecondBox >

                    </SecondBox>

                </div>




            </SecondSection>



        </ div>

    )
}
export default Page;