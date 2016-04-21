Template.newCard.events({


	'click .save' : function (e) {
		
		var data = {
			toDo  : true,
			title : $('#title').val(),
			text  : $('#text').val(),
		};

		console.log(data);
		Cards.insert(data);

		//Clear all values
		$('#title').val('');
		$('#text').val('');

	}

});