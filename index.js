var formData = {
	"id": 1,
	"agent_id": "1",
	"reg_id": null,
	"nsdl_ack_no": null,
	"ack_no": "ACK01",
	"type": "NEW",
	"category": "",
	"lastname": "PUJAR",                    //
	"firstname": "GOURISHANKAR",            //
	"middlename": "RAMACHANDRAPPA",         //
	"father_lastname": "PUJAR",             //
	"father_firstname": "RAMACHANDRAPPA",   //
	"father_middlename": "FAKKIRAPPA",      //
	"name_on_card": "GOURISHANKAR R PUJAR", 
	"date_of_birth": "19-07-1991",
	"gender": "Male",
	"isd_code": null,
	"std_code": null,
	"phone": "9844350994",
	"email_id": "gourish.7@gmail.com",
	"address_for_communication": "RANEBENNUR",
	"pan_card_dispatched_state": "KARNATAKA",
	"aadhaarno": "999999999",
	"name_as_per_aadhar": "GOURISHANKAR R PUJAR",   //
	"flat": "10",
	"premises": "Building",
	"lane": "Nagar",
	"area": "Nagar",
	"town": "BENGALURU",
	"state": "KARNATAKA",
	"pincode": "560010",
	"p_o_I_individual": "1",
	"p_o_a_individual": "1",
	"p_o_dob_individual_Hindu_Undivided_Family": "1",
	"areacode": "EEE",      //
	"aotype": "E",          //
	"rangecode": "29",      //
	"aono": "9",            //
	"remarks": null,
	"status": "1",
	"nsdl_receipt": null,
	"upload_document": null,
	"nameChange": null,
	"dobChange": null,
	"genderChange": null,
	"fathernameChange": null,
	"mobileemailChange": null,
	"addressChange": null,
	"photomismatch": null,
	"signmatch": null,
	"reprint": null,
	"created_at": null,
	"updated_at": null
}

var fillData = convertData(formData);

function convertData(data) {
    var returnData = new Object;
    returnData['Area codeRow1'] = data.areacode[0];
    returnData['Area codeRow1_2'] = data.areacode[1];
    returnData['Area codeRow1_3'] = data.areacode[2];

    returnData['AO typeRow1'] = data.aotype[0];
    returnData['AO typeRow1_2'] = data.aotype[1];
    
    returnData['Range codeRow1'] = data.rangecode[0];
    returnData['Range codeRow1_2'] = data.rangecode[1];
    returnData['Range codeRow1_3'] = data.rangecode[2];

    returnData['AO NoRow1'] = data.aono[0];
    returnData['AO NoRow1_2'] = data.aono[1];

    returnData['Month'] = data.date_of_birth.split('-')[1];
    returnData['Year'] = data.date_of_birth.split('-')[2];

    returnData['Pincode  Zip code'] = data.pincode;
    
    returnData['Name as per AADHAAR letter or card or as per the Enrolment ID of Aadhaar application form'] = data.name_as_per_aadhar;
    
    returnData['MiddleName'] = data.middlename;
    returnData['FirstName'] = data.firstname;
    returnData['LastNameSurname'] = data.lastname;

    returnData['FATHERLASTNAME'] = data.father_lastname;
    returnData['FATHERFIRSTNAME'] = data.father_firstname;
    returnData['FATHERMIDDLENAME'] = data.father_middlename;

    
    return returnData;
}

// var fillData = {
// 	// 	Varibale Name		:	Value				Description
// 	'Area codeRow1': 'K', // 	Area Code 1
// 	'Area codeRow1_2': 'A', // 	Area Code 2
// 	'Area codeRow1_3': 'R', //	Area Code 3
// 	'AO typeRow1': 'W', //	AO Type 1
// 	'AO NoRow1': '5', //	AO No. 1
// 	'SMT': true, //  Smt Title
// 	'LastNameSurname': 'RAJENDRA' // Last name / Sur name
// }