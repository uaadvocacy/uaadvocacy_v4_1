var SpatialFunctions=function() {
SpatialFunctions.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
SpatialFunctions.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return SpatialFunctions._staticInstance.get_path();},
HelloWorld:function(succeededCallback, failedCallback, userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'HelloWorld',false,{},succeededCallback,failedCallback,userContext); },
GetDistricts:function(dblLat,dblLon,strType,strTable,succeededCallback, failedCallback, userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="strType" type="String">System.String</param>
/// <param name="strTable" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetDistricts',false,{dblLat:dblLat,dblLon:dblLon,strType:strType,strTable:strTable},succeededCallback,failedCallback,userContext); },
GetBothDistricts:function(dblLat,dblLon,locType,succeededCallback, failedCallback, userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="locType" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetBothDistricts',false,{dblLat:dblLat,dblLon:dblLon,locType:locType},succeededCallback,failedCallback,userContext); },
GetBoth2001Districts:function(dblLat,dblLon,locType,succeededCallback, failedCallback, userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="locType" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetBoth2001Districts',false,{dblLat:dblLat,dblLon:dblLon,locType:locType},succeededCallback,failedCallback,userContext); }}
SpatialFunctions.registerClass('SpatialFunctions',Sys.Net.WebServiceProxy);
SpatialFunctions._staticInstance = new SpatialFunctions();
SpatialFunctions.set_path = function(value) {
SpatialFunctions._staticInstance.set_path(value); }
SpatialFunctions.get_path = function() { 
/// <value type="String" mayBeNull="true">The service url.</value>
return SpatialFunctions._staticInstance.get_path();}
SpatialFunctions.set_timeout = function(value) {
SpatialFunctions._staticInstance.set_timeout(value); }
SpatialFunctions.get_timeout = function() { 
/// <value type="Number">The service timeout.</value>
return SpatialFunctions._staticInstance.get_timeout(); }
SpatialFunctions.set_defaultUserContext = function(value) { 
SpatialFunctions._staticInstance.set_defaultUserContext(value); }
SpatialFunctions.get_defaultUserContext = function() { 
/// <value mayBeNull="true">The service default user context.</value>
return SpatialFunctions._staticInstance.get_defaultUserContext(); }
SpatialFunctions.set_defaultSucceededCallback = function(value) { 
 SpatialFunctions._staticInstance.set_defaultSucceededCallback(value); }
SpatialFunctions.get_defaultSucceededCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default succeeded callback.</value>
return SpatialFunctions._staticInstance.get_defaultSucceededCallback(); }
SpatialFunctions.set_defaultFailedCallback = function(value) { 
SpatialFunctions._staticInstance.set_defaultFailedCallback(value); }
SpatialFunctions.get_defaultFailedCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default failed callback.</value>
return SpatialFunctions._staticInstance.get_defaultFailedCallback(); }
SpatialFunctions.set_enableJsonp = function(value) { SpatialFunctions._staticInstance.set_enableJsonp(value); }
SpatialFunctions.get_enableJsonp = function() { 
/// <value type="Boolean">Specifies whether the service supports JSONP for cross domain calling.</value>
return SpatialFunctions._staticInstance.get_enableJsonp(); }
SpatialFunctions.set_jsonpCallbackParameter = function(value) { SpatialFunctions._staticInstance.set_jsonpCallbackParameter(value); }
SpatialFunctions.get_jsonpCallbackParameter = function() { 
/// <value type="String">Specifies the parameter name that contains the callback function name for a JSONP request.</value>
return SpatialFunctions._staticInstance.get_jsonpCallbackParameter(); }
SpatialFunctions.set_path("/districtlocator/SpatialFunctions.asmx");
SpatialFunctions.HelloWorld= function(onSuccess,onFailed,userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
SpatialFunctions._staticInstance.HelloWorld(onSuccess,onFailed,userContext); }
SpatialFunctions.GetDistricts= function(dblLat,dblLon,strType,strTable,onSuccess,onFailed,userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="strType" type="String">System.String</param>
/// <param name="strTable" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
SpatialFunctions._staticInstance.GetDistricts(dblLat,dblLon,strType,strTable,onSuccess,onFailed,userContext); }
SpatialFunctions.GetBothDistricts= function(dblLat,dblLon,locType,onSuccess,onFailed,userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="locType" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
SpatialFunctions._staticInstance.GetBothDistricts(dblLat,dblLon,locType,onSuccess,onFailed,userContext); }
SpatialFunctions.GetBoth2001Districts= function(dblLat,dblLon,locType,onSuccess,onFailed,userContext) {
/// <param name="dblLat" type="Number">System.Double</param>
/// <param name="dblLon" type="Number">System.Double</param>
/// <param name="locType" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
SpatialFunctions._staticInstance.GetBoth2001Districts(dblLat,dblLon,locType,onSuccess,onFailed,userContext); }
