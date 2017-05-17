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

exports.eventProgramStage = "apqU6esBuwV";
exports.eventProgram = "X2XfE0rYiwk";
exports.trackedEntity = "MCPQUTHX1Ze";
exports.teiUID_TEA = "ysgOCWco2Gw";
exports.ouODKKey = "district";
exports.codePrefix = "/eDFSS_DataCollect/";
exports.eventDateKey = "Date";
exports.eventUIDKey = "instanceID";
exports.deUIDCoordinate = "mEWZIvuQWwe";
exports.DE_AFI_CASE = "xYO8HkDDW3N";
exports.CLUSTER_DE_VILLAGE = "mEWZIvuQWwe";


exports.CLUSTER_TEA_LABCONFIRMED = "gPGTS8eGa4i";
exports.CLUSTER_TEA_3AFICASE = "oqTYHlWrWBh";
exports.CLUSTER_TEA_5AFICASE = "oDg3FLcVw0R";
exports.CLUSTER_TEA_2ADDCASE = "k3C0dkjcSg2";
exports.CLUSTER_TEA_IS_ACTIVE = "sP8CfjSrtRq";
exports.CLUSTER_TEA_ODKINTEGRATIONCODE = "AqHMFVqkwOG";
exports.CLUSTER_TEA_COORDINATE = "ALvy8yTD1Np";
exports.CLUSTER_TEA_FEATURETYPE = "puso6mGwJFL";
exports.CLUSTER_PROGRAM = "wXXVzDXRLMe";
exports.CLUSTER_RELATIONSHIP = "Foh90NcLrpq";
exports.LAB_DE_GROUP = "YnLMC0T8BKB";




exports.DHIS_Registration_Program = "sIEPsgABx0L";
exports.DHIS_Registration_ProgramStage = "jDDmmG7ZePy";
exports.DHIS_Registration_Village_DE = "mEWZIvuQWwe";
exports.DHIS_Registration_Origin_DE = "CPrDolo2qSh";
exports.DHIS_Registration_Syndrome_DE = "xYO8HkDDW3N";


