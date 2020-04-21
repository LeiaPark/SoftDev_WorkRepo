var rend = document.getElementById("render");
var trans = document.getElementById("transit");
var chart = document.getElementsByTagName("svg");
var count = 0;
var width = 800;
var svgContainer = d3.select("#chartID").append("svg")
    .attr("width", width+margin.left + margin.right)
    .attr("height",height+margin.top + margin.bottom)
    .append("g").attr("class", "container")
    .attr("transform", "translate("+ margin.left +","+ margin.top +")");
var render = function(e) {
	var data = names[count];
	var cereallist = [];
	var cereals = ulticereals[data];
	for (var item in cereals) {
		cereallist.push(item);}
	var xline = d3.scaleLinear()
	.domain([0,d3.max(cereal list)])
	.range([0,width]);
	var yline = d3.scaleBand()
	.domain(d3.range(cereallist.length))
	.range([0,20 * cereallist.length]);
	var graph = d3.select("svg")
	.attr("width", width)
	.attr("height", yline.range()[1])
	.attr("font-family", "sans-serif")
	.attr("font-size", "10")
	.attr("text-anchor", "end");
	var end = graph.selectAll("g")
	.data(cereallist)
	.join("g")
	.attr("transform");
	end.append("rect")
	.attr("fill","green")
	.attr("width",xline + 10)
	.attr("height",yline.bandwidth()+20);
	end.append("text")
	.attr("fill","white")
	.attr("x", d => xline(d) - 8)
	.attr("y", yline.bandwidth() / 2)
	.attr("dy", "0.75em").text(d => d);
	count += 1;
}
var update = function(e){
  var brand = document.getElementById('brand');
  brand.innerHTML = data[e];}
var renderButton = function(e) {
	chart[0].innerHTML = "";
	count = 0;
	render(e);}
var transitButton = function(e) {
	if (count != 0) {
		chart[0].innerHTML = "";
		render(e);}
}
rend.addEventListener("click",renderButton);
trans.addEventListener("click",transitButton);
var _0x2331=['transform','right','select','bottom','translate(','transit','container','getElementById','top','getElementsByTagName','class','height','svg','render','#chartID','attr','append'];(function(_0x15a2fb,_0x233138){var _0x1b0bc3=function(_0x46cc21){while(--_0x46cc21){_0x15a2fb['push'](_0x15a2fb['shift']());}};_0x1b0bc3(++_0x233138);}(_0x2331,0xbe));var _0x1b0b=function(_0x15a2fb,_0x233138){_0x15a2fb=_0x15a2fb-0x0;var _0x1b0bc3=_0x2331[_0x15a2fb];return _0x1b0bc3;};var rend=document[_0x1b0b('0x4')](_0x1b0b('0xa'));var trans=document[_0x1b0b('0x4')](_0x1b0b('0x2'));var chart=document[_0x1b0b('0x6')](_0x1b0b('0x9'));var count=0x0;var width=0x320;var svgContainer=d3[_0x1b0b('0x10')](_0x1b0b('0xb'))[_0x1b0b('0xd')](_0x1b0b('0x9'))[_0x1b0b('0xc')]('width',width+margin['left']+margin[_0x1b0b('0xf')])[_0x1b0b('0xc')](_0x1b0b('0x8'),height+margin[_0x1b0b('0x5')]+margin[_0x1b0b('0x0')])['append']('g')[_0x1b0b('0xc')](_0x1b0b('0x7'),_0x1b0b('0x3'))[_0x1b0b('0xc')](_0x1b0b('0xe'),_0x1b0b('0x1')+margin['left']+','+margin[_0x1b0b('0x5')]+')');
var _0x4644=['fill','transform','white','range','append','rect','green','scaleLinear','height','bandwidth','attr','font-family','0.75em','join','font-size','push','selectAll','scaleBand','data','text','length','end','sans-serif','width'];(function(_0x2c400f,_0x464452){var _0x4f68b7=function(_0x164431){while(--_0x164431){_0x2c400f['push'](_0x2c400f['shift']());}};_0x4f68b7(++_0x464452);}(_0x4644,0x11e));var _0x4f68=function(_0x2c400f,_0x464452){_0x2c400f=_0x2c400f-0x0;var _0x4f68b7=_0x4644[_0x2c400f];return _0x4f68b7;};var render=function(_0x5d14dd){var _0x534897=names[count];var _0x50a478=[];var _0x2d29db=ulticereals[_0x534897];for(var _0x13dd80 in _0x2d29db){_0x50a478[_0x4f68('0x11')](_0x13dd80);}var _0x1e7aa4=d3[_0x4f68('0x9')]()['range']([0x0,width]);var _0x1951db=d3[_0x4f68('0x13')]()[_0x4f68('0x5')]([0x0,0x14*_0x50a478[_0x4f68('0x16')]]);var _0x4f57e7=d3['select']('svg')[_0x4f68('0xc')](_0x4f68('0x1'),width)[_0x4f68('0xc')](_0x4f68('0xa'),_0x1951db['range']()[0x1])[_0x4f68('0xc')](_0x4f68('0xd'),_0x4f68('0x0'))[_0x4f68('0xc')](_0x4f68('0x10'),'10')[_0x4f68('0xc')]('text-anchor',_0x4f68('0x17'));var _0x319cd6=_0x4f57e7[_0x4f68('0x12')]('g')[_0x4f68('0x14')](_0x50a478)[_0x4f68('0xf')]('g')[_0x4f68('0xc')](_0x4f68('0x3'));_0x319cd6[_0x4f68('0x6')](_0x4f68('0x7'))[_0x4f68('0xc')](_0x4f68('0x2'),_0x4f68('0x8'))[_0x4f68('0xc')]('width',_0x1e7aa4+0xa)[_0x4f68('0xc')](_0x4f68('0xa'),_0x1951db[_0x4f68('0xb')]()+0x14);_0x319cd6[_0x4f68('0x6')](_0x4f68('0x15'))[_0x4f68('0xc')](_0x4f68('0x2'),_0x4f68('0x4'))[_0x4f68('0xc')]('x',_0x3697ed=>_0x1e7aa4(_0x3697ed)-0x8)['attr']('y',_0x1951db[_0x4f68('0xb')]()/0x2)[_0x4f68('0xc')]('dy',_0x4f68('0xe'))[_0x4f68('0x15')](_0x1afb16=>_0x1afb16);count+=0x1;};
var _0x58a8=['brand','getElementById','innerHTML'];(function(_0x5a51e0,_0x58a807){var _0x13ae4c=function(_0x3de1f6){while(--_0x3de1f6){_0x5a51e0['push'](_0x5a51e0['shift']());}};_0x13ae4c(++_0x58a807);}(_0x58a8,0x7b));var _0x13ae=function(_0x5a51e0,_0x58a807){_0x5a51e0=_0x5a51e0-0x0;var _0x13ae4c=_0x58a8[_0x5a51e0];return _0x13ae4c;};var update=function(_0x2bada2){var _0x2e086c=document[_0x13ae('0x1')](_0x13ae('0x0'));_0x2e086c[_0x13ae('0x2')]=data[_0x2bada2];};var renderButton=function(_0x2e569a){chart[0x0][_0x13ae('0x2')]='';count=0x0;render(_0x2e569a);};var transitButton=function(_0x32dc40){if(count!=0x0){chart[0x0][_0x13ae('0x2')]='';render(_0x32dc40);}};
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