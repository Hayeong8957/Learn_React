import React, { Component } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;   
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(), // ex: [1, 3, 5, 6]
        tries: [], // 배열에 값을 넣을 때 push를 많이 쓰는데, 리액트에서 사용 불가
    };

    onSubmitForm = (e) => {
        e.prevenDefault();
        if (this.state.value === this.state.answer.join('')) { // 답 비교, 맞으면 홈런,
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.vlue, result: '홈런!' }],
            })
            alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
        } else { // 답 틀렸으면
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) { // 10번 이상 틀렸을 때, 실패
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else { // strike랑 ball판단
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({ // 기회 더 줌
                    tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                });
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                {this.state.tries.map((v, i) => { // i는 인덱스를 나타냄 
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo={v} index={i} />
                        // v => tries의 객체가 됨, v.tires, v.result
                    );
                })}
                </ul>
            </>
        )

    }
}

export default NumberBaseball;