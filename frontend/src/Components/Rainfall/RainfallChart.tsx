import { BarChart, Bar, XAxis} from "recharts";

const RainfallChart = () => {
  return (
    <div className="rainfall-chart">
      <BarChart width={375} height={300}>
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
