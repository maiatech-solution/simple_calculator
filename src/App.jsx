import { Container, Content, Row } from "./styles";
import Input from "./components/Input/";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fistNumber, setFistNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFistNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };


  //Adição
  const handleSumNumber = () => {
    if (fistNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(fistNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  //Subtração
  const handleMinusNumber = () => {
    if (fistNumber === "0") {
      setFistNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(fistNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

    //Divisão
    const handleDivNumber = () => {
      if (fistNumber === "0") {
        setFistNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation("/");
      } else {
        const sum = Number(fistNumber) / Number(currentNumber);
        setCurrentNumber(String(sum));
        setOperation("");
      }
    };

       //Mult
       const handleMultNumber = () => {
        if (fistNumber === "0") {
          setFistNumber(String(currentNumber));
          setCurrentNumber("0");
          setOperation("x");
        } else {
          const sum = Number(fistNumber) * Number(currentNumber);
          setCurrentNumber(String(sum));
          setOperation("");
        }
      };

  //igual
  const handleEquals = () => {
    if (fistNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        case "x":
          handleMultNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <h1>Simple Calculator</h1>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button className={"clear"} label={"c"} onClick={handleOnClear} />
          <Button className={"opera"} label={"/"} onClick={handleDivNumber} />
          <Button className={"opera"} label={"x"} onClick={handleMultNumber} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button className={"opera"} label={"-"} onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button className={"opera"} label={"+"} onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button className={"opera"} label={"="} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
