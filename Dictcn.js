var KMWizDictType = 2;

function OnDictcnButtonClicked() {
	var objHtmlDocument = objWindow.CurrentDocumentHtmlDocument;
	var objScript = objHtmlDocument.createElement('script');
	objScript.setAttribute('src','http://dict.cn/hc/init.php');
	objHtmlDocument.body.appendChild(objScript);
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}

function OnDictcnButtonClicked2() {
	var objHtmlDocument = objWindow.CurrentDocumentHtmlDocument;
	//
	if (!objHtmlDocument.getElementById('dict_status')) {
		var objSpan = objHtmlDocument.createElement('span');
		objSpan.setAttribute('id','dict_status');
		objHtmlDocument.body.appendChild(objSpan);
		//
		var objScript = objHtmlDocument.createElement('script');
		objScript.setAttribute('src','http://dict.cn/hc/');
		objHtmlDocument.body.appendChild(objScript);
		//
		var objScript2 = objHtmlDocument.createElement('script');
		objScript2.text = "dictInit();";
		objHtmlDocument.body.appendChild(objScript2);
		//
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
}

function InitDictcnButton() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("Dictcn.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strDictcn");
    if (KMWizDictType == 1) {
    	objWindow.AddToolButton("document", "DictcnButton", buttonText, "", "OnDictcnButtonClicked");
    }
    else {
    	objWindow.AddToolButton("document", "DictcnButton", buttonText, "", "OnDictcnButtonClicked2");
	}
}

InitDictcnButton();
