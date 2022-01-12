//@ui5-bundle com/myorg/myapp/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/json/JSONModel"],function(t,s,n){const e=s["support"];const i=t.extend("com.myorg.myapp.Component",{metadata:{manifest:"json"},init:function s(){t.prototype.init.call(this);this.getRouter().initialize();const e=new n("https://api.corona-zahlen.org/states");this.setModel(e)},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});
},
	"com/myorg/myapp/control/ChartRecord.generated.tsinterface.js":function(){
},
	"com/myorg/myapp/control/ChartRecord.js":function(){sap.ui.define(["sap/ui/core/Element"],function(t){const o=t.extend("com.myorg.myapp.control.ChartRecord",{metadata:{properties:{label:"string",value:"float"}},constructor:function o(e,r){t.prototype.constructor.call(this,e,r)}});return o});
},
	"com/myorg/myapp/control/LineChart.generated.tsinterface.js":function(){
},
	"com/myorg/myapp/control/LineChart.js":function(){sap.ui.define(["sap/ui/core/Control","chart.js"],function(t,e){const o=e["Chart"];const r=t.extend("com.myorg.myapp.control.LineChart",{renderer:{apiVersion:2,render:(t,e)=>{t.openStart("div",e);t.style("color",e.getColor());t.style("padding","2em");t.openEnd();t.openStart("canvas",e.getId()+"-canvas");t.openEnd();t.close("canvas");t.close("div")}},metadata:{properties:{title:"string",color:"sap.ui.core.CSSColor"},aggregations:{records:{type:"com.myorg.myapp.control.ChartRecord"}},defaultAggregation:"records"},constructor:function e(o,r){t.prototype.constructor.call(this,o,r)},_getChartData:function t(){const e=this.getRecords();return{labels:e.map(t=>t.getLabel()),datasets:[{label:this.getTitle(),backgroundColor:this.getColor(),borderColor:this.getColor(),data:e.map(t=>t.getValue())}]}},onAfterRendering:function t(){if(!this._chart){this._chart=new o(this.getDomRef("canvas"),{type:"line",data:this._getChartData(),options:{responsive:true}})}else{this._chart.data=this._getChartData();this._chart.update()}}});return r});
},
	"com/myorg/myapp/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){const t=n.extend("com.myorg.myapp.controller.App",{onInit:function n(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return t});
},
	"com/myorg/myapp/controller/IncidenceDetail.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(e,t,n,o){const i=e.extend("com.myorg.myapp.controller.IncidenceDetail",{onInit:function e(){const t=new o("https://api.corona-zahlen.org/states/history/incidence/100");this.getView().setModel(t,"incidenceHistory");n.getRouterFor(this).getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this))},onRouteMatched:function e(t){this.getView().bindElement({path:"/data/"+t.getParameter("arguments").id,model:"incidenceHistory"})},onNavButtonPress:function e(){const o=t.getInstance().getPreviousHash();if(o!==undefined){window.history.go(-1)}else{n.getRouterFor(this).navTo("main")}}});return i});
},
	"com/myorg/myapp/controller/Main.controller.js":function(){sap.ui.define(["sap/ui/core/library","sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(e,n,o){const t=e["IconColor"];const r=n.extend("com.myorg.myapp.controller.Main",{formatIncidence:function e(n){return Math.round(n)},formatIconColor:function e(n){if(n<400){return t.Default}else if(n<800){return t.Critical}else{return t.Negative}},navToIncidenceDetail:function e(n){const t=n.getSource().getBindingContext().getProperty("abbreviation");o.getRouterFor(this).navTo("IncidenceDetailRoute",{id:t})}});return r});
},
	"com/myorg/myapp/i18n/i18n.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/i18n/i18n_de.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Inzidenz\\u00fcbersicht\nincidenceLabel=Inzidenz',
	"com/myorg/myapp/i18n/i18n_en.properties":'app_title=myapp\napp_description=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.myorg.myapp","type":"application","i18n":"i18n/i18n.properties","title":"{{app_title}}","description":"{{app_description}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.myorg.myapp.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.97.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.f":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myapp.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.myorg.myapp.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"},{"name":"IncidenceDetailRoute","pattern":"state/{id}","target":["IncidenceDetailTarget"]}],"targets":{"main":{"viewId":"main","viewName":"Main"},"IncidenceDetailTarget":{"viewId":"incidenceDetail","viewName":"IncidenceDetail","viewLevel":2}}}}}',
	"com/myorg/myapp/view/App.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"com/myorg/myapp/view/IncidenceDetail.view.xml":'<mvc:View\r\n\tdisplayBlock="true"\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\txmlns="sap.m"\r\n\txmlns:cc="com.myorg.myapp.control"\r\n\tcontrollerName="com.myorg.myapp.controller.IncidenceDetail"><Page\r\n\t\tid="incidenceDetailPage"\r\n\t\ttitle="{incidenceHistory>name}"\r\n\t\tshowNavButton="true"\r\n\t\tnavButtonPress=".onNavButtonPress"><cc:LineChart\r\n\t\t\t\ttitle="{incidenceHistory>name}"\r\n\t\t\t\tcolor="red"\r\n\t\t\t\trecords="{incidenceHistory>history}"><cc:ChartRecord\r\n\t\t\t\tlabel="{incidenceHistory>date}"\r\n\t\t\t\tvalue="{incidenceHistory>weekIncidence}" /></cc:LineChart></Page></mvc:View>',
	"com/myorg/myapp/view/Main.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:grid="sap.ui.layout.cssgrid"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"><Page id="page" title="{i18n>title}"><content><f:GridList id="statesList" \n\t\t\t\titems="{path: \'/data\', sorter: {path: \'weekIncidence\', descending: true}}"\n\t\t\t\tclass="sapUiContentPadding"\n\t\t\t\tnoDataText="No state data"><f:customLayout><grid:GridBoxLayout/></f:customLayout><f:items><CustomListItem type="Active" press=".navToIncidenceDetail"><HBox justifyContent="SpaceBetween" class="sapUiSmallMargin"><Title text="{name}" wrapping="true"/><core:Icon \n\t\t\t\t\t\t\t\tsrc="sap-icon://wounds-doc" \n\t\t\t\t\t\t\t\tsize="2.5rem" \n\t\t\t\t\t\t\t\tcolor="{path: \'weekIncidence\', formatter: \'.formatIconColor\'}"/></HBox><HBox justifyContent="SpaceBetween" class="sapUiSmallMargin"><Label text="{i18n>incidenceLabel}:"/><ObjectNumber number="{path: \'weekIncidence\', formatter: \'.formatIncidence\'}"/></HBox></CustomListItem></f:items></f:GridList></content></Page></mvc:View>'
});
