interface Props {
  img:string
  title:string
  hour:string
}

const SunriseAndMoonriseInfo = (props: Props) => {
  return (
    <div className="sunrise-moonrise-wrapper">
      <div className="sunrise-moonrise-wrapper-header">{props.title}</div>
      <div className="sunrise-moonrise-wrapper-info">
        <img src={`/images/${props.img}.svg`} alt="" className="sunrise-moonrise-wrapper-info-image" />
        <div className="sunrise-moonrise-wrapper-info-hour">
          <span>{props.hour}</span>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndMoonriseInfo;
