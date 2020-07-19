import React from 'react';
import ex1 from '../../assets/ex1.png'
import ex2 from '../../assets/ex2.png'
import ex3 from '../../assets/ex3.png'
import ex4 from '../../assets/ex4.png'
import ex5 from '../../assets/ex5.png'
import ex6 from '../../assets/ex6.png'
import ex7 from '../../assets/ex7.png'
import ex8 from '../../assets/ex8.png'
import ex9 from '../../assets/ex9.png'
import ex10 from '../../assets/ex10.png'
import ex11 from '../../assets/ex11.png'

const exceptionsImg = {
    IOException: ex1,
    DivideByZeroException: ex2,
    NullPointerException: ex3,
    ArithmeticException: ex4,
    FileNotFoundException: ex5,
    IndexOutOfBoundsException: ex6,
    InterruptedException: ex7,
    ClassNotFoundException: ex8,
    NoSuchFieldException: ex9,
    NoSuchMethodException: ex10,
    RuntimeException: ex11
};
const Exceptions = ({ exceptions }) => {
    return (
        exceptions.map(exception => {
            return (
              <div key={Math.random()} style={{ position: 'absolute', bottom: exception.y + 'px', left: exception.x + 'px' }}>
                <img src={exceptionsImg[exception.exceptionType]} alt="" />
              </div>
            )
          })
        )

};
export default React.memo(Exceptions)