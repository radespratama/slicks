import { useContext } from "react";
import { formatDistanceToNow } from "date-fns/esm";
import toID from "date-fns/esm/locale/id";

import { CyclesContext } from "../../libs/context/CyclesContext";
import * as I from "./history.style";

export default function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <I.HistoryContainer>
      <I.HistoryHeading>My History</I.HistoryHeading>
      <I.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Start</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: toID,
                  })}
                </td>
                <td>{cycle.minutesAmount}</td>
                <td>
                  {cycle.finishedDate && (
                    <I.Status className="icons">Concluded</I.Status>
                  )}
                  {cycle.interruptedDate && (
                    <I.Status className="icons">Interrupted</I.Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <I.Status className="icons">In progress</I.Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </I.HistoryList>
    </I.HistoryContainer>
  );
}
