/*!
 * VERSION: beta 1.51
 * DATE: 2012-11-13
 * JavaScript
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Copyright (c) 2008-2012, GreenSock. All rights reserved. 
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(n){var G=function(a){var a=a.split("."),c=n,b;for(b=0;b<a.length;b++)c[a[b]]=c=c[a[b]]||{};return c},l=G("com.greensock"),p,j,d,B,H,w={},C=function(a,c,b,i){this.sc=w[a]?w[a].sc:[];w[a]=this;this.gsClass=null;this.def=b;var e=c||[],d=[];this.check=function(c){for(var f=e.length,g=0,m;-1<--f;)(m=w[e[f]]||new C(e[f])).gsClass?d[f]=m.gsClass:(g++,c&&m.sc.push(this));if(0===g&&b){var c=("com.greensock."+a).split("."),f=c.pop(),j=G(c.join("."))[f]=this.gsClass=b.apply(b,d);i&&((n.GreenSockGlobals||
n)[f]=j,"function"===typeof define&&define.amd?define((n.GreenSockAMDPath?n.GreenSockAMDPath+"/":"")+a.split(".").join("/"),[],function(){return j}):"undefined"!==typeof module&&module.exports&&(module.exports=j));for(f=0;f<this.sc.length;f++)this.sc[f].check(!1)}};this.check(!0)},r=l._class=function(a,c,b){new C(a,[],function(){return c},b);return c};n._gsDefine=function(a,c,b,i){return new C(a,c,b,i)};var I=[0,0,1,1],D=[],t=r("easing.Ease",function(a,c,b,i){this._func=a;this._type=b||0;this._power=
i||0;this._params=c?I.concat(c):I},!0);d=t.prototype;d._calcEnd=!1;d.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var c=this._type,b=this._power,i=1===c?1-a:2===c?a:0.5>a?2*a:2*(1-a);1===b?i*=i:2===b?i*=i*i:3===b?i*=i*i*i:4===b&&(i*=i*i*i*i);return 1===c?1-i:2===c?i:0.5>a?i/2:1-i/2};p=["Linear","Quad","Cubic","Quart","Quint"];for(j=p.length;-1<--j;)d=r("easing."+p[j],function(){},!0),B=r("easing.Power"+j,function(){},!0),d.easeOut=B.easeOut=new t(null,
null,1,j),d.easeIn=B.easeIn=new t(null,null,2,j),d.easeInOut=B.easeInOut=new t(null,null,3,j);r("easing.Strong",l.easing.Power4,!0);l.easing.Linear.easeNone=l.easing.Linear.easeIn;var J=r("events.EventDispatcher",function(a){this._listeners={};this._eventTarget=a||this});d=J.prototype;d.addEventListener=function(a,c,b,i,e){var e=e||0,d=this._listeners[a],h=0,f;null==d&&(this._listeners[a]=d=[]);for(f=d.length;-1<--f;)a=d[f],a.c===c?d.splice(f,1):0===h&&a.pr<e&&(h=f+1);d.splice(h,0,{c:c,s:b,up:i,pr:e})};
d.removeEventListener=function(a,c){var b=this._listeners[a];if(b)for(var i=b.length;-1<--i;)if(b[i].c===c){b.splice(i,1);break}};d.dispatchEvent=function(a){var c=this._listeners[a];if(c)for(var b=c.length,i,d=this._eventTarget;-1<--b;)i=c[b],i.up?i.c.call(i.s||d,{type:a,target:d}):i.c.call(i.s||d)};var y=n.requestAnimationFrame,E=n.cancelAnimationFrame,K=Date.now||function(){return(new Date).getTime()};p=["ms","moz","webkit","o"];for(j=p.length;-1<--j&&!y;)y=n[p[j]+"RequestAnimationFrame"],E=n[p[j]+
"CancelAnimationFrame"]||n[p[j]+"CancelRequestAnimationFrame"];r("Ticker",function(a,c){var b=this,i=K(),d=!1!==c&&y,k,h,f,g,m,j=function(){null!=f&&(!d||!E?n.clearTimeout(f):E(f),f=null)},l=function(a){b.time=(K()-i)/1E3;if(!k||b.time>=m||a)b.frame++,m=b.time>m?b.time+g-(b.time-m):b.time+g-0.001,m<b.time+0.001&&(m=b.time+0.001),b.dispatchEvent("tick");!0!==a&&(f=h(l))};J.call(b);this.time=this.frame=0;this.tick=function(){l(!0)};this.fps=function(a){if(!arguments.length)return k;k=a;g=1/(k||60);
m=this.time+g;h=0===k?function(){}:!d||!y?function(a){return n.setTimeout(a,1E3*(m-b.time)+1>>0||1)}:y;j();f=h(l)};this.useRAF=function(a){if(!arguments.length)return d;j();d=a;b.fps(k)};b.fps(a);n.setTimeout(function(){d&&!f&&b.useRAF(!1)},1E3)});d=l.Ticker.prototype=new l.events.EventDispatcher;d.constructor=l.Ticker;var q=r("core.Animation",function(a,c){this.vars=c||{};this._duration=this._totalDuration=a||0;this._delay=Number(this.vars.delay)||0;this._timeScale=1;this._active=!0==this.vars.immediateRender;
this.data=this.vars.data;this._reversed=!0==this.vars.reversed;if(u){H||(s.tick(),H=!0);var b=this.vars.useFrames?x:u;b.insert(this,b._time);this.vars.paused&&this.paused(!0)}}),s=q.ticker=new l.Ticker;d=q.prototype;d._dirty=d._gc=d._initted=d._paused=!1;d._totalTime=d._time=0;d._rawPrevTime=-1;d._next=d._last=d._onUpdate=d._timeline=d.timeline=null;d._paused=!1;d.play=function(a,c){arguments.length&&this.seek(a,c);this.reversed(!1);return this.paused(!1)};d.pause=function(a,c){arguments.length&&
this.seek(a,c);return this.paused(!0)};d.resume=function(a,c){arguments.length&&this.seek(a,c);return this.paused(!1)};d.seek=function(a,c){return this.totalTime(Number(a),!1!=c)};d.restart=function(a,c){this.reversed(!1);this.paused(!1);return this.totalTime(a?-this._delay:0,!1!=c)};d.reverse=function(a,c){arguments.length&&this.seek(a||this.totalDuration(),c);this.reversed(!0);return this.paused(!1)};d.render=function(){};d.invalidate=function(){return this};d._enabled=function(a,c){this._gc=!a;
this._active=a&&!this._paused&&0<this._totalTime&&this._totalTime<this._totalDuration;!0!=c&&(a&&null==this.timeline?this._timeline.insert(this,this._startTime-this._delay):!a&&null!=this.timeline&&this._timeline._remove(this,!0));return!1};d._kill=function(){return this._enabled(!1,!1)};d.kill=function(a,c){this._kill(a,c);return this};d._uncache=function(a){for(a=a?this:this.timeline;a;)a._dirty=!0,a=a.timeline;return this};d.eventCallback=function(a,c,b,i){if(null==a)return null;if("on"===a.substr(0,
2)){if(1===arguments.length)return this.vars[a];if(null==c)delete this.vars[a];else if(this.vars[a]=c,this.vars[a+"Params"]=b,this.vars[a+"Scope"]=i,b)for(var d=b.length;-1<--d;)"{self}"===b[d]&&(b=this.vars[a+"Params"]=b.concat(),b[d]=this);"onUpdate"===a&&(this._onUpdate=c)}return this};d.delay=function(a){if(!arguments.length)return this._delay;this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay);this._delay=a;return this};d.duration=function(a){if(!arguments.length)return this._dirty=
!1,this._duration;this._duration=this._totalDuration=a;this._uncache(!0);this._timeline.smoothChildTiming&&this._active&&0!=a&&this.totalTime(this._totalTime*(a/this._duration),!0);return this};d.totalDuration=function(a){this._dirty=!1;return!arguments.length?this._totalDuration:this.duration(a)};d.time=function(a,c){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();a>this._duration&&(a=this._duration);return this.totalTime(a,c)};d.totalTime=function(a,c){if(!arguments.length)return this._totalTime;
if(this._timeline){0>a&&(a+=this.totalDuration());if(this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(!this._reversed?a:this._totalDuration-a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var b=this._timeline;b._timeline;)b.totalTime(b._totalTime,!0),b=b._timeline;this._gc&&this._enabled(!0,!1);this._totalTime!=a&&this.render(a,
c,!1)}return this};d.startTime=function(a){if(!arguments.length)return this._startTime;a!=this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.insert(this,a-this._delay));return this};d.timeScale=function(a){if(!arguments.length)return this._timeScale;a=a||1E-6;if(this._timeline&&this._timeline.smoothChildTiming){var c=this._pauseTime||0==this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=c-(c-this._startTime)*this._timeScale/a}this._timeScale=
a;return this._uncache(!1)};d.reversed=function(a){if(!arguments.length)return this._reversed;a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0));return this};d.paused=function(a){if(!arguments.length)return this._paused;a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&0<this._totalTime&&
this._totalTime<this._totalDuration);this._gc&&(a||this._enabled(!0,!1));return this};l=r("core.SimpleTimeline",function(a){q.call(this,0,a);this.autoRemoveChildren=this.smoothChildTiming=!0});d=l.prototype=new q;d.constructor=l;d.kill()._gc=!1;d._first=d._last=null;d._sortChildren=!1;d.insert=function(a,c){a._startTime=Number(c||0)+a._delay;a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale);a.timeline&&a.timeline._remove(a,!0);a.timeline=a._timeline=
this;a._gc&&a._enabled(!0,!0);var b=this._last;if(this._sortChildren)for(var d=a._startTime;b&&b._startTime>d;)b=b._prev;b?(a._next=b._next,b._next=a):(a._next=this._first,this._first=a);a._next?a._next._prev=a:this._last=a;a._prev=b;this._timeline&&this._uncache(!0);return this};d._remove=function(a,c){a.timeline===this&&(c||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&
this._uncache(!0));return this};d.render=function(a,c){var b=this._first,d;for(this._totalTime=this._time=this._rawPrevTime=a;b;){d=b._next;if(b._active||a>=b._startTime&&!b._paused)b._reversed?b.render((!b._dirty?b._totalDuration:b.totalDuration())-(a-b._startTime)*b._timeScale,c,!1):b.render((a-b._startTime)*b._timeScale,c,!1);b=d}};d.rawTime=function(){return this._totalTime};var g=r("TweenLite",function(a,c,b){q.call(this,c,b);if(null==a)throw"Cannot tween an undefined reference.";this.target=
a;this._overwrite=null==this.vars.overwrite?L[g.defaultOverwrite]:"number"===typeof this.vars.overwrite?this.vars.overwrite>>0:L[this.vars.overwrite];if((a instanceof Array||a.jquery)&&"object"===typeof a[0]){this._targets=a.slice(0);this._propLookup=[];this._siblings=[];for(a=0;a<this._targets.length;a++)b=this._targets[a],b.jquery?(this._targets.splice(a--,1),this._targets=this._targets.concat(b.constructor.makeArray(b))):(this._siblings[a]=z(b,this,!1),1===this._overwrite&&1<this._siblings[a].length&&
F(b,this,null,1,this._siblings[a]))}else this._propLookup={},this._siblings=z(a,this,!1),1===this._overwrite&&1<this._siblings.length&&F(a,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&!1!=this.vars.immediateRender)&&this.render(-this._delay,!1,!0)},!0);d=g.prototype=new q;d.constructor=g;d.kill()._gc=!1;d.ratio=0;d._firstPT=d._targets=d._overwrittenProps=null;d._notifyPluginsOfEnabled=!1;g.version=12;g.defaultEase=d._ease=new t(null,null,1,1);g.defaultOverwrite=
"auto";g.ticker=s;var M=g._plugins={},v=g._tweenLookup={},O=0,P={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1},L={none:0,all:1,
auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},x=q._rootFramesTimeline=new l,u=q._rootTimeline=new l;u._startTime=s.time;x._startTime=s.frame;u._active=x._active=!0;q._updateRoot=function(){u.render((s.time-u._startTime)*u._timeScale,!1,!1);x.render((s.frame-x._startTime)*x._timeScale,!1,!1);if(!(s.frame%120)){var a,c,b;for(b in v){c=v[b].tweens;for(a=c.length;-1<--a;)c[a]._gc&&c.splice(a,1);0===c.length&&delete v[b]}}};s.addEventListener("tick",q._updateRoot);var z=function(a,
c,b){var d=a._gsTweenID,e;if(!v[d||(a._gsTweenID=d="t"+O++)])v[d]={target:a,tweens:[]};if(c&&(a=v[d].tweens,a[e=a.length]=c,b))for(;-1<--e;)a[e]===c&&a.splice(e,1);return v[d].tweens},F=function(a,c,b,d,e){var k,h,f;if(1===d||4<=d){a=e.length;for(k=0;k<a;k++)if((f=e[k])!==c)f._gc||f._enabled(!1,!1)&&(h=!0);else if(5===d)break;return h}var g=c._startTime+1E-10,m=[],j=0,l;for(k=e.length;-1<--k;)if(!((f=e[k])===c||f._gc||f._paused))f._timeline!==c._timeline?(l=l||N(c,0),0===N(f,l)&&(m[j++]=f)):f._startTime<=
g&&f._startTime+f.totalDuration()/f._timeScale+1E-10>g&&((0===c._duration||!f._initted)&&2E-10>=g-f._startTime||(m[j++]=f));for(k=j;-1<--k;)if(f=m[k],2===d&&f._kill(b,a)&&(h=!0),2!==d||!f._firstPT&&f._initted)f._enabled(!1,!1)&&(h=!0);return h},N=function(a,c){for(var b=a._timeline,d=b._timeScale,e=a._startTime;b._timeline;){e+=b._startTime;d*=b._timeScale;if(b._paused)return-100;b=b._timeline}e/=d;return e>c?e-c:!a._initted&&2E-10>e-c?1E-10:(e+=a.totalDuration()/a._timeScale/d)>c?0:e-c-1E-10};d._init=
function(){this.vars.startAt&&(this.vars.startAt.overwrite=0,this.vars.startAt.immediateRender=!0,g.to(this.target,0,this.vars.startAt));var a,c;this._ease=this.vars.ease instanceof t?this.vars.easeParams instanceof Array?this.vars.ease.config.apply(this.vars.ease,this.vars.easeParams):this.vars.ease:"function"===typeof this.vars.ease?new t(this.vars.ease,this.vars.easeParams):g.defaultEase;this._easeType=this._ease._type;this._easePower=this._ease._power;this._firstPT=null;if(this._targets)for(a=
this._targets.length;-1<--a;){if(this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],this._overwrittenProps?this._overwrittenProps[a]:null))c=!0}else c=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);c&&g._onPluginEvent("_onInitAllProps",this);this._overwrittenProps&&null==this._firstPT&&"function"!==typeof this.target&&this._enabled(!1,!1);if(this.vars.runBackwards)for(a=this._firstPT;a;)a.s+=a.c,a.c=-a.c,a=a._next;this._onUpdate=this.vars.onUpdate;
this._initted=!0};d._initProps=function(a,c,b,d){var e,k,h,f,g,j;if(null==a)return!1;for(e in this.vars){if(P[e]){if("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)if(g=this.vars[e])for(k=g.length;-1<--k;)"{self}"===g[k]&&(g=this.vars[e]=g.concat(),g[k]=this)}else if(M[e]&&(f=new M[e])._onInitTween(a,this.vars[e],this)){this._firstPT=j={_next:this._firstPT,t:f,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:f._priority};for(k=f._overwriteProps.length;-1<
--k;)c[f._overwriteProps[k]]=this._firstPT;if(f._priority||f._onInitAllProps)h=!0;if(f._onDisable||f._onEnable)this._notifyPluginsOfEnabled=!0}else this._firstPT=c[e]=j={_next:this._firstPT,t:a,p:e,f:"function"===typeof a[e],n:e,pg:!1,pr:0},j.s=!j.f?parseFloat(a[e]):a[e.indexOf("set")||"function"!==typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)](),k=this.vars[e],j.c="number"===typeof k?k-j.s:"string"===typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1")*Number(k.substr(2)):Number(k)||0;j&&j._next&&
(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,c,b,d):1<this._overwrite&&this._firstPT&&1<b.length&&F(a,this,c,this._overwrite,b)?(this._kill(c,a),this._initProps(a,c,b,d)):h};d.render=function(a,c,b){var d=this._time,e,k;if(a>=this._duration){if(this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,k="onComplete"),0===this._duration){if(0===a||0>this._rawPrevTime)this._rawPrevTime!==a&&(b=!0);this._rawPrevTime=a}}else if(0>=
a){this._totalTime=this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(0!==d||0===this._duration&&0<this._rawPrevTime)k="onReverseComplete",e=this._reversed;0>a?(this._active=!1,0===this._duration&&(0<=this._rawPrevTime&&(b=!0),this._rawPrevTime=a)):this._initted||(b=!0)}else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,f=this._easeType,g=this._easePower;if(1===f||3===f&&0.5<=h)h=1-h;3===f&&(h*=2);1===g?h*=h:2===g?h*=h*h:3===g?h*=h*h*h:4===g&&(h*=h*h*
h*h);this.ratio=1===f?1-h:2===f?h:0.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||b){this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration)));!this._active&&!this._paused&&(this._active=!0);if(0===d&&this.vars.onStart&&(0!==this._time||0===this._duration))c||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||D);for(a=this._firstPT;a;){if(a.f)a.t[a.p](a.c*this.ratio+a.s);
else a.t[a.p]=a.c*this.ratio+a.s;a=a._next}this._onUpdate&&(c||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||D));k&&!this._gc&&(e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),c||this.vars[k]&&this.vars[k].apply(this.vars[k+"Scope"]||this,this.vars[k+"Params"]||D))}};d._kill=function(a,c){"all"===a&&(a=null);if(null==a&&(null==c||c==this.target))return this._enabled(!1,!1);var c=c||this._targets||this.target,b,d,e,g,h,f,j;if((c instanceof
Array||c.jquery)&&"object"===typeof c[0])for(b=c.length;-1<--b;)this._kill(a,c[b])&&(h=!0);else{if(this._targets)for(b=this._targets.length;-1<--b;){if(c===this._targets[b]){g=this._propLookup[b]||{};this._overwrittenProps=this._overwrittenProps||[];d=this._overwrittenProps[b]=a?this._overwrittenProps[b]||{}:"all";break}}else{if(c!==this.target)return!1;g=this._propLookup;d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g)for(e in f=a||g,j=a!=d&&"all"!=d&&a!=g&&(null==a||!0!=a._tempKill),
f){if(b=g[e]){b.pg&&b.t._kill(f)&&(h=!0);if(!b.pg||0===b.t._overwriteProps.length)b._prev?b._prev._next=b._next:b===this._firstPT&&(this._firstPT=b._next),b._next&&(b._next._prev=b._prev),b._next=b._prev=null;delete g[e]}j&&(d[e]=1)}}return h};d.invalidate=function(){this._notifyPluginsOfEnabled&&g._onPluginEvent("_onDisable",this);this._onUpdate=this._overwrittenProps=this._firstPT=null;this._initted=this._active=this._notifyPluginsOfEnabled=!1;this._propLookup=this._targets?{}:[];return this};d._enabled=
function(a,c){if(a&&this._gc)if(this._targets)for(var b=this._targets.length;-1<--b;)this._siblings[b]=z(this._targets[b],this,!0);else this._siblings=z(this.target,this,!0);q.prototype._enabled.call(this,a,c);return this._notifyPluginsOfEnabled&&this._firstPT?g._onPluginEvent(a?"_onEnable":"_onDisable",this):!1};g.to=function(a,c,b){return new g(a,c,b)};g.from=function(a,c,b){b.runBackwards=!0;!1!=b.immediateRender&&(b.immediateRender=!0);return new g(a,c,b)};g.fromTo=function(a,c,b,d){d.startAt=
b;b.immediateRender&&(d.immediateRender=!0);return new g(a,c,d)};g.delayedCall=function(a,c,b,d,e){return new g(c,0,{delay:a,onComplete:c,onCompleteParams:b,onCompleteScope:d,onReverseComplete:c,onReverseCompleteParams:b,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})};g.set=function(a,c){return new g(a,0,c)};g.killTweensOf=g.killDelayedCallsTo=function(a,c){for(var b=g.getTweensOf(a),d=b.length;-1<--d;)b[d]._kill(c,a)};g.getTweensOf=function(a){if(null!=a){var c,b,d;if((a instanceof
Array||a.jquery)&&"object"===typeof a[0]){c=a.length;for(b=[];-1<--c;)b=b.concat(g.getTweensOf(a[c]));for(c=b.length;-1<--c;){d=b[c];for(a=c;-1<--a;)d===b[a]&&b.splice(c,1)}}else{b=z(a).concat();for(c=b.length;-1<--c;)b[c]._gc&&b.splice(c,1)}return b}};var A=r("plugins.TweenPlugin",function(a,c){this._overwriteProps=(a||"").split(",");this._propName=this._overwriteProps[0];this._priority=c||0},!0);d=A.prototype;A.version=12;A.API=2;d._firstPT=null;d._addTween=function(a,c,b,d,e,g){var h;if(null!=
d&&(h="number"===typeof d||"="!==d.charAt(1)?Number(d)-b:parseInt(d.charAt(0)+"1")*Number(d.substr(2))))this._firstPT=a={_next:this._firstPT,t:a,p:c,s:b,c:h,f:"function"===typeof a[c],n:e||c,r:g},a._next&&(a._next._prev=a)};d.setRatio=function(a){for(var c=this._firstPT,b;c;){b=c.c*a+c.s;c.r&&(b=b+(0<b?0.5:-0.5)>>0);if(c.f)c.t[c.p](b);else c.t[c.p]=b;c=c._next}};d._kill=function(a){if(null!=a[this._propName])this._overwriteProps=[];else for(var c=this._overwriteProps.length;-1<--c;)null!=a[this._overwriteProps[c]]&&
this._overwriteProps.splice(c,1);for(c=this._firstPT;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1};d._roundProps=function(a,c){for(var b=this._firstPT;b;){if(a[this._propName]||null!=b.n&&a[b.n.split(this._propName+"_").join("")])b.r=c;b=b._next}};g._onPluginEvent=function(a,c){var b=c._firstPT,d;if("_onInitAllProps"===a){for(var e,g,h,f;b;){f=b._next;for(e=g;e&&e.pr>b.pr;)e=e._next;(b._prev=
e?e._prev:h)?b._prev._next=b:g=b;(b._next=e)?e._prev=b:h=b;b=f}b=c._firstPT=g}for(;b;)b.pg&&"function"===typeof b.t[a]&&b.t[a]()&&(d=!0),b=b._next;return d};A.activate=function(a){for(var c=a.length;-1<--c;)a[c].API===A.API&&(g._plugins[(new a[c])._propName]=a[c]);return!0};if(p=n._gsQueue){for(j=0;j<p.length;j++)p[j]();for(d in w)w[d].def||console.log("Warning: TweenLite encountered missing dependency: com.greensock."+d)}})(window);

/*!
 * VERSION: beta 1.5421
 * DATE: 2012-11-13
 * JavaScript 
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Copyright (c) 2008-2012, GreenSock. All rights reserved. 
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(C){var m=function(){C.call(this,"css");this._overwriteProps.pop()},u=m.prototype=new C("css");u.constructor=m;m.API=2;m.suffixMap={top:"px",right:"px",bottom:"px",left:"px",width:"px",height:"px",fontSize:"px",padding:"px",margin:"px"};var w=/[^\d\-\.]/g,K=/(\d|\-|\+|=|#|\.)*/g,ca=/(\d|\.)+/g,L=/opacity *= *([^)]*)/,da=/opacity:([^;]*)/,ea=/([A-Z])/g,P=/-([a-z])/gi,Q=
function(b,a){return a.toUpperCase()},fa=/(Left|Right|Width)/i,ga=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,ha=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,z=Math.PI/180,R=180/Math.PI,D={},A=document,B=A.createElement("div"),v=navigator.userAgent,S,T,U,V,x,W=v.indexOf("Android"),X=A.createElement("div");U=-1!==v.indexOf("Safari")&&-1===v.indexOf("Chrome")&&(-1===W||3<Number(v.substr(W+8,1)));/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(v);V=parseFloat(RegExp.$1);X.innerHTML="<a style='top:1px;opacity:.55;'>a</a>";
x=(v=X.getElementsByTagName("a")[0])?/^0.55/.test(v.style.opacity):!1;var Y=function(b){if(!b||""===b)return E.black;if(E[b])return E[b];if("number"===typeof b)return[b>>16,b>>8&255,b&255];if("#"===b.charAt(0)){if(4===b.length)var a=b.charAt(1),g=b.charAt(2),b=b.charAt(3),b="#"+a+a+g+g+b+b;b=parseInt(b.substr(1),16);return[b>>16,b>>8&255,b&255]}return b.match(ca)||E.transparent},Z=function(b){return L.test("string"===typeof b?b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/
100:1},F=A.defaultView?A.defaultView.getComputedStyle:function(){},p=function(b,a,g,c){return!x&&"opacity"===a?Z(b):!c&&b.style[a]?b.style[a]:(g=g||F(b,null))?(b=g.getPropertyValue(a.replace(ea,"-$1").toLowerCase()))||g.length?b:g[a]:b.currentStyle?(g=b.currentStyle,c=g[a],!c&&"backgroundPosition"===a?g[a+"X"]+" "+g[a+"Y"]:c):null},H=function(b,a){var g={},c;if(a=a||F(b,null))if(c=a.length)for(;-1<--c;)g[a[c].replace(P,Q)]=a.getPropertyValue(a[c]);else for(c in a)g[c]=a[c];else if(a=b.currentStyle||
b.style)for(c in a)g[c.replace(P,Q)]=a[c];x||(g.opacity=Z(b));c=G(b,a,!1);g.rotation=c.rotation*R;g.skewX=c.skewX*R;g.scaleX=c.scaleX;g.scaleY=c.scaleY;g.x=c.x;g.y=c.y;null!=g.filters&&delete g.filters;return g},$=function(b,a,g,c){var h={},f,d;for(d in a)if("cssText"!==d&&"length"!==d&&isNaN(d)&&b[d]!=(f=a[d]))if(f!==q&&("number"===typeof f||"string"===typeof f))h[d]=(""===f||"auto"===f)&&"string"===typeof b[d]&&""!==b[d].replace(w,"")?0:f,c&&c.props.push(d);if(g)for(d in g)"className"!==d&&(h[d]=
g[d]);return h},aa={scaleX:1,scaleY:1,x:1,y:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},ba="",M="",q=function(b,a){var a=a||B,g=a.style,c,h;if(void 0!==g[b])return b;b=b.substr(0,1).toUpperCase()+b.substr(1);c=["O","Moz","ms","Ms","Webkit"];for(h=5;-1<--h&&void 0===g[c[h]+b];);return 0<=h?(M=3===h?"ms":c[h],ba="-"+M.toLowerCase()+"-",M+b):null}("transform"),ia=ba+"transform",G=function(b,a,g){var c=b._gsTransform,h;q?h=p(b,ia,a,!0):b.currentStyle&&(h=(h=b.currentStyle.filter.match(ga))&&
4===h.length?h[0].substr(4)+","+Number(h[2].substr(4))+","+Number(h[1].substr(4))+","+h[3].substr(4)+","+(c?c.x:0)+","+(c?c.y:0):null);var a=(h||"").replace(/[^\d\-\.e,]/g,"").split(","),f=(h=6<=a.length)?Number(a[0]):1,d=h?Number(a[1]):0,e=h?Number(a[2]):0,i=h?Number(a[3]):1,c=g?c||{skewY:0}:{skewY:0},l=0>c.scaleX;c.x=h?Number(a[4]):0;c.y=h?Number(a[5]):0;c.scaleX=Math.sqrt(f*f+d*d);c.scaleY=Math.sqrt(i*i+e*e);c.rotation=f||d?Math.atan2(d,f):c.rotation||0;c.skewX=e||i?Math.atan2(e,i)+c.rotation:
c.skewX||0;Math.abs(c.skewX)>Math.PI/2&&Math.abs(c.skewX)<1.5*Math.PI&&(l?(c.scaleX*=-1,c.skewX+=0>=c.rotation?Math.PI:-Math.PI,c.rotation+=0>=c.rotation?Math.PI:-Math.PI):(c.scaleY*=-1,c.skewX+=0>=c.skewX?Math.PI:-Math.PI));if(1E-6>c.rotation&&-1E-6<c.rotation&&(f||d))c.rotation=0;if(1E-6>c.skewX&&-1E-6<c.skewX&&(d||e))c.skewX=0;g&&(b._gsTransform=c);return c},ja={width:["Left","Right"],height:["Top","Bottom"]},ka=["marginLeft","marginRight","marginTop","marginBottom"],y=function(b,a,g,c,h){if("px"===
c||!c)return g;if("auto"===c||!g)return 0;var f=fa.test(a),d=b,e=B.style,i=0>g;i&&(g=-g);e.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;";"%"===c||"em"===c||!d.appendChild?(d=b.parentNode||A.body,e[f?"width":"height"]=g+c):e[f?"borderLeftWidth":"borderTopWidth"]=g+c;d.appendChild(B);f=parseFloat(B[f?"offsetWidth":"offsetHeight"]);d.removeChild(B);0===f&&!h&&(f=y(b,a,g,c,!0));return i?-f:f},N=function(b,a){if(null==b||""===b||"auto"===b||"auto auto"===b)b="0 0";var a=
a||{},g=-1!==b.indexOf("left")?"0%":-1!==b.indexOf("right")?"100%":b.split(" ")[0],c=-1!==b.indexOf("top")?"0%":-1!==b.indexOf("bottom")?"100%":b.split(" ")[1];null==c?c="0":"center"===c&&(c="50%");"center"===g&&(g="50%");a.oxp=-1!==g.indexOf("%");a.oyp=-1!==c.indexOf("%");a.oxr="="===g.charAt(1);a.oyr="="===c.charAt(1);a.ox=parseFloat(g.replace(w,""));a.oy=parseFloat(c.replace(w,""));return a},I=function(b,a){return null==b?a:"string"===typeof b&&1===b.indexOf("=")?Number(b.split("=").join(""))+
a:Number(b)},J=function(b,a){var g=-1===b.indexOf("rad")?z:1,c=1===b.indexOf("="),b=Number(b.replace(w,""))*g;return c?b+a:b},E={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]};u._onInitTween=
function(b,a,g){if(!b.nodeType)return!1;this._target=b;this._tween=g;this._classData=this._transform=null;S=a.autoRound;var c=this._style=b.style,h=F(b,""),f,d;if(T&&""===c.zIndex&&(d=p(b,"zIndex",h),"auto"===d||""===d))c.zIndex=0;"string"===typeof a?(f=c.cssText,g=H(b,h),c.cssText=f+";"+a,d=$(g,H(b)),!x&&da.test(a)&&(d.opacity=parseFloat(RegExp.$1)),a=d,c.cssText=f):a.className&&(f=b.className,this._classData={b:f,e:"="!==a.className.charAt(1)?a.className:"+"===a.className.charAt(0)?b.className+
" "+a.className.substr(2):b.className.split(a.className.substr(2)).join(""),props:[]},g._duration?(g=H(b,h),b.className=this._classData.e,a=$(g,H(b),a,this._classData),b.className=f):a={});this._parseVars(a,b,h,a.suffixMap||m.suffixMap);return!0};u._parseVars=function(b,a,g,c){var h=this._style,f,d,e,i,l,s,k;for(f in b)if(d=b[f],"transform"===f||f===q)this._parseTransform(a,d,g,c);else if(aa[f]||"transformOrigin"===f)this._parseTransform(a,b,g,c);else{if("alpha"===f||"autoAlpha"===f)f="opacity";else if("margin"===
f||"padding"===f){d=(d+"").split(" ");l=d.length;e={};e[f+"Top"]=d[0];e[f+"Right"]=1<l?d[1]:d[0];e[f+"Bottom"]=4===l?d[2]:d[0];e[f+"Left"]=4===l?d[3]:2===l?d[1]:d[0];this._parseVars(e,a,g,c);continue}else if("backgroundPosition"===f||"backgroundSize"===f){e=N(d);k=N(i=p(a,f,g));this._firstPT=e={_next:this._firstPT,t:h,p:f,b:i,f:!1,n:"css_"+f,type:3,s:k.ox,c:e.oxr?e.ox:e.ox-k.ox,ys:k.oy,yc:e.oyr?e.oy:e.oy-k.oy,sfx:e.oxp?"%":"px",ysfx:e.oyp?"%":"px",r:!e.oxp&&!1!==b.autoRound};e.e=e.s+e.c+e.sfx+" "+
(e.ys+e.yc)+e.ysfx;continue}else if("border"===f){d=(d+"").split(" ");this._parseVars({borderWidth:d[0],borderStyle:d[1]||"none",borderColor:d[2]||"#000000"},a,g,c);continue}else if("bezier"===f){this._parseBezier(d,a,g,c);continue}else if("autoRound"===f)continue;i=p(a,f,g);i=null!=i?i+"":"";this._firstPT=e={_next:this._firstPT,t:h,p:f,b:i,f:!1,n:"css_"+f,sfx:"",r:!1,type:0};"opacity"===f&&null!=b.autoAlpha&&("1"===i&&"hidden"===p(a,"visibility",g)&&(i=e.b="0"),this._firstPT=e._prev={_next:e,t:h,
p:"visibility",f:!1,n:"css_visibility",r:!1,type:-1,b:0!==Number(i)?"visible":"hidden",i:"visible",e:0===Number(d)?"hidden":"visible"},this._overwriteProps.push("css_visibility"));l="string"===typeof d;if("color"===f||"fill"===f||"stroke"===f||-1!==f.indexOf("Color")||l&&!d.indexOf("rgb(")){if(l=Y(i),d=Y(d),e.e=e.i=(3<d.length?"rgba(":"rgb(")+d.join(",")+")",e.b=(3<l.length?"rgba(":"rgb(")+l.join(",")+")",e.s=Number(l[0]),e.c=Number(d[0])-e.s,e.gs=Number(l[1]),e.gc=Number(d[1])-e.gs,e.bs=Number(l[2]),
e.bc=Number(d[2])-e.bs,e.type=1,3<l.length||3<d.length)x?(e.as=4>l.length?1:Number(l[3]),e.ac=(4>d.length?1:Number(d[3]))-e.as,e.type=2):(0==d[3]&&(e.e=e.i="transparent",e.type=-1),0==l[3]&&(e.b="transparent"))}else{s=i.replace(K,"");if(""===i||"auto"===i)if("width"===f||"height"===f){var r=f;s=a;k=g;i=parseFloat("width"===r?s.offsetWidth:s.offsetHeight);var r=ja[r],O=r.length;for(k=k||F(s,null);-1<--O;)i-=parseFloat(p(s,"padding"+r[O],k,!0))||0,i-=parseFloat(p(s,"border"+r[O]+"Width",k,!0))||0;k=
i;s="px"}else k="opacity"!==f?0:1,s="";else k=-1===i.indexOf(" ")?parseFloat(i.replace(w,"")):NaN;l?(l="="===d.charAt(1),i=d.replace(K,""),d=-1===d.indexOf(" ")?parseFloat(d.replace(w,"")):NaN):(l=!1,i="");""===i&&(i=c[f]||s);e.e=d||0===d?(l?d+k:d)+i:b[f];if(s!==i&&""!==i&&(d||0===d))if(k||0===k)if(k=y(a,f,k,s),"%"===i?(k/=y(a,f,100,"%")/100,100<k&&(k=100)):"em"===i?k/=y(a,f,1,"em"):(d=y(a,f,d,i),i="px"),l&&(d||0===d))e.e=d+k+i;if((k||0===k)&&(d||0===d)&&(e.c=l?d:d-k))if(e.s=k,e.sfx=i,"opacity"===
f)x||(e.type=4,e.p="filter",e.b="alpha(opacity="+100*e.s+")",e.e="alpha(opacity="+100*(e.s+e.c)+")",e.dup=null!=b.autoAlpha,this._style.zoom=1);else{if(!1!==S&&("px"===i||"zIndex"===f))e.r=!0}else e.type=-1,e.i="display"===f&&"none"===e.e?e.b:e.e,e.s=e.c=0}this._overwriteProps.push("css_"+f);e._next&&(e._next._prev=e)}};u._parseTransform=function(b,a,g){if(!this._transform){var c=this._transform=G(b,g,!0),h=this._style,f,d,e;if("object"===typeof a){f={scaleX:I(null!=a.scaleX?a.scaleX:a.scale,c.scaleX),
scaleY:I(null!=a.scaleY?a.scaleY:a.scale,c.scaleY),x:I(a.x,c.x),y:I(a.y,c.y)};null!=a.shortRotation?(f.rotation="number"===typeof a.shortRotation?a.shortRotation*z:J(a.shortRotation,c.rotation),d=(f.rotation-c.rotation)%(2*Math.PI),d!==d%Math.PI&&(d+=Math.PI*(0>d?2:-2)),f.rotation=c.rotation+d):f.rotation=null==a.rotation?c.rotation:"number"===typeof a.rotation?a.rotation*z:J(a.rotation,c.rotation);f.skewX=null==a.skewX?c.skewX:"number"===typeof a.skewX?a.skewX*z:J(a.skewX,c.skewX);f.skewY=null==
a.skewY?c.skewY:"number"===typeof a.skewY?a.skewY*z:J(a.skewY,c.skewY);if(d=f.skewY-c.skewY)f.skewX+=d,f.rotation+=d;1E-6>f.skewY&&-1E-6<f.skewY&&(f.skewY=0);1E-6>f.skewX&&-1E-6<f.skewX&&(f.skewX=0);1E-6>f.rotation&&-1E-6<f.rotation&&(f.rotation=0);if(null!=(a=a.transformOrigin))q?(e=q+"Origin",this._firstPT=a={_next:this._firstPT,t:h,p:e,s:0,c:0,n:e,f:!1,r:!1,b:h[e],e:a,i:a,type:-1,sfx:""},a._next&&(a._next._prev=a)):N(a,c)}else if("string"===typeof a&&q)d=h[q],h[q]=a,f=G(b,null,!1),h[q]=d;else return;
if(q){if(U&&(T=!0,""===h.WebkitBackfaceVisibility&&(h.WebkitBackfaceVisibility="hidden"),""===h.zIndex&&(d=p(b,"zIndex",g),"auto"===d||""===d)))h.zIndex=0}else h.zoom=1;for(e in aa)if((c[e]!==f[e]||null!=D[e])&&"shortRotation"!==e&&"scale"!==e)this._firstPT=a={_next:this._firstPT,t:c,p:e,s:c[e],c:f[e]-c[e],n:e,f:!1,r:!1,b:c[e],e:f[e],type:0,sfx:0},a._next&&(a._next._prev=a),this._overwriteProps.push("css_"+e)}};u._parseBezier=function(b,a,g,c){if(window.com.greensock.plugins.BezierPlugin){b instanceof
Array&&(b={values:b});var h=b.values||[],f=h.length,d=[],e=this._bezier={_pt:[]},i=e._proxy={},l=0,s=0,k={},r=f-1,q=D,t=e._plugin=new window.com.greensock.plugins.BezierPlugin,n,j,p,m,u;for(n=0;n<f;n++){m={};this._transform=null;p=this._firstPT;this._parseVars(D=h[n],a,g,c);j=this._firstPT;if(0===n){for(u=this._transform;j!==p;)i[j.p]=j.s,e._pt[s++]=k[j.p]=j,1===j.type||2===j.type?(i[j.p+"_g"]=j.gs,i[j.p+"_b"]=j.bs,2===j.type&&(i[j.p+"_a"]=j.as)):3===j.type&&(i[j.p+"_y"]=j.ys),j=j._next;j=this._firstPT}else this._firstPT=
p,p._prev&&(p._prev._next=null),p=p._prev=null;for(;j!==p;)k[j.p]&&(m[j.p]=j.s+j.c,n===r&&(k[j.p].e=j.e),1===j.type||2===j.type?(m[j.p+"_g"]=j.gs+j.gc,m[j.p+"_b"]=j.bs+j.bc,2===j.type&&(m[j.p+"_a"]=j.as+j.ac)):3===j.type&&(m[j.p+"_y"]=j.ys+j.yc),0===n&&(j.c=j.ac=j.gc=j.bc=j.yc=0)),j=j._next;d[l++]=m}this._transform=u;D=q;b.values=d;0===b.autoRotate&&(b.autoRotate=!0);b.autoRotate&&!(b.autoRotate instanceof Array)&&(n=!0==b.autoRotate?0:Number(b.autoRotate)*Math.PI/180,b.autoRotate=null!=d[0].left?
[["left","top","rotation",n,!0]]:null!=d[0].x?[["x","y","rotation",n,!0]]:!1);if((e._autoRotate=b.autoRotate)&&!u)this._transform=G(a,g,!0);t._onInitTween(i,b,this._tween);b.values=h}else console.log("Error: BezierPlugin not loaded.")};u.setRatio=function(b){var a=this._firstPT,g=this._bezier,c=1E-6,h,f;if(g){g._plugin.setRatio(b);var d=g._pt,e=g._proxy;for(f=d.length;-1<--f;)a=d[f],a.s=e[a.p],1===a.type||2===a.type?(a.gs=e[a.p+"_g"],a.bs=e[a.p+"_b"],2===a.type&&(a.as=e[a.p+"_a"])):3===a.type&&(a.ys=
e[a.p+"_y"]);g._autoRotate&&(this._transform.rotation=e.rotation)}if(1===b&&(this._tween._time===this._tween._duration||0===this._tween._time))for(;a;)a.t[a.p]=a.e,4===a.type&&1===a.s+a.c&&(this._style.removeAttribute("filter"),p(this._target,"filter")&&(a.t[a.p]=a.e)),a=a._next;else if(b||!(this._tween._time===this._tween._duration||0===this._tween._time))for(;a;)h=a.c*b+a.s,a.r?h=0<h?h+0.5>>0:h-0.5>>0:h<c&&h>-c&&(h=0),a.type?1===a.type?a.t[a.p]="rgb("+(h>>0)+", "+(a.gs+b*a.gc>>0)+", "+(a.bs+b*a.bc>>
0)+")":2===a.type?a.t[a.p]="rgba("+(h>>0)+", "+(a.gs+b*a.gc>>0)+", "+(a.bs+b*a.bc>>0)+", "+(a.as+b*a.ac)+")":-1===a.type?a.t[a.p]=a.i:3===a.type?(g=a.ys+b*a.yc,a.r&&(g=0<g?g+0.5>>0:g-0.5>>0),a.t[a.p]=h+a.sfx+" "+g+a.ysfx):(a.dup&&(a.t.filter=a.t.filter||"alpha(opacity=100)"),a.t.filter=-1===a.t.filter.indexOf("opacity")?a.t.filter+(" alpha(opacity="+(100*h>>0)+")"):a.t.filter.replace(L,"opacity="+(100*h>>0))):a.t[a.p]=h+a.sfx,a=a._next;else for(;a;)a.t[a.p]=a.b,4===a.type&&1===a.s&&(this._style.removeAttribute("filter"),
p(this._target,"filter")&&(a.t[a.p]=a.b)),a=a._next;if(this._transform)if(a=this._transform,q&&!a.rotation&&!a.skewX)this._style[q]=(a.x||a.y?"translate("+a.x+"px,"+a.y+"px) ":"")+(1!==a.scaleX||1!==a.scaleY?"scale("+a.scaleX+","+a.scaleY+")":"")||"translate(0px,0px)";else{var d=q?a.rotation:-a.rotation,i=q?d-a.skewX:d+a.skewX,g=Math.cos(d)*a.scaleX,d=Math.sin(d)*a.scaleX,e=Math.sin(i)*-a.scaleY,i=Math.cos(i)*a.scaleY,l;g<c&&g>-c&&(g=0);d<c&&d>-c&&(d=0);e<c&&e>-c&&(e=0);i<c&&i>-c&&(i=0);if(q)this._style[q]=
"matrix("+g+","+d+","+e+","+i+","+a.x+","+a.y+")";else if(l=this._target.currentStyle){c=d;d=-e;e=-c;c=l.filter;this._style.filter="";f=this._target.offsetWidth;h=this._target.offsetHeight;var s="absolute"!==l.position,k="progid:DXImageTransform.Microsoft.Matrix(M11="+g+", M12="+d+", M21="+e+", M22="+i,r=a.x,m=a.y,t,n;null!=a.ox&&(t=(a.oxp?0.01*f*a.ox:a.ox)-f/2,n=(a.oyp?0.01*h*a.oy:a.oy)-h/2,r=t-(t*g+n*d)+a.x,m=n-(t*e+n*i)+a.y);if(s)t=f/2,n=h/2,k+=", Dx="+(t-(t*g+n*d)+r)+", Dy="+(n-(t*e+n*i)+m)+")";
else{var j=8>V?1:-1;t=a.ieOffsetX||0;n=a.ieOffsetY||0;a.ieOffsetX=Math.round((f-((0>g?-g:g)*f+(0>d?-d:d)*h))/2+r);a.ieOffsetY=Math.round((h-((0>i?-i:i)*h+(0>e?-e:e)*f))/2+m);for(f=0;4>f;f++)r=ka[f],h=l[r],h=-1!==h.indexOf("px")?parseFloat(h):y(this._target,r,parseFloat(h),h.replace(K,""))||0,m=h!==a[r]?2>f?-a.ieOffsetX:-a.ieOffsetY:2>f?t-a.ieOffsetX:n-a.ieOffsetY,this._style[r]=(a[r]=Math.round(h-m*(0===f||2===f?1:j)))+"px";k+=", sizingMethod='auto expand')"}this._style.filter=-1!==c.indexOf("DXImageTransform.Microsoft.Matrix(")?
c.replace(ha,k):k+" "+c;if(0===b||1===b)if(1===g&&0===d&&0===e&&1===i&&(!s||-1!==k.indexOf("Dx=0, Dy=0")))(!L.test(c)||100===parseFloat(RegExp.$1))&&this._style.removeAttribute("filter")}}if(this._classData)if(a=this._classData,1===b&&(this._tween._time===this._tween._duration||0===this._tween._time)){for(f=a.props.length;-1<--f;)this._style[a.props[f]]="";this._target.className=a.e}else this._target.className!==a.b&&(this._target.className=a.b)};u._kill=function(b){var a=b,g;if(b.autoAlpha||b.alpha){a=
{};for(g in b)a[g]=b[g];a.opacity=1;a.autoAlpha&&(a.visibility=1)}return C.prototype._kill.call(this,a)};C.activate([m]);return m},!0)});window._gsDefine&&_gsQueue.pop()();