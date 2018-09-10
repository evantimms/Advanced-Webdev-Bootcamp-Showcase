function getFrequencies(str){
    let sorted = str.split("").sort();
    var data = [];
    for(let i = 0; i < sorted.length; ++i){
        let last = data[data.length - 1];
        if(last && last.character === sorted[i]) last.count++;
        else data.push({character: sorted[i], count: 1});
    }
    return data;
}

d3.select('#reset').on('click', function(){
    d3.selectAll('.letter').remove();
    d3.select('#phrase').text("");
    d3.select('#count').text("");
});

d3.select('form').on('submit', function(){
    //preventing page refresh
    d3.event.preventDefault();
    //getting frequencies
    word = d3.select('input').property('value');
    freqs = getFrequencies(word);

    //displaying word
    d3.select('#phrase').text(`Analysis of: ${word}`);
    
    let letters = d3.select('#letters')
                .selectAll('.letter')
                .data(freqs, function(d){
                    return d.character;
                });

    //removing any divs not new this time
    letters
        .classed('new', false)
        .exit()
        .remove();

    letters
        .enter()
        .append('div')
            .classed('new', true)
            .classed("letter", true)
        .merge(letters)
            .style("width", "20px")
            .style("line0height", "20px")
            .style("margin-right", "5px")
            .style("height", function(d){
                return d.count * 20 + "px";
            })
            .text(function(d){
                return d.character;
            });

    //clearing input
    d3.select('input').property('value', "");

    //updating count
    d3.select('#count').text("(New Characters: " + letters.enter().nodes().length + " )");
        
});