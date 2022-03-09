import Routes from "./routes";
import { Chart, registerables } from 'chart.js';
import ReactTooltip from 'react-tooltip';

export default function App() {
  Chart.register(...registerables);
  return (
    <>
      <Routes />
      <ReactTooltip />
    </>
  )
}