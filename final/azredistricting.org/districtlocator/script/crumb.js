function breadcrumbs()
{	
	sURL = new String;
	bits = new Object;
	var x = 0;
	var stop = 0;
	var output = "<a href=\"/\">Home</a> &nbsp;>&nbsp; ";
	sURL = location.href;
	sURL = sURL.slice(8,sURL.length);
	chunkStart = sURL.indexOf("http://azredistricting.org/");
	sURL = sURL.slice(chunkStart+1,sURL.length)
	while(!stop){
	chunkStart = sURL.indexOf("http://azredistricting.org/");
	if (chunkStart != -1){
	  bits[x] = sURL.slice(0,chunkStart)
	  sURL = sURL.slice(chunkStart+1,sURL.length);
	}else{
	  stop = 1;
	}
	x++;
	}
	for(var i in bits){
	output += "<a href=\"";
	for(y=1;y<x-i;y++){
	  output += "http://azredistricting.org/";
	}
	output += bits[i] + "/\">" + bits[i].replace(/_/g, ' ').toLowerCase() + "</a> &nbsp;>&nbsp; ";
	}
		
	var sPage = location.href.substring(location.href.lastIndexOf('http://azredistricting.org/') + 1);
	if(sPage.length > 0)
	{
		if(sPage.indexOf('.') > 0)
		{
			sPage = sPage.substring(0, sPage.indexOf('.')).toLowerCase();
			
			if(sPage != 'default' && sPage != 'index')
				output += sPage.replace(/_/g, ' ');
		}
	}
	
	document.write(output);
}
