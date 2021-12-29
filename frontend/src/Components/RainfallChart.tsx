import { BarChart, Bar, XAxis} from "recharts";

const RainfallChart = () => {
  return (
    <div className="chart">
      <BarChart width={window.length} height={300}>
        <XAxis dataKey="hour"/>
        <Bar
          dataKey="uv"
          barSize={30}
        />
      </BarChart>
    </div>
  );
};

export default RainfallChart;