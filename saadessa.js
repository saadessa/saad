
function fillTable(result) {
                var table = document.getElementById(‘inbound_keywords’).tBodies[0];
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                    table.innerHTML += [‘<tr>’, ‘<td>’, data[i][0], ‘</td>’, ‘<td>’, data[i][1], ‘</td>’, ‘</tr>’].join(”);
                }
            }
           
            var script = document.createElement(‘script’);
            script.src = ‘https://api.tynt.com/publisher/v1/keyword/inbound?site_guid=dsatR-UL8r5OkGrkHcnnVW&api_key=6M7C6U7F7g4N7P6J7H4x3o6D4j3L6s7P&hours=24&callback=fillTable’;
            script.async = ‘async’;
            document.getElementsByTagName(‘head’)[0].appendChild(script);
document.write(document.referrer);




