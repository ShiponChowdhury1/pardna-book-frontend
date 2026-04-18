import { Pie, PieChart, Sector, Tooltip } from 'recharts';
import type { PieLabelRenderProps, PieSectorShapeProps } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Active Pardnas', value: 12 },
  { name: 'Completed', value: 8 },
  { name: 'Paused', value: 3 },
  { name: 'Overdue', value: 2 },
];

const COLORS = ['#7C3AED', '#10B981', '#F59E0B', '#EF4444'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) return null;
  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const ncx = Number(cx);
  const ncy = Number(cy);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

const MyCustomSector = (props: PieSectorShapeProps) => (
  <Sector {...props} fill={COLORS[(props.index ?? 0) % COLORS.length]} stroke="none" strokeWidth={0} />
);

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const index = data.findIndex((d) => d.name === item.name);
  return (
    <div style={{
      backgroundColor: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: '10px',
      padding: '10px 14px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
      fontSize: '13px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS[index] ?? '#7C3AED', display: 'inline-block' }} />
        <span style={{ color: '#111827', fontWeight: 600 }}>{item.name}</span>
      </div>
      <p style={{ color: '#6B7280', marginTop: 4, fontWeight: 500 }}>{item.value} groups</p>
    </div>
  );
};

const total = data.reduce((s, d) => s + d.value, 0);

export default function PardnaStatusPieChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-dark)] mb-1">Pardna Status Distribution</h3>
          <p className="text-xs text-[var(--color-gray-400)]">Overview of all pardna group statuses</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[var(--color-gray-400)]">Total Groups</p>
          <p className="text-sm font-bold text-[var(--color-dark)]">{total}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex justify-center">
        <PieChart
          style={{ width: '100%', maxWidth: '300px', aspectRatio: 1 }}
          responsive
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            innerRadius={55}
            dataKey="value"
            stroke="none"
            strokeWidth={0}
            shape={MyCustomSector}
          />
          <Tooltip content={<CustomTooltip />} />
          <RechartsDevtools />
        </PieChart>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-50">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[index] }} />
            <div className="min-w-0">
              <p className="text-xs font-medium text-[var(--color-dark)] truncate">{entry.name}</p>
              <p className="text-xs text-[var(--color-gray-400)]">{entry.value} groups</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
