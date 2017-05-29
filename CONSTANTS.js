/**
 * Created by harsh on 16/7/16.
 */

exports.DHIS_URL_BASE = "http://139.162.61.147/nieodk_new";


exports.username = "admin";
exports.password = "district";
exports.auth = "Basic " + new Buffer(exports.username + ":" + exports.password).toString("base64");

//exports.ODKURL_INSTANCE_IDS = "http://112.133.207.124:8080/ODKAggregate/view/submissionList?formId=edfss_data_form"




exports.ODKURL_HOST = "http://112.133.207.124";
exports.ODKURL_IPD_PATH= "/GHSA/view/submissionList?formId=eDFSS_IPD_V3";
exports.ODKURL_IPD_PATH_DATA = "/GHSA/view/downloadSubmission?formId=eDFSS_IPD_V3[@version=null@uiVersion=null]/edfss_ipd_v3";
exports.ODKURL_PORT = "8080";
exports.ODK_USERNAME = "hisp_admin";
exports.ODK_PASSWORD = "hisp_admin";

exports.ODK2DHIS = {};

var ipd_form_id = "eDFSS_IPD_V3";
var ipd_odk_qustion_prefix_id = "edfss_ipd_v3";

exports.ODK2DHIS["eDFSS_IPD_V3"] = {

    ODK_URL_PATH : "/GHSA/view/submissionList?formId="+ipd_form_id,
    ODK_URL_PATH_DATA : "/GHSA/view/downloadSubmission?formId="+ipd_form_id+"[@version=null@uiVersion=null]/"+ipd_odk_qustion_prefix_id,
    ODK_formId : ipd_form_id,
    ODK_questionPrefixId : ipd_odk_qustion_prefix_id,
    DHIS_TE : "MCPQUTHX1Ze",
    DHIS_PROGRAM : "c9LK7wM2Xmp",
    DHIS_PROGRAMSTAGE : "ZGmVJcrAdCg",
    DHIS_CC  : "bjDvmb4bfuf",
    
    ODK_QUESTION_VILLAGE : "Address_Information/Village",
    ODK_eventDateKey : "Date",
    ODK_eventUIDKey : "instanceID"
    
};

var lab_form_id = "DPHL_Lab_V1";
var lab_odk_qustion_prefix_id = "EDFSS_Lab_v1";

exports.ODK2DHIS[lab_form_id] = {

    ODK_URL_PATH : "/GHSA/view/submissionList?formId="+lab_form_id,
    ODK_URL_PATH_DATA : "/GHSA/view/downloadSubmission?formId="+lab_form_id+"[@version=null@uiVersion=null]/"+lab_odk_qustion_prefix_id,
    ODK_formId : lab_form_id,
    ODK_questionPrefixId : lab_odk_qustion_prefix_id,
    DHIS_TE : "MCPQUTHX1Ze",
    DHIS_PROGRAM : "uN7UhBdFv0g",
    DHIS_PROGRAMSTAGE : "BdRXq0lseWw",
    DHIS_CC  : "bjDvmb4bfuf",
    
    ODK_QUESTION_VILLAGE : "Address_Information/Village",
    ODK_eventDateKey : "Date",
    ODK_eventUIDKey : "instanceID"
    
};


var opd_form_id = "eDFSS_OPD_V3";
var opd_odk_qustion_prefix_id = "EDFSS_OPD_v3";

exports.ODK2DHIS[opd_form_id] = {

    ODK_URL_PATH : "/GHSA/view/submissionList?formId="+opd_form_id,
    ODK_URL_PATH_DATA : "/GHSA/view/downloadSubmission?formId="+opd_form_id+"[@version=null@uiVersion=null]/"+opd_odk_qustion_prefix_id,
    ODK_formId : opd_form_id,
    ODK_questionPrefixId : opd_odk_qustion_prefix_id,
    DHIS_TE : "MCPQUTHX1Ze",
    DHIS_PROGRAM : "Mg20ysW4PnT",
    DHIS_PROGRAMSTAGE : "vnO1LoE7WtJ",
    DHIS_CC  : "bjDvmb4bfuf",
    
    ODK_QUESTION_VILLAGE : "Address_Information/Village",
    ODK_eventDateKey : "Date",
    ODK_eventUIDKey : "instanceID"
    
};


var ipd_aggregate_form_id = "IPD_Aggregate_V1";
var ipd_aggregate_odk_qustion_prefix_id = "EDFSS_IPD_Aggregate";

exports.ODK2DHIS[ipd_aggregate_form_id] = {

    ODK_URL_PATH : "/GHSA/view/submissionList?formId="+ipd_aggregate_form_id,
    ODK_URL_PATH_DATA : "/GHSA/view/downloadSubmission?formId="+ipd_aggregate_form_id+"[@version=null@uiVersion=null]/"+ipd_aggregate_odk_qustion_prefix_id,
    ODK_formId : ipd_aggregate_form_id,
    ODK_questionPrefixId : ipd_aggregate_odk_qustion_prefix_id,
    DHIS_TE : "MCPQUTHX1Ze",
    DHIS_PROGRAM : "bbGmjeq7CY9",
    DHIS_PROGRAMSTAGE : "Cm3NBPjaMp8",
    DHIS_CC  : "bjDvmb4bfuf",
    
    ODK_QUESTION_VILLAGE : "Institution",
    ODK_eventDateKey : "Date",
    ODK_eventUIDKey : "instanceID"
    
};






exports.eventProgramStage = "apqU6esBuwV";
exports.eventProgram = "X2XfE0rYiwk";
exports.trackedEntity = "MCPQUTHX1Ze";
exports.DUMMY_TEA_UID = "OHcdw8lu204";
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


