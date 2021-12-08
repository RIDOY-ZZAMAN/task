import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
    const data = [
        {
            name: '2016',
            students: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: '2017',
            students: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: '2018',
            students: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: '2019',
            students: 1410,
            pv: 1200,
            amt: 1228,
        },
        {
            name: '2020',
            students: 1420,
            pv: 1108,
            amt: 1100,
        },
        {
            name: '2021',
            students: 1540,
            pv: 680,
            amt: 1700,
        },
    ];
    return (
        <div>
            <div>
                <h2>Analytics </h2>
                <ResponsiveContainer width="60%" aspect={3}>
                    <ComposedChart
                        width={300}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="students" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Analytics;