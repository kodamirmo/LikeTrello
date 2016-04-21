Template.card.events({
	
	'click .btnAction' :  function  (e) {
		var id = $(e.target).closest('.card').data('id');
		console.log(id, this);
		Cards.update({_id:id},{$set:{toDo:!this.toDo}});
	} ,

	'click .btnRemove' :  function  (e) {
		var id = $(e.target).closest('.card').data('id');
		console.log(id, this);
		Cards.remove({_id:id});
	} ,	

});


Template.card.helpers({
	
	buttonText :  function() {
		return this.toDo?'Done':'To do';
	}

});