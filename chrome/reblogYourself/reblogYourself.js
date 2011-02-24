div = document.getElementsByTagName("div")[0];
controls = div.getElementsByTagName("a");
noReblog = true;

if (!(/http:\/\/www\.tumblr\.com\/dashboard\/iframe/.test(window.location.href)))
   noReblog = false;
else {
   for (i=0; i<controls.length; i++) {
      if (/reblog/.test(controls[i].href)) {
         noReblog = false;
         break;
      }
   }
}

if (noReblog) {
   var url;
   var loc = window.location.href;
   loc = loc.substring(loc.indexOf("src=")+4).replace(/%3A/gi,":").replace(/%2F/gi,"/");
   url = "http://www.tumblr.com/reblog/";
   url += loc.match(/&pid=([0-9]*)/)[1] + "/";
   url += loc.match(/&rk=([a-zA-Z0-9]*)/)[1];

   var link = document.createElement('a');
   link.setAttribute('href', url);
   link.setAttribute('target', '_top');

   var icon = document.createElement('img');
   icon.style.height='20px';
   icon.style.width='64px';
   icon.style.borderWidth='0';
   icon.style.display='block';
   icon.style.cssFloat='left';
   icon.style.cursor='pointer';
   icon.alt='Reblog';
   icon.src='http://assets.tumblr.com/images/iframe_reblog_alpha.png?6';

   link.appendChild(icon);
   div.insertBefore(link,controls[controls.length-1]);
}