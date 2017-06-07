/**
 * Created by harsh on 16/7/16.
 */

exports.DHIS_URL_BASE = "http://localhost:8090/dhis";


exports.username = "admin";
exports.password = "district";
exports.auth = "Basic " + new Buffer(exports.username + ":" + exports.password).toString("base64");

//exports.ODKURL_INSTANCE_IDS = "http://112.133.207.124:8080/ODKAggregate/view/submissionList?formId=edfss_data_form"



exports.ODKURL_HOSTNAME = "/GHSA";
exports.ODKURL_HOST = "http://112.133.207.124";
exports.ODKURL_PORT = "8080";
exports.ODK_USERNAME = "hisp_admin";
exports.ODK_PASSWORD = "hisp_admin";

exports.ODK2DHIS = {};

exports.ODK2DHIS["EDFSS_IPD_Aggregate"] = { 
    ODK_OrgUnitQuestion : "Institution",     
};


exports.eventProgramStage = "iWcQ5lxmsy4";
exports.eventProgram = "Ml0ZNj9APN0";
exports.eventDateKey = "Date";
exports.eventUIDKey = "instanceID";
exports.ODK_OrgUnitQuestion = "Address_Information/Village";

exports.DHIS_DefaultCategoryCombo = "GLevLNI9wkl";





exports.DHIS_IPD_PROGRAM_UID = "c9LK7wM2Xmp";
exports.DHIS_LAB_PROGRAM_UID = "uN7UhBdFv0g";

exports.DHIS_DE_IPD_SYNDROME_UID = "gkeo5Y1FXI0";
exports.DHIS_CLUSTER_TRACKED_ENTITY_UID = "hC0cUhQaiMj";
exports.DHIS_CLUSTER_PROGRAM_UID = "ffRkFje0rtR";




exports.trackedEntity = "MCPQUTHX1Ze";


exports.DE_AFI_CASE = "xYO8HkDDW3N";
exports.CLUSTER_DE_VILLAGE = "mEWZIvuQWwe";


exports.CLUSTER_TEA_LABCONFIRMED = "COPKdK3KzSP";
exports.CLUSTER_TEA_3AFICASE = "pm2TKuWJLbw";
exports.CLUSTER_TEA_5AFICASE = "nw49dd8Q0BQ";
exports.CLUSTER_TEA_2ADDCASE = "vPf6KTZUt2t";
exports.CLUSTER_TEA_IS_ACTIVE = "lXGaFLw5St7";
exports.CLUSTER_TEA_CLUSTERID = "VUljK1VMwYe";
exports.CLUSTER_TEA_CLUSTER_TYPE = "cQtvvB2qKTL";

exports.CLUSTER_TEA__CLUSTER_IDENTIFIER = "eDCvZdpPzQV";
exports.CLUSTER_TEA_COORDINATE = "ZPyPUuyn4ho";
exports.CLUSTER_TEA_FEATURETYPE = "xfWYADQF7xa";
exports.CLUSTER_PROGRAM = "ffRkFje0rtR";
exports.CLUSTER_PROGRAMSTAGE = "L5D7K2igT3Y";

exports.CLUSTER_DE_GROUP_DE_TO_SHOW = "PcJXrJvKvIi";
exports.CLUSTER_DE_CASE_TEI_UID = "BKGdfOa8PNn";

exports.LAB_DE_GROUP = "jFn5jAxuiDB";




exports.DHIS_Registration_Program = "sIEPsgABx0L";
exports.DHIS_Registration_ProgramStage = "jDDmmG7ZePy";
exports.DHIS_Registration_Village_DE = "mEWZIvuQWwe";
exports.DHIS_Registration_Origin_DE = "CPrDolo2qSh";
exports.DHIS_Registration_Syndrome_DE = "xYO8HkDDW3N";


