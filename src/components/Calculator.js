import React, {useState, useEffect} from 'react';
import './Calculator.css'

  function Calculator () {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [people, setPeople] = useState(1);
    const [total, setTotal] = useState(0);
    const [tipTotal, setTipTotal] = useState(0);

    const handleInputChange = (e, type) => {
      switch (type) {
        case 'bill':
          setBill(parseFloat(e.target.value));
          break;
        case 'tipPercent':
          setTipPercent(parseFloat(e.target.value));
          setTipAmount((bill * (parseFloat(e.target.value) / 100)));
          break;
        case 'tipAmount':
          setTipAmount(parseFloat(e.target.value));
          setTipPercent(((parseFloat(e.target.value) / bill) * 100).toFixed(2));
          break;
        case 'people':
          setPeople(parseInt(e.target.value));
          break;
        default:
          break;
      }
    }

    useEffect(() => {
      const newTipAmount = bill * (tipPercent / 100) / people;
      const newTotal = newTipAmount + (bill / people);
      setTotal(newTotal.toFixed(2));
      setTipTotal(newTipAmount.toFixed(2));

      }, [bill, tipPercent, tipAmount, people])

      return (
        <div>
          <h1>Tip Calculator</h1>
          <div>
            <label>Bill</label>
            <input type="number" min={0} value={bill} onChange={(e) => handleInputChange(e, 'bill')} />
          </div>
          <div className="tip-settings">
            <label>Tip %</label>
            <input type="number" min={0} value={tipPercent} onChange={(e) => handleInputChange(e, 'tipPercent')} />

            <label>Tip $</label>
            <input type="number" min={0} value={tipAmount} onChange={(e) => handleInputChange(e, 'tipAmount')} />
          </div>
          <div>
            <label>People</label>
            <input type="number" min={1} value={people} onChange={(e) => handleInputChange(e, 'people')} />
          </div>
          <div>
            <h2>Total</h2>
            <p>${total} {people > 1 ? 'per person' : null}</p>
          </div>
          <div>
            <h2>Tip Amount</h2>
            <p>${tipTotal} {people > 1 ? ' per person' : null}</p>
          </div>
        </div>
      )
  }

  export default Calculator;