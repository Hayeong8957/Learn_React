const React = require('react');
// 스크립트로 안하고 node의 모듈 시스템을 활용해 require
const { useState, useRef } = React;

const Gugudan = () => { 
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
            if (parseInt(value) === first * second) {
                setResult('정답: ' + value);
                // setResult((prevResult) => {
                //     return '정답: ' + value
                // });
                // // 옛날 prevResult를 활용하는 경우엔 setResult도 함수형으로 바꿔줄 수 있다.
                setFirst(Math.ceil(Math.random() * 9));
                setSecond(Math.ceil(Math.random() * 9));
                setValue('');
                inputRef.current.focus();
                } else {
                setResult('땡');
                setValue('');
                inputRef.current.focus();
            }
            // 랜더링할 때 한 번 밖에 안 일어남. => 비동기
            // setstate를 모아서 한번에 하게끔 한다. 
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    console.log('랜더링');
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input 
                    ref={inputRef} 
                    onChange={onChangeInput} 
                    value={value} 
                />
                <button>입력!</button>    
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = Gugudan;