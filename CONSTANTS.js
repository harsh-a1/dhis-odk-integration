/**
 * Created by harsh on 16/7/16.
 */

exports.DHIS_URL_BASE = "http://139.162.61.147/nieodk";


exports.username = "admin";
exports.password = "district";
exports.auth = "Basic " + new Buffer(exports.username + ":" + exports.password).toString("base64");

//exports.ODKURL_INSTANCE_IDS = "http://112.133.207.124:8080/ODKAggregate/view/submissionList?formId=edfss_data_form"

exports.ODKURL_HOST = "http://112.133.207.124";
exports.ODKURL_PATH = "/ODKAggregate/view/submissionList?formId=edfss_data_form";
exports.ODKURL_PATH_DATA = "/ODKAggregate/view/downloadSubmission?formId=edfss_data_form[@version=null@uiVersion=null]/eDFSS_DataCollect";
exports.ODKURL_PORT = "8080";
exports.ODK_USERNAME = "NIE_admin";
exports.ODK_PASSWORD = "NIE!@#abc";

exports.eventProgramStage = "jDDmmG7ZePy";
exports.eventProgram = "sIEPsgABx0L";
exports.ouODKKey = "district";
exports.codePrefix = "/eDFSS_DataCollect/";
exports.eventDateKey = "Date";
exports.eventUIDKey = "instanceID";
exports.deUIDCoordinate = "mEWZIvuQWwe";