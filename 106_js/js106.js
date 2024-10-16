function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    'Do you agree?',
    function() { console.log("I'm agree with you ?"); },
    function() { console.log("whyyyyyyyy !"); }
);
