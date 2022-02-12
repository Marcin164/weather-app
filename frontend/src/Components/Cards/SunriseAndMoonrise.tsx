import Card from "./Card";
import SunriseAndMoonriseInfo from "./SunriseAndMoonriseInfo";

interface Props {
  sunrise:string
  moonrise:string
}

const SunriseAndMoonrise = (props: Props) => {
  if (props.sunrise === undefined || props.moonrise === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card title="Sunrise and moonrise" className="sunrise-moonrise-card">
        <SunriseAndMoonriseInfo img="Sunrise" hour={props.sunrise} title="Sunrise"/>
        <SunriseAndMoonriseInfo img="Moonrise" hour={props.moonrise} title="Moonrise"/>
    </Card>
  );
};

export default SunriseAndMoonrise;