// Add button to remove all notes
// Add preview when typing new note
// Add Im feeling lucky button 
// that randomly changes font size of notes



d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .classed('preview' false)
          .text(input.property('value'));
      input.property('value', '');
    });

d3.select("#remove")
	.on('click', function(){
		d3.selectAll('.note').remove();
	});

d3.select('input')
	.on('keypress', function(){
		d3.select('#notes')
			.append('p')
				.classed('preview', true)
				.text(input.property('value'));
	});