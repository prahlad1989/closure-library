goog.require('goog.dom');
goog.require('goog.dom.TagName');

function sayHi(){
	var newHeader = goog.dom.createDom(goog.dom.TagName.H1, {'style': 'color:red'},'Hellow word');

goog.dom.appendChild(document.body, newHeader);

}
