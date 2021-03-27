(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(273)},174:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),s=a.n(r),c=(a(174),a(13)),o=a(14),l=a(16),u=a(15),d=a(17),m=a(6),h=a(12),S=a(5),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={minutes:"0",seconds:"00",intervalHandle:null},a.secondsRemaining=0,a.tick=a.tick.bind(Object(m.a)(Object(m.a)(a))),a.startCountDown=a.startCountDown.bind(Object(m.a)(Object(m.a)(a))),a.pauseCountDown=a.pauseCountDown.bind(Object(m.a)(Object(m.a)(a))),a.resumeCountDown=a.resumeCountDown.bind(Object(m.a)(Object(m.a)(a))),a.updateTimer=a.updateTimer.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.startCountDown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalHandle),this.setState({intervalHandle:null})}},{key:"updateTimer",value:function(){clearInterval(this.state.intervalHandle),this.setState({intervalHandle:null}),this.startCountDown()}},{key:"tick",value:function(){var e=Math.floor(this.secondsRemaining/60),t=this.secondsRemaining-60*e;this.setState({minutes:e,seconds:t}),t<10&&this.setState({seconds:"0"+this.state.seconds}),e<10&&this.setState({value:"0"+e}),0===e&0===t&&(clearInterval(this.state.intervalHandle),this.setState({intervalHandle:null}),this.refs.audio.play()),this.secondsRemaining--}},{key:"startCountDown",value:function(){0===this.props.time?this.setState({minutes:"0",seconds:"00"}):(this.setState({intervalHandle:setInterval(this.tick,1e3)}),this.secondsRemaining=this.props.time)}},{key:"pauseCountDown",value:function(){0!==this.props.time&&(clearInterval(this.state.intervalHandle),this.setState({intervalHandle:null}))}},{key:"resumeCountDown",value:function(){this.setState({intervalHandle:setInterval(this.tick,1e3)})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.title,n=e.time,r=this.state,s=r.minutes,c=r.seconds;return i.a.createElement("div",null,i.a.createElement(S.b,{className:t.card},i.a.createElement(S.d,null,i.a.createElement(S.g,{className:t.title,color:"textSecondary",gutterBottom:!0,variant:"h6"},a),i.a.createElement(S.g,{variant:"h3"},"".concat(s,":").concat(c))),i.a.createElement(S.c,null,0!==n&&[null!=this.state.intervalHandle?i.a.createElement(S.a,{key:101,size:"medium",color:"primary",onClick:this.pauseCountDown},"Pause"):i.a.createElement(S.a,{key:102,size:"medium",color:"primary",onClick:this.resumeCountDown},"Resume"),i.a.createElement(S.a,{key:103,size:"medium",color:"primary",onClick:this.updateTimer},"Reset")])),i.a.createElement("audio",{ref:"audio",src:"clock.mp3",preload:"auto"}))}}]),t}(n.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.refs.timercard.updateTimer()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.state,n=e.changeState,r=e.round,s=a.name,c=a.time;return i.a.createElement("div",null,i.a.createElement(S.b,{className:t.card},i.a.createElement(S.d,null,i.a.createElement(S.g,{className:t.title,color:"textSecondary",gutterBottom:!0},"Round: ",r))),i.a.createElement(S.f,null),i.a.createElement(v,{classes:t,time:c,title:s,ref:"timercard"}),i.a.createElement(S.f,null),i.a.createElement(S.b,null,i.a.createElement(S.d,null,i.a.createElement(S.g,{className:t.title,gutterBottom:!0,variant:"h5"},"Next Actions")),i.a.createElement(S.c,{style:{display:"flex",flexWrap:"wrap"}},a.nextStates.map(function(e,a){return i.a.createElement(S.e,{key:a,style:{marginBottom:10},clickable:!0,label:e.name,className:t.chip,onClick:function(){return n(e)}})}))))}}]),t}(n.Component),w=Object(h.withStyles)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(p);function f(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.name=e,this.time=a,this.nextStates=[],this.getNextStateNames=function(){var e=[];return t.nextStates.forEach(function(t){e.push(t.name)}),e},this.addNextState=function(e){t.nextStates.push(e)},this.toString=function(){return"".concat(t.name,"={").concat(t.time,",").concat(t.getNextStateNames(),"}")}}n.Component;var b=function(e){function t(){var e;Object(c.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this));var a=new f("Spirit Phase (Growth, Energy & Choose Powers)",360),n=new f("Fast Power Phase"),i=new f("Play Fast Power",30),r=new f("Invader Phase"),s=new f("Blighted Island Effect",30),o=new f("Fear Effect",60),d=new f("Ravage",90),h=new f("Build",90),S=new f("Build",90),v=new f("Advance Invader Cards"),p=new f("Slow Power Phase"),w=new f("Play Slow Power",60),b=new f("Time Passes"),y=new f("Discard Fear Cards");return a.addNextState(n),n.addNextState(i),n.addNextState(r),i.addNextState(n),r.addNextState(s),s.addNextState(o),o.addNextState(o),o.addNextState(d),d.addNextState(h),h.addNextState(S),S.addNextState(v),v.addNextState(p),p.addNextState(w),p.addNextState(b),w.addNextState(p),b.addNextState(a),b.addNextState(y),y.addNextState(b),e.state={currentState:a,currentRound:1},e.changeState=e.changeState.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"changeState",value:function(e){if("Time Passes"===this.state.currentState.name&&"Spirit Phase (Growth, Energy & Choose Powers)"===e.name&&this.setState({currentRound:this.state.currentRound+1}),0===e.nextStates.length){var t=new f(e.name,e.time);t.addNextState(this.state.currentState),t.addNextState(t),this.setState({currentState:t})}else this.setState({currentState:e})}},{key:"render",value:function(){var e=this.state,t=e.currentState,a=e.currentRound;return i.a.createElement(w,{round:a,state:t,changeState:this.changeState})}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,1,2]]]);
//# sourceMappingURL=main.3138318b.chunk.js.map