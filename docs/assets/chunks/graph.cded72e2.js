import{a8 as P,a9 as E,aa as j,ab as C,ac as M,ad as F,ae as w,af as A,ag as f,ah as G,ai as x,aj as I,ak as R,al as c,A as v,am as L}from"../app.1eacfe91.js";function V(r,e,t,s){var i=-1,n=r==null?0:r.length;for(s&&n&&(t=r[++i]);++i<n;)t=e(t,r[i],i,r);return t}function T(r){return typeof r=="function"?r:P}function d(r,e){var t=E(r)?j:C;return t(r,T(e))}function U(r,e){var t=[];return C(r,function(s,i,n){e(s,i,n)&&t.push(s)}),t}function p(r,e){var t=E(r)?M:U;return t(r,F(e))}var H=Object.prototype,S=H.hasOwnProperty;function k(r,e){return r!=null&&S.call(r,e)}function u(r,e){return r!=null&&w(r,e,k)}function q(r,e){return A(e,function(t){return r[t]})}function m(r){return r==null?[]:q(r,f(r))}function l(r){return r===void 0}function z(r,e,t,s,i){return i(r,function(n,h,a){t=s?(s=!1,n):e(t,n,h,a)}),t}function K(r,e,t){var s=E(r)?V:z,i=arguments.length<3;return s(r,F(e),t,i,C)}var Y=G(function(r){return x(I(r,1,R,!0))});const $=Y;var B="\0",o="\0",N="";class D{constructor(e={}){this._isDirected=u(e,"directed")?e.directed:!0,this._isMultigraph=u(e,"multigraph")?e.multigraph:!1,this._isCompound=u(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=c(void 0),this._defaultEdgeLabelFn=c(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[o]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return v(e)||(e=c(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return f(this._nodes)}sources(){var e=this;return p(this.nodes(),function(t){return L(e._in[t])})}sinks(){var e=this;return p(this.nodes(),function(t){return L(e._out[t])})}setNodes(e,t){var s=arguments,i=this;return d(e,function(n){s.length>1?i.setNode(n,t):i.setNode(n)}),this}setNode(e,t){return u(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=o,this._children[e]={},this._children[o][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return u(this._nodes,e)}removeNode(e){var t=this;if(u(this._nodes,e)){var s=function(i){t.removeEdge(t._edgeObjs[i])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],d(this.children(e),function(i){t.setParent(i)}),delete this._children[e]),d(f(this._in[e]),s),delete this._in[e],delete this._preds[e],d(f(this._out[e]),s),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(l(t))t=o;else{t+="";for(var s=t;!l(s);s=this.parent(s))if(s===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if(t!==o)return t}}children(e){if(l(e)&&(e=o),this._isCompound){var t=this._children[e];if(t)return f(t)}else{if(e===o)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var t=this._preds[e];if(t)return f(t)}successors(e){var t=this._sucs[e];if(t)return f(t)}neighbors(e){var t=this.predecessors(e);if(t)return $(t,this.successors(e))}isLeaf(e){var t;return this.isDirected()?t=this.successors(e):t=this.neighbors(e),t.length===0}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var s=this;d(this._nodes,function(h,a){e(a)&&t.setNode(a,h)}),d(this._edgeObjs,function(h){t.hasNode(h.v)&&t.hasNode(h.w)&&t.setEdge(h,s.edge(h))});var i={};function n(h){var a=s.parent(h);return a===void 0||t.hasNode(a)?(i[h]=a,a):a in i?i[a]:n(a)}return this._isCompound&&d(t.nodes(),function(h){t.setParent(h,n(h))}),t}setDefaultEdgeLabel(e){return v(e)||(e=c(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return m(this._edgeObjs)}setPath(e,t){var s=this,i=arguments;return K(e,function(n,h){return i.length>1?s.setEdge(n,h,t):s.setEdge(n,h),h}),this}setEdge(){var e,t,s,i,n=!1,h=arguments[0];typeof h=="object"&&h!==null&&"v"in h?(e=h.v,t=h.w,s=h.name,arguments.length===2&&(i=arguments[1],n=!0)):(e=h,t=arguments[1],s=arguments[3],arguments.length>2&&(i=arguments[2],n=!0)),e=""+e,t=""+t,l(s)||(s=""+s);var a=g(this._isDirected,e,t,s);if(u(this._edgeLabels,a))return n&&(this._edgeLabels[a]=i),this;if(!l(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[a]=n?i:this._defaultEdgeLabelFn(e,t,s);var _=J(this._isDirected,e,t,s);return e=_.v,t=_.w,Object.freeze(_),this._edgeObjs[a]=_,O(this._preds[t],e),O(this._sucs[e],t),this._in[t][a]=_,this._out[e][a]=_,this._edgeCount++,this}edge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s);return this._edgeLabels[i]}hasEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s);return u(this._edgeLabels,i)}removeEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s),n=this._edgeObjs[i];return n&&(e=n.v,t=n.w,delete this._edgeLabels[i],delete this._edgeObjs[i],y(this._preds[t],e),y(this._sucs[e],t),delete this._in[t][i],delete this._out[e][i],this._edgeCount--),this}inEdges(e,t){var s=this._in[e];if(s){var i=m(s);return t?p(i,function(n){return n.v===t}):i}}outEdges(e,t){var s=this._out[e];if(s){var i=m(s);return t?p(i,function(n){return n.w===t}):i}}nodeEdges(e,t){var s=this.inEdges(e,t);if(s)return s.concat(this.outEdges(e,t))}}D.prototype._nodeCount=0;D.prototype._edgeCount=0;function O(r,e){r[e]?r[e]++:r[e]=1}function y(r,e){--r[e]||delete r[e]}function g(r,e,t,s){var i=""+e,n=""+t;if(!r&&i>n){var h=i;i=n,n=h}return i+N+n+N+(l(s)?B:s)}function J(r,e,t,s){var i=""+e,n=""+t;if(!r&&i>n){var h=i;i=n,n=h}var a={v:i,w:n};return s&&(a.name=s),a}function b(r,e){return g(r,e.v,e.w,e.name)}export{D as G,p as a,T as c,d as f,u as h,l as i,K as r,m as v};