import React from 'react';
import TitleBanner from '../TitleBanner/TitleBanner';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        { x: 1, y: 28 },
        { x: 2, y: 30 },
        { x: 3, y: 30 },
        { x: 4, y: 30 },
        { x: 5, y: 30 },
        { x: 6, y: 30 },
        { x: 7, y: 30 },
    ];
    return (
        <div>
            <TitleBanner>My Assignment Marks</TitleBanner>
            <div className='container'> 
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="Assignment No" unit="" />
                        <YAxis type="number" dataKey="y" name="Marks" unit="" />
                        <ZAxis type="number" range={[100]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Assignment Marks Graph" data={data} fill="#8884d8" line shape="cross" />
                       
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;