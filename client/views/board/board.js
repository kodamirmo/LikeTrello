Template.board.helpers({
	

	toDoCards : function() {
		return Cards.find({toDo:true});
	},

	doneCards : function() {
		return Cards.find({toDo:false});
	}

});