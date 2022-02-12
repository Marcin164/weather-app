interface Props {
  value:number;
  tag:string
}

const AirQualityInfo = (props: Props) => {
  return (
    <div className="air-quality-info-wrapper">
      <div className="air-quality-info-wrapper-value">
        <span>{props.value}</span>
      </div>
      <div className="air-quality-info-wrapper-name">
        <span>{props.tag}</span>
      </div>
    </div>
  ); 
};

export default AirQualityInfo;
