import{_ as u,H as m,L as B,e as C,l as w,b as S,a as D,q as T,t as F,g as P,s as z,F as A,I as E,A as W}from"./hoJApwM7.js";import{p as _}from"./C3me_zhF.js";import{p as L}from"./DxDbBpYd.js";import"./Cj_vZP2E.js";import"./C932wzq6.js";import"./D4lNdZWi.js";import"./BTwLZPsQ.js";var N=E.packet,b,x=(b=class{constructor(){this.packet=[],this.setAccTitle=S,this.getAccTitle=D,this.setDiagramTitle=T,this.getDiagramTitle=F,this.getAccDescription=P,this.setAccDescription=z}getConfig(){const t=m({...N,...A().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){W(),this.packet=[]}},u(b,"PacketDB"),b),I=1e4,M=u((e,t)=>{_(e,t);let s=-1,r=[],n=1;const{bitsPerRow:l}=t.getConfig();for(let{start:a,end:o,bits:d,label:c}of e.blocks){if(a!==void 0&&o!==void 0&&o<a)throw new Error(`Packet block ${a} - ${o} is invalid. End must be greater than start.`);if(a??(a=s+1),a!==s+1)throw new Error(`Packet block ${a} - ${o??a} is not contiguous. It should start from ${s+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(o??(o=a+(d??1)-1),d??(d=o-a+1),s=o,w.debug(`Packet block ${a} - ${s} with label ${c}`);r.length<=l+1&&t.getPacket().length<I;){const[p,i]=Y({start:a,end:o,bits:d,label:c},n,l);if(r.push(p),p.end+1===n*l&&(t.pushWord(r),r=[],n++),!i)break;({start:a,end:o,bits:d,label:c}=i)}}t.pushWord(r)},"populate"),Y=u((e,t,s)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*s)return[e,void 0];const r=t*s-1,n=t*s;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]},"getNextFittingBlock"),y={parser:{yy:void 0},parse:u(async e=>{var r;const t=await L("packet",e),s=(r=y.parser)==null?void 0:r.yy;if(!(s instanceof x))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(t),M(t,s)},"parse")},H=u((e,t,s,r)=>{const n=r.db,l=n.getConfig(),{rowHeight:a,paddingY:o,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),i=n.getDiagramTitle(),h=a+o,g=h*(p.length+1)-(i?0:a),f=d*c+2,k=B(t);k.attr("viewBox",`0 0 ${f} ${g}`),C(k,g,f,l.useMaxWidth);for(const[v,$]of p.entries())O(k,$,v,l);k.append("text").text(i).attr("x",f/2).attr("y",g-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),O=u((e,t,s,{rowHeight:r,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:o,showBits:d})=>{const c=e.append("g"),p=s*(r+l)+l;for(const i of t){const h=i.start%o*a+1,g=(i.end-i.start+1)*a-n;if(c.append("rect").attr("x",h).attr("y",p).attr("width",g).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",h+g/2).attr("y",p+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!d)continue;const f=i.end===i.start,k=p-2;c.append("text").attr("x",h+(f?g/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",f?"middle":"start").text(i.start),f||c.append("text").attr("x",h+g).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),j={draw:H},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},G=u(({packet:e}={})=>{const t=m(q,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),Z={parser:y,get db(){return new x},renderer:j,styles:G};export{Z as diagram};
