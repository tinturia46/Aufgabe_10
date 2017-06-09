/* The size of these files were reduced. The following function fixes all references. */
var $customMSCore = JSIL.GetAssembly("mscorlib");
var $customSys = JSIL.GetAssembly("System");
var $customSysConf = JSIL.GetAssembly("System.Configuration");
var $customSysCore = JSIL.GetAssembly("System.Core");
var $customSysNum = JSIL.GetAssembly("System.Numerics");
var $customSysXml = JSIL.GetAssembly("System.Xml");
var $customSysSec = JSIL.GetAssembly("System.Security");

if (typeof (contentManifest) !== "object") { contentManifest = {}; };
contentManifest["Fusee.Tutorial.Web.contentproj"] = [
    ["Script",	"Fusee.Base.Core.Ext.js",	{  "sizeBytes": 1234 }],
    ["Script",	"Fusee.Base.Imp.Web.Ext.js",	{  "sizeBytes": 13105 }],
    ["Script",	"opentype.js",	{  "sizeBytes": 161949 }],
    ["Script",	"Fusee.Engine.Imp.Graphics.Web.Ext.js",	{  "sizeBytes": 108256 }],
    ["Script",	"Fusee.Xene.Ext.js",	{  "sizeBytes": 1408 }],
    ["Script",	"Fusee.Xirkit.Ext.js",	{  "sizeBytes": 43420 }],
    ["Script",	"SystemExternals.js",	{  "sizeBytes": 11711 }],
    ["File",	"Assets/Dummy.txt",	{  "sizeBytes": 0 }],
    ["Image",	"Assets/Styles/loading_rocket.png",	{  "sizeBytes": 10975 }],
    ];