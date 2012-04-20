
function DictcnButtonInitiate() {
	var objDatabase = objApp.Database;
	if (objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") != "ON") {
		objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") = "OFF";
	}
	//
	var pluginPath = objApp.GetPluginPathByScriptFileName("Dictcn.js");
	var languangeFileName = pluginPath + "plugin.ini";
	var buttonText = objApp.LoadStringFromFile(languangeFileName, "strDictcn");
	buttonText += ":" + objDatabase.Meta("wizhelp_parm","Dictcn_FLAG");
	//
	objWindow.AddToolButton("main", "KMDictcnButton", buttonText, "", "DictcnButtonChange");   	
}

function DictcnButtonChange() {
	var objDatabase = objApp.Database;
	if (objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") == "ON")	{
		objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") = "OFF";
	}
	else {
		objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") = "ON";
	}
	//
	var pluginPath = objApp.GetPluginPathByScriptFileName("Dictcn.js");
	var languangeFileName = pluginPath + "plugin.ini";
	var buttonText = objApp.LoadStringFromFile(languangeFileName, "strDictcn");
	buttonText += ":" + objDatabase.Meta("wizhelp_parm","Dictcn_FLAG");
	//
	objWindow.RemoveToolButton("main", "KMDictcnButton");
	objWindow.AddToolButton("main", "KMDictcnButton", buttonText, "", "DictcnButtonChange");
	KMCheckDictcn();
}

function DictcnAdd2Doc() {
	var objHtmlDocument = objWindow.CurrentDocumentHtmlDocument;
	//
	var objScript1 = objHtmlDocument.createElement("<SCRIPT language='javascript' id='KMDictcn_Script1'></SCRIPT>");
	objScript1.setAttribute('src','http://dict.cn/hc/');
	objHtmlDocument.body.appendChild(objScript1);
	//
	var objScript2 = objHtmlDocument.createElement("<SCRIPT language='javascript' id='KMDictcn_Script2'></SCRIPT>");
	objScript2.text = "dictInit();";
	objHtmlDocument.body.appendChild(objScript2);
}

// function DictcnRemoveFromDoc() {
// 	var objHtmlDocument = objWindow.CurrentDocumentHtmlDocument;
// 	//
// 	var objScript1 = objHtmlDocument.getElementById('KMDictcn_Script1')
// 	var objScript2 = objHtmlDocument.getElementById('KMDictcn_Script2')
// 	if (objScript1) { objScript1.removeNode(true); }
// 	if (objScript2) { objScript2.removeNode(true); }
// 	//
// }

function KMCheckDictcn(){
	var objDatabase = objApp.Database;
	if (objDatabase.Meta("wizhelp_parm","Dictcn_FLAG") == "ON") {
		DictcnAdd2Doc();
	}
	// else {
	// 	DictcnRemoveFromDoc();
	// }
}

DictcnButtonInitiate();
eventsHtmlDocumentComplete.add(KMCheckDictcn);
