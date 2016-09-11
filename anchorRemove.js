function removeUrlAnchor(url){


url = url.replace(/\#about/g, '');
console.log(url);
}

removeUrlAnchor('www.codewars.com?page=1')

removeUrlAnchor('www.codewars.com#about')


function removeUrlAnchor(url){
url = url.replace(/\#about/g, '');
return url;
}
