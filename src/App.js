import Routes from "./routes";
import { Chart, registerables } from 'chart.js';

export default function App() {
  Chart.register(...registerables);
  return (
    <Routes />
  )
}