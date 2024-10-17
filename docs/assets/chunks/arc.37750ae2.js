import{w as ln,c as J}from"./path.53f90ab3.js";import{aE as an,aF as N,aG as E,aH as rn,aI as y,U as on,aJ as j,aK as _,aL as un,aM as t,aN as sn,aO as tn,aP as fn}from"../app.59b23065.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,I,v,A,K,a){var D=q-l,i=I-h,n=K-v,m=a-A,r=m*D-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*D,h+r*i]}function W(l,h,q,I,v,A,K){var a=l-q,D=h-I,i=(K?A:-A)/j(a*a+D*D),n=i*D,m=-i*a,r=l+n,s=h+m,f=q+n,c=I+m,L=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,F=(g<0?-1:1)*j(fn(0,T*T*R-P*P)),G=(P*g-p*F)/R,H=(-P*p-g*F)/R,w=(P*g+p*F)/R,d=(-P*p+g*F)/R,x=G-L,e=H-o,u=w-L,M=d-o;return x*x+e*e>u*u+M*M&&(G=w,H=d),{cx:G,cy:H,x01:-n,y01:-m,x11:G*(v/T-1),y11:H*(v/T-1)}}function vn(){var l=cn,h=yn,q=J(0),I=null,v=gn,A=mn,K=pn,a=null,D=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,L=un(c-f),o=c>f;if(a||(a=n=D()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(L>on-y)a.moveTo(s*N(f),s*E(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*N(c),r*E(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=L,F=L,G=K.apply(this,arguments)/2,H=G>y&&(I?+I.apply(this,arguments):j(r*r+s*s)),w=_(un(s-r)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(H>y){var M=sn(H/r*E(G)),z=sn(H/s*E(G));(P-=M*2)>y?(M*=o?1:-1,R+=M,T-=M):(P=0,R=T=(f+c)/2),(F-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(F=0,p=g=(f+c)/2)}var S=s*N(p),U=s*E(p),B=r*N(T),C=r*E(T);if(w>y){var Q=s*N(g),V=s*E(g),X=r*N(R),Y=r*E(R),O;if(L<an)if(O=dn(S,U,X,Y,Q,V,B,C)){var Z=S-O[0],$=U-O[1],k=Q-O[0],b=V-O[1],nn=1/E(tn((Z*k+$*b)/(j(Z*Z+$*$)*j(k*k+b*b)))/2),en=j(O[0]*O[0]+O[1]*O[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}F>y?x>y?(e=W(X,Y,S,U,s,x,o),u=W(Q,V,B,C,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(S,U),a.arc(0,0,s,p,g,!o)):a.moveTo(S,U),!(r>y)||!(P>y)?a.lineTo(B,C):d>y?(e=W(B,C,Q,V,r,-d,o),u=W(S,U,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[N(m)*n,E(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:J(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:J(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:J(+n),i):q},i.padRadius=function(n){return arguments.length?(I=n==null?null:typeof n=="function"?n:J(+n),i):I},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:J(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:J(+n),i):A},i.padAngle=function(n){return arguments.length?(K=typeof n=="function"?n:J(+n),i):K},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
