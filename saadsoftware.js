function fillTable(result) {
                var table = document.getElementById("inbound_keywords").tBodies[0];
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                 table.innerHTML += ["<tr>", "<td>", data[i][0], "</td>", "<td>", data[i][1], "</td>", "</tr>"].join(',');   
                }
            }
           
            var script = document.createElement("script");
            script.src = "https://api.tynt.com/publisher/v1/keyword/inbound?site_guid=dbGp-cRHWr5699aKkv7mNO&api_key=7g4L6P65914q3M3v4J7K6q7r7B7z6k4P&hours=24&callback=fillTable";
            script.async = "async";
            document.getElementsByTagName("head")[0].appendChild(script);
document.write(document.referrer);
