## Суть решения задания
В файле "clock.js" четыре классовых компонента: "Clock_MSK", "Select_MSK", "Clock_KRSK", "Select_KRSK". По два на каждый город.
<br>
"Clock_MSK" и "Clock_KRSK":
<br>
1. отрисовывают часовые штрихи, стрелки, и их углы наклона при движении;
2. высчитывают время GMT 0, прибавляют значения datediff из состояния компонентов "Clock_(город)" для точки отсчета времени (базовый город).
"Select_(город)" создает выпадающий список, при выборе города изменяется время, часовая стрелка сдвигается согласно значению value.
В качестве дефолтного состояния выбраны Красноярск и Москва.
(this.state = {
      value: 0
    };)
<b>Установка модулей:</b>
<br>
<ol>
<li>npm install webpack webpack-cli --save-dev</li>
<li>npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev</li>
<li>npm install css-loader style-loader sass-loader html-loader url-loader--save-dev</li>
<li>npm install html-webpack-plugin --save-dev</li>
<li>npm install webpack-dev-server --save-dev</li>
<li>npm start</li>
</ol>
