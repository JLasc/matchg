(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,src:"./images/arryn.png",clicked:!1},{id:2,src:"./images/baratheon.png",clicked:!1},{id:3,src:"./images/bolton.png",clicked:!1},{id:4,src:"./images/frey.png",clicked:!1},{id:5,src:"./images/greyjoy.png",clicked:!1},{id:6,src:"./images/lannister.png",clicked:!1},{id:7,src:"./images/martell.png",clicked:!1},{id:8,src:"./images/mormont.png",clicked:!1},{id:9,src:"./images/stark.png",clicked:!1},{id:10,src:"./images/targaryen.png",clicked:!1},{id:11,src:"./images/tully.png",clicked:!1},{id:12,src:"./images/tyrell.png",clicked:!1}]},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),s=n(4),o=n(5),l=n(7),d=n(6),u=n(8),m=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light justify-content-between header-navbg"},r.a.createElement("a",{className:"navbar-brand navFontSize header-match-title header-font-size"}," Memory Game"),r.a.createElement("span",{className:"mr-sm-2 navFontSize header-font-size"},"Score: ",e.score," | Top Score: ",e.topScore," ")),r.a.createElement("div",{class:"jumbotron jumbotron-fluid text-white jumboBg"},r.a.createElement("div",{class:"container text-center"},r.a.createElement("p",{class:"lead"},"Click on an image to earn points!"),r.a.createElement("p",null,"Do not click the same picture twice."))))},g=function(){return r.a.createElement("div",{className:"footer-style"},r.a.createElement("p",{className:"footer-text text-center"},"Jon Lascaze 2019"))},f={dangerAlert:function(){return r.a.createElement("div",{class:"alert alert-danger text-center",role:"alert"},"You have already clicked that shield. You lose!")},successAlert:function(){return r.a.createElement("div",{class:"alert alert-success text-center",role:"alert"},"You have Won!")}},p=n(1),h=(n(15),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,dataArr:p,isHidden:!0,isWrong:!1},n.shuffle=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},n.toggleHidden=function(){n.setState({isHidden:!n.state.isHidden})},n.toggleHiddenWrong=function(){n.setState({isWrong:!n.state.isWrong})},n.endGame=function(){var e=n.state.dataArr;n.state.topScore>n.state.score?(e.forEach(function(e){e.clicked=!1}),n.setState({score:0}),n.shuffle(p)):(e.forEach(function(e){e.clicked=!1}),n.setState({score:0,topScore:n.state.score}),n.shuffle(p))},n.toggleHidden=function(){n.setState({isHidden:!n.state.isHidden})},n.toggleHiddenWrong=function(){n.setState({isWrong:!n.state.isWrong})},n.winListener=function(){!1===n.state.isHidden?setTimeout(n.toggleHidden,2e3):!0===n.state.isWrong&&setTimeout(n.toggleHiddenWrong,2e3)},n.handleClick=function(e){var t=n.state.dataArr.filter(function(t){return t.id===e});!1===t[0].clicked?(t[0].clicked=!0,n.setState({score:n.state.score+=1}),n.shuffle(p)):12===n.state.score?(n.setState({score:0,topScore:12}),n.toggleHidden()):(n.toggleHiddenWrong(),n.endGame())},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.shuffle(p)}},{key:"render",value:function(){var e=this,t=this.state.dataArr.map(function(t,n){return r.a.createElement("div",{className:"container drop"},r.a.createElement("img",{className:"img-thumbnail",onClick:function(){return e.handleClick(t.id)},key:n,src:t.src,alt:""}))});return r.a.createElement("div",null,r.a.createElement(m,{score:this.state.score,topScore:this.state.topScore}),this.winListener(),!this.state.isHidden&&r.a.createElement(f.successAlert,null),this.state.isWrong&&r.a.createElement(f.dangerAlert,null),r.a.createElement("div",{className:"container drop"},t),r.a.createElement(g,null))}}]),t}(a.Component));i.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.48fa0566.chunk.js.map