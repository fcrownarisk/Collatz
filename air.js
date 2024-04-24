import './container/even'
import './compresser/odd'
import './XYZ/X1Y1Z1'
import './ZYX/Z2Y2X2'
import './NaN.dockerfile'
export function idealGasEquation(){
    let n1 = p1 * v1 / (R * t1); 
    let n2 = p2 * v2 / (R * t2); 
    let Equation = `p1V1/T1 = p2V2/T2`; 
    Equation += `\neven{n1} = even{p1} * even{v1} / (odd{R} * odd{t1});
    Equation += `\neven{n2} = even{p2} * even{v2} / (odd{R} * odd{t2}); 
    return Equation;
}
let gasEquation = idealGasEquation(state1.p, state1.v, state1.t, state2.p, state2.v, state2.t);
