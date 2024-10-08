let station = {
    name: '',
    maxCapacity: 0,
    currentTrains: 0
};


function initStation() {
    const stationName = document.getElementById("station").value;
    const stationCapacity = parseInt(document.getElementById("capacity").value);

    if (!stationName || isNaN(stationCapacity) || stationCapacity <= 0) {
        alert("Please enter a valid station name and capacity.");
        return false;
    }

    station.name = stationName;
    station.maxCapacity = stationCapacity;
    station.currentTrains = 0;  

    document.getElementById("trains").value = station.currentTrains;
    document.getElementById("result").innerHTML = `<p><strong>Station:</strong> ${station.name} | <strong>Capacity:</strong> ${station.maxCapacity} trains</p>`;
    return true;
}


function addTrain() {
    if (!initStation()) return;

    if (station.currentTrains < station.maxCapacity) {
        station.currentTrains++;
        document.getElementById("trains").value = station.currentTrains;
        document.getElementById("result").innerHTML = `<p>Train added to ${station.name}. Current trains: ${station.currentTrains}/${station.maxCapacity}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<p style="color:red;">Station capacity exceeded! Cannot add more trains.</p>`;
    }
    document.getElementById("station").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("trains").value = "";
}


function removeTrain() {
    if (!initStation()) return;

    if (station.currentTrains > 0) {
        station.currentTrains--;
        document.getElementById("trains").value = station.currentTrains;
        document.getElementById("result").innerHTML = `<p>Train removed from ${station.name}. Current trains: ${station.currentTrains}/${station.maxCapacity}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>No trains at the station to remove.</p>`;
    }
    document.getElementById("station").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("trains").value = "";
}