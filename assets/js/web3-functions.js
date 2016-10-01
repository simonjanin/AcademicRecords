function verifyDiploma(){
	$("#result-details").text("");
	// get university ID
	var uniID = Number($("#university-id").val());
	uniID = $.inArray(uniID, uni);
	if (uniID >= 0){ // if university ID known continue
		var diplomaID = Number($("#diploma-id").val()); // get diploma ID
		diplomaID = $.inArray(diplomaID, diploma[uniID]);
		if (diplomaID >= 0){
			var str = "\nUniversity: " + university_names[uniID];
			str += "\nName: " + names[Math.floor(Math.random() * 7) + 0  ];
			str += "\nDate: " + date[Math.floor(Math.random() * 7) + 0  ];
			$("#result-verification").text("Diploma is verfied.");
			$("#result-details").text(str);
			$("#verify").css("background-color", "#16a085");
		} else {
			$("#result-verification").text("Diploma is unknown. Please check if you entered the correct Diploma ID. May contact the university for verfication.");
			$("#verify").css("background-color", "red");
		}
	} else { // raise error if not working
		$("#result-verification").text("University is unknown. Please check if you entered the correct University ID.");
		$("#verify").css("background-color", "red");
	}
};


var diploma = [[1, 2], [3, 4], [5, 6], [7, 8]];
var uni = [1, 2, 3, 4];

var university_names = ["Universität Konstanz", "ETH Zürich", "TU München", "RWTH Aachen"];
var names = ["John Doe", "Jean Doe", "John Smith", "JoJo Wash", "Freddy Dolly", "Francine French", "Jan Ten", "Chicken Wings"];
var date = ["20.05.1993", "03.06.2005", "09.12.2013", "06.04.1996", "20.06.1912", "03.06.2002", "09.12.2003", "06.04.1909"];
