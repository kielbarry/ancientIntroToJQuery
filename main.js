'use strict'

$(document).ready(init);

var inputVal = $('#numCups').val();

function init(){
	console.log('ready');
	$('.holder').on('click','.cup',clickCup);
	$('#addCup').on('click', addCup);
	$('.wrapper').on('click','.cup', detachAndAdd);
}

function clickCup(){

	console.log('cup clicked!');
}

function addCup(){
	var inputVal = $('#numCups').val();
	var $cups = [];

	for (var i = 0; i < inputVal; i++){
		var c1 = Math.floor(Math.random()*255);
		var c2 = Math.floor(Math.random()*255);
		var c3 = Math.floor(Math.random()*255);
		var $cup = $('<div>').addClass('cup');
		$cup.css('background','rgb('+c1+','+c2+','+c3+')');
		$cup.attr('id',i+4);

		$cups.push($cup);
	}
	$('#left').append($cups);
}

function detachAndAdd () {

	if ($(this).parent().attr('id') === 'left')
	{
		var $detached = $(this).detach();
		$('#right').append($detached);
	}
	else {
			var $detached = $(this).detach();
		$('#left').append($detached);
	}
}









