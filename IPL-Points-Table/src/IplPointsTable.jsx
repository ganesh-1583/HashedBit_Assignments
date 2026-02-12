import { useEffect, useState } from "react";

function IPLPointsTable() {
  const [teams, setTeams] = useState([]);
  const [originalTeams, setOriginalTeams] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        setOriginalTeams(data);
        setTeams(data);
      });
  }, []);

  const handleToggle = () => {
    if (!sorted) {
      const sortedData = [...teams].sort((a, b) => b.NRR - a.NRR);
      setTeams(sortedData);
    } else {
      setTeams(originalTeams);
    }
    setSorted(!sorted);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>IPL 2022 Points Table</h2>

      <button
        onClick={handleToggle}
        style={{ marginBottom: "15px", padding: "6px 12px" }}
      >
        {sorted ? "Show Normal Table" : "Sort by NRR"}
      </button>

      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "80%",
        }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPLPointsTable;
