interface Props {
  title: string,
  subTitle: string
}

const AirQualityStatus = (props: Props) => {
  return (
    <div className="status">
      <div className="status-header">
        <span>{props.title}</span>
      </div>
      <div className="status-info">
        <span>{props.subTitle}</span>
      </div>
    </div>
  );
};

export default AirQualityStatus;