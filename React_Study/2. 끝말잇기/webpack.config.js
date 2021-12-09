const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },// 확장자를 알아서 찾아서 app.js로 만들어준다.
    
    entry: {
        app: ['./client.jsx'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/, //js과 jsx파일에 룰 적용
            loader: 'babel-loader', // babel-loader라는 룰을 적용하겠다.
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                // 알아서 jsx파일이나 js파일에 바벨을 적용해줄 것이다. 
            },
        }], //rules는 여러개의 규칙을 적용할 수 있기에 배열이다.
    },

    output: {
        path: path.join(__dirname, 'dist'), //C:\Users\HayeongShin\Learn_React\React_Study\2. 끝말잇기\dist
        // path.join이 현재 폴더(__dirname) 안에서 dist를 만들어준다는 것
        filename: 'app.js'
    }, // 출력
};