/**
 * Created by harsh on 16/7/16.
 */

//exports.DHIS_URL_BASE = "http://112.133.207.124/nieodk/";
//exports.DHIS_URL_BASE = "http://139.162.61.147//nieodk/";

exports.DHIS_URL_BASE = "http://localhost:8080/dhis/";
exports.DEST_PATH_BASE = "/home/hisp/Desktop/tomcat/dhis_home/documents/";
//exports.DEST_PATH_BASE = "/home/nieodk/tomcat_nieodk/dhis_home/documents/";


exports.username = "admin";
exports.password = "Hisp@1234";
exports.auth = "Basic " + new Buffer(exports.username + ":" + exports.password).toString("base64");


exports.ODKURL_HOSTNAME = "/GHSA";
exports.ODKURL_HOST = "http://112.133.207.124";
exports.ODKURL_PORT = "8080";

/*
exports.ODKURL_HOSTNAME = "/GHSA";
exports.ODKURL_HOST = "http://localhost";
exports.ODKURL_PORT = "8090";
*/

exports.ODK_USERNAME = "hisp_admin";
exports.ODK_PASSWORD = "hisp_admin";

exports.ODK2DHIS = {};

exports.ODK2DHIS["IPD_Aggregate_V1"] = { 
    ODK_OrgUnitQuestion : "Institution",     
};


exports.eventProgramStage = "iWcQ5lxmsy4";
exports.eventProgram = "Ml0ZNj9APN0";
exports.eventDateKey = "Date";
exports.eventUIDKey = "instanceID";
exports.ODK_OrgUnitQuestion = "Address_Information/Village";

exports.DHIS_DefaultCategoryCombo = "GLevLNI9wkl";
exports.DHIS_ROOT_OU_UID = "mnbTnDyJ37p";
exports.DHIS_DE_ODK_FORMID = "glBt6kk3AXS";
exports.DHIS_DE_DUPLICATE_CASE = "DqQoNAJ3jwl";
exports.DHIS_DE_DATE = "o5bAIpGOHqa";
exports.DHIS_DE_MEMBEROFCLUSTER = "D6bx5aQ5DOo";


exports.DHIS_DE_SYNDROME_UID = "hkbX11lZdlK";
exports.DHIS_CLUSTER_TRACKED_ENTITY_UID = "q0NbkqzMUF8";




exports.trackedEntity = "MCPQUTHX1Ze";


exports.CLUSTER_TEA_LABCONFIRMED = "nMC9jWaMUTA";
exports.CLUSTER_TEA_3AFICASE = "vCeMi4DtfEC";
exports.CLUSTER_TEA_5AFICASE = "k0L2KR4ZrU2";
exports.CLUSTER_TEA_2ADDCASE = "ET5iMtBo5fV";
exports.CLUSTER_TEA_IS_ACTIVE = "DyjpKLdKmoD";
exports.CLUSTER_TEA_CLUSTERID = "ITGMdhSozgC";
exports.CLUSTER_TEA_CLUSTER_TYPE = "sBmb7HfvAau";
exports.CLUSTER_TEA_CASES_UIDS = "I2eCWfhryZH";
exports.CLUSTER_TEA_CLUSTER_METHOD = "nifrYIceHDu";
exports.CLUSTER_TEA_CLUSTER_INDEX_DATE = "tSauh1hpsrn";
exports.CLUSTER_TEA_CLUSTER_TAIL_DATE = "b1WmXl2TU5U";
exports.CLUSTER_TEA_CLUSTER_START_DATE = "XGWh7OT2Pa8";

 exports.CLUSTER_TEA__CLUSTER_IDENTIFIER = "eDCvZdpPzQV";
exports.CLUSTER_TEA_COORDINATE = "sanq4S5uYdb";
exports.CLUSTER_TEA_FEATURETYPE = "Dh0HlV2bqh2";
exports.CLUSTER_PROGRAM = "mcnt7nqNrNw";
exports.CLUSTER_PROGRAMSTAGE = "pxY0AQCVkKu";
exports.CLUSTER_DE_CASE_TEI_UID = "TTN6YvF19W1";

exports.CLUSTER_DE_GROUP_DE_TO_SHOW = "sXzZ0Xl2F0j";
exports.LAB_DE_GROUP_UID = "dhw8v5ntj2U";
exports.EMAIL_GROUP_UID = "r9VXthBBBsk";
exports.EMAIL_GROUP_CC_UID = "eS1b9n7YVc0";




exports.DHIS_Registration_Program = "sIEPsgABx0L";
exports.DHIS_Registration_ProgramStage = "jDDmmG7ZePy";
exports.DHIS_Registration_Village_DE = "mEWZIvuQWwe";
exports.DHIS_Registration_Origin_DE = "CPrDolo2qSh";
exports.DHIS_Registration_Syndrome_DE = "xYO8HkDDW3N";


exports.Reports = {
    ClusterInformation  : {
        id : "DnjzL5wPJE5",
        name : "Cluster_Information"
    }
}
