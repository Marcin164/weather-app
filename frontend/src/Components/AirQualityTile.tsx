interface Props {
  name: string;
  value: number;
}

const AirQualityTile = (props: Props) => {
  return (
    <div className="air-quality-tile">
      <div className="air-quality-tile__header">
        <span>{props.value}</span>
      </div>
      <div className="air-quality-tile__value">
        <span>{props.name}</span>
      </div>
    </div>
  );
}

export default AirQualityTile