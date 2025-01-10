import{w as ln,c as M}from"./path.53f90ab3.js";import{aL as an,aM as W,aN as O,aO as rn,aP as y,U as on,aQ as B,aR as _,aS as un,aT as t,aU as sn,aV as tn,aW as fn}from"../app.1eacfe91.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,S,v,R,N,a){var D=q-l,i=S-h,n=N-v,m=a-R,r=m*D-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*D,h+r*i]}function K(l,h,q,S,v,R,N){var a=l-q,D=h-S,i=(N?R:-R)/B(a*a+D*D),n=i*D,m=-i*a,r=l+n,s=h+m,f=q+n,c=S+m,Q=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,E=(g<0?-1:1)*B(fn(0,T*T*A-P*P)),I=(P*g-p*E)/A,L=(-P*p-g*E)/A,w=(P*g+p*E)/A,d=(-P*p+g*E)/A,x=I-Q,e=L-o,u=w-Q,V=d-o;return x*x+e*e>u*u+V*V&&(I=w,L=d),{cx:I,cy:L,x01:-n,y01:-m,x11:I*(v/T-1),y11:L*(v/T-1)}}function vn(){var l=cn,h=yn,q=M(0),S=null,v=gn,R=mn,N=pn,a=null,D=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,Q=un(c-f),o=c>f;if(a||(a=n=D()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(Q>on-y)a.moveTo(s*W(f),s*O(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*W(c),r*O(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=Q,E=Q,I=N.apply(this,arguments)/2,L=I>y&&(S?+S.apply(this,arguments):B(r*r+s*s)),w=_(un(s-r)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(L>y){var V=sn(L/r*O(I)),C=sn(L/s*O(I));(P-=V*2)>y?(V*=o?1:-1,A+=V,T-=V):(P=0,A=T=(f+c)/2),(E-=C*2)>y?(C*=o?1:-1,p+=C,g-=C):(E=0,p=g=(f+c)/2)}var j=s*W(p),z=s*O(p),F=r*W(T),G=r*O(T);if(w>y){var H=s*W(g),J=s*O(g),X=r*W(A),Y=r*O(A),U;if(Q<an)if(U=dn(j,z,X,Y,H,J,F,G)){var Z=j-U[0],$=z-U[1],k=H-U[0],b=J-U[1],nn=1/O(tn((Z*k+$*b)/(B(Z*Z+$*$)*B(k*k+b*b)))/2),en=B(U[0]*U[0]+U[1]*U[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}E>y?x>y?(e=K(X,Y,j,z,s,x,o),u=K(H,J,F,G,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(j,z),a.arc(0,0,s,p,g,!o)):a.moveTo(j,z),!(r>y)||!(P>y)?a.lineTo(F,G):d>y?(e=K(F,G,H,J,r,-d,o),u=K(j,z,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[W(m)*n,O(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:M(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:M(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:M(+n),i):q},i.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:M(+n),i):S},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:M(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:M(+n),i):R},i.padAngle=function(n){return arguments.length?(N=typeof n=="function"?n:M(+n),i):N},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
