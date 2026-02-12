import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult("");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <h2>Calculator</h2>

      <div>
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => calculate("add")}>Add</button>
        <button onClick={() => calculate("subtract")} style={{ marginLeft: "5px" }}>
          Subtract
        </button>
        <button onClick={() => calculate("multiply")} style={{ marginLeft: "5px" }}>
          Multiply
        </button>
        <button onClick={() => calculate("divide")} style={{ marginLeft: "5px" }}>
          Divide
        </button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
