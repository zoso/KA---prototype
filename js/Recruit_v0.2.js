var Recruit = {
    container: 'jobs',
    init: function (data) {

        var cont = document.getElementById(this.container);
        
        var tab = '<table width="100%" cellspacing="0" cellpadding="0" border="0">';
        tab += '<thead><tr><td>Position title</td>';
        tab += '<td>Department</td>';
        tab += '<td>Location</td>';
        tab += '<td>Closing date</td></tr></thead>';
        for (var i = 0; i < data.Positions.length; i++) {
            tab += '<tr>';
            tab += '<td><a href="' + data.Positions[i].Url + '">' + data.Positions[i].Title + '</a></td>';
            tab += '<td>' + data.Positions[i].Department + '</td>';
            tab += '<td>' + data.Positions[i].Location + '</td>';
            tab += '<td>' + data.Positions[i].ClosingDate + '</td>';
            tab += "</tr>";
        }
        tab += "</table>";
       cont.innerHTML = tab;
    }
};