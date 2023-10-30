const originalSend = XMLHttpRequest.prototype.send
let stations = []
XMLHttpRequest.prototype.send = function (data) {
this.addEventListener('load', function () {
const stats = (JSON.parse(this.responseText))

        stations.push(...stats)

        stations = stations.filter(function (item, pos) {
            return stations.indexOf(item) == pos
        })

        console.log(stations.length)
    })

    originalSend.apply(this, arguments)

}

/\_
plug follow
socket park
pluging park
e station hub
charge process
charge kolik

Charging Connected// sarj edildi
charge connected //şarj bağlı
priz volt
volt station
Charging Bridge
electra plug
flexible charge// esnek sarj, esnek ücret
charge flow hub
charge station hub

PowerLaden // almanca güç yüklü demek

priz finder
Power Stations App

charge locator hub//şarj bulma merkezi
e-charging hub

e-plug hub

e-charge locator

chargesavar

socketinfo
e charger plus
plugup chain
\_/
