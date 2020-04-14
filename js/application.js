var data;
var celebrationsTable = '';
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (this.readyState == 4) {
        data = (JSON.parse(this.responseText)).celebrations;
        data.forEach(function (e, i) {
            celebrationsTable += "<tr>" + "<td>" + e.title + "</td>" +
                "<td>" + e.colour + "</td>" +
                "<td>" + e.rank + "</td>" +
                "<td>" + e.rank_num + "</td>" + "</tr>";
        });

        document.getElementById("celebrations").innerHTML = celebrationsTable;
        document.getElementById("date").innerHTML = (JSON.parse(this.responseText)).date;
        document.getElementById("season").innerHTML = (JSON.parse(this.responseText)).season;
        document.getElementById("season_week").innerHTML = (JSON.parse(this.responseText)).season_week;
        document.getElementById("weekday").innerHTML = (JSON.parse(this.responseText)).weekday;
        console.log(JSON.parse(this.responseText));
        console.log(this.status)
    }
};

ajax.open("GET", "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today", true);
ajax.send();