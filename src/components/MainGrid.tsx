import { GridElement } from "./GridElement";
import { StatePair } from "../utils/StatePair";
import { useURLState } from "../utils/useURLState";

export interface Data {
  number: string;
  i: number;
  j: number;
}
export interface Estimation extends Data {
  estimation: string;
}
export interface Estimations {
  [i: number]: { [j: number]: number | null };
}

export interface MainGridProps {
  estimationsState: StatePair<Estimations>;
  estimationModalState: StatePair<null | Estimation>;
}

export function MainGrid(props: MainGridProps) {
  const [estimations] = props.estimationsState;
  const [, setEstimation] = props.estimationModalState;

  const [gridLines] = useURLState("grid-lines");
  const [blind] = useURLState("blind");
  const [xP] = useURLState("xP");
  const [xN] = useURLState("xN");
  const [yP] = useURLState("yP");
  const [yN] = useURLState("yN");
  const [xAxisFactor] = useURLState("xAxisFactor");
  const [yAxisFactor] = useURLState("yAxisFactor");
  const [centralNumber] = useURLState("centralNumber");
  const [base] = useURLState("base");

  const precalc: Data[][] = [];
  for (let i = 0; i < yP + yN + 1; i++) {
    precalc[i] = [];
    for (let j = 0; j < xP + xN + 1; j++) {
      const row = yP - i;
      const column = j - xN;
      const number =
        centralNumber *
        Math.pow(yAxisFactor, row) *
        Math.pow(xAxisFactor, column);
      precalc[i][j] = {
        number: number.toString(base).slice(0, 10),
        i: row,
        j: column,
      };
    }
  }

  return (
    <table
      style={{ width: "100vw", textAlign: "center", overflow: "hidden" }}
      className={`${blind ? "" : "notBlind"} main-grid`}
    >
      <tbody>
        {precalc.map((row, i) => (
          <tr key={i}>
            {row.map((data, j) => (
              <GridElement
                key={j}
                data={data}
                estimations={estimations}
                setEstimation={setEstimation}
                gridLines={gridLines}
                blind={blind}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
