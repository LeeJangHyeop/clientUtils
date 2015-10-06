/*
 *  json2csv v1.0.0
 *  powerfirebat@gmail.com
 */

function json2CSV(json, title, fields) {
    var arrData = typeof json != 'object' ? JSON.parse(json) : json;

    var CSV = '';

    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        for (var j=0;j<fields.length;j++) {
            row += '"' + arrData[i][fields[j]] + '",';
        }

        row.slice(0, row.length - 1);

        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    fileName = title.replace(/ /g,"_");

    var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSV);

    var link = document.createElement("a");
    link.href = uri;

    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
