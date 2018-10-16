
	//  STILL WORK IN PROGRESS - SEE COMMENTS FOR AREAS THAT STILL NEED TO BE COMPLETED!!!!!!!!!!!!!
	 

    $(document).ready(function() {

	// Here we create variables for tracking the number of points each character/player starts of with

		var OwkCounter = 120;
		var LsCounter = 180;
		var DsCounter = 150;
		var DmCounter = 180;

		var letterBtn = "";
		
		var OBKButton = $(".btn-characterOBK");
		var LSButton = $(".btn-characterLS");
		var DSButton = $(".btn-characterDS");
		var DMButton = $(".btn-characterDM");

      $(".btn-characterOBK").on("click", function() {
		
		$("#YourCharacter").append(OBKButton);
		$("#Enemies").append(LSButton);
		$("#Enemies").append(DSButton);
		$("#Enemies").append(DMButton);
            	  
		alert("You chose Obi-Wan Kenobi!");
		OwkCounter--;
		alert("Obi-Wan Kenobi has" + " " + OwkCounter + " " + "HP left over");

		// Outstanding: Need to still add the logic for OBK's Health Points, Attack Points  and Counter Attack Power
		// 				Need to get rid of alerts and add the name of character and HP inside the button
						// Need to still add on click function when user clicks on the "Attack" button
		// 				Need to still add the function to move enemies to the defender area 
		// //				Need to still add HTML text to update the user number of damages for OBK
						// Need to still add HTML text to update the user number of damages for enemies LS, DS, DM
						
						
	  });
	  

	  $(".btn-characterLS").on("click", function() {
		$("#YourCharacter").append(LSButton);
		$("#Enemies").append(OBKButton);
		$("#Enemies").append(DSButton);
		$("#Enemies").append(DMButton);

		alert("You chose Luke Skywalker!");
		Lsounter--;
		alert("Luke Skywalker has" + " " + LsCounter + " " +"HP left over");

		// Outstanding: Need to still add the logic for LS's Health Points, Attack Points  and Counter Attack Power
		// 				Need to get rid of alerts and add the name of character and HP inside the button
						// Need to still add on click function when user clicks on the "Attack" button
		// 				Need to still add the function to move enemies to the defender area 
		//				Need to still add HTML text to update the user number of damages for LS
						// Need to still add HTML text to update the user number of damages for enemies OBK, DS, DM
						
	 
	  });
	  
	  $(".btn-characterDS").on("click", function() {
		$("#YourCharacter").append(DSButton);
		$("#Enemies").append(OBKButton);
		$("#Enemies").append(LSButton);
		$("#Enemies").append(DMButton);

		alert("You chose Darth Sidious!");
		DsCounter--;
		alert("Darth Sidious has" + " " + DsCounter + " " + "HP left over");

		// Outstanding: Need to still add the logic for DS's Health Points, Attack Points  and Counter Attack Power
		//				Need to get rid of alerts and add the name of character and HP inside the button
						// Need to still add on click function when user clicks on the "Attack" button
		// 				Need to still add the function to move enemies to the defender area 
						// Need to still add HTML text to update the user number of damages for DS
						// Need to still add HTML text to update the user number of damages for enemies OBK, LS, DM
	 
	  });
	  
	  $(".btn-characterDM").on("click", function() {
		$("#YourCharacter").append(DMButton);
		$("#Enemies").append(OBKButton);
		$("#Enemies").append(LSButton);
		$("#Enemies").append(DSButton);

		alert("You chose Darth Maul!");
		DmCounter--;
		alert("Darth Maul has" + " " + DmCounter + " " + "HP left over");
		
		// Outstanding: Need to still add the logic for DM's Health Points, Attack Points  and Counter Attack Power
						// Need to get rid of alerts and add the name of character and HP inside the button
		// 				Need to still add on click function when user clicks on the "Attack" button
// 						Need to still add the function to move enemies to the defender area 
		//				Need to still add HTML text to update the user number of damages for DM
						// Need to still add HTML text to update the user number of damages for enemies OBK, LS, DS
      });

	});
	
	// Outstanding: Need to still add logic "Restart" button to be displayed whenever user has finsihed attacking all enemies
					// Need to still add the function to restart the game when user clicks on teh "Restart" button
					// Need to still add the function to reset the characters' Health Points, Attack Power and Counter Attack Power
					// Need to finish styling the game to make it pretty and fun	

      