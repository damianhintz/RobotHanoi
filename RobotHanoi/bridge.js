// Stałe dotyczące typów wiadomości, które są zdefiniowane w API samej okładki. 
// Okładka sama poinformuje nas o obsługiwanych typach wiadomości.
// Natomiast by to zrobiła, musimy najpierw się z nią połączyć,
// dlatego też te dwa pierwsze typy definiujemy sami.
var CONNECT = 0x0;
var CONNECTED = 0x0;
// Pod tą zmienną przypiszemy obiekt, który będzie 
// zawierał listę obsługiwanych wiadomości.
var supported;
// Nasłuchujemy na zdarzenie załadowania dokumentu.
var iframe = document.getElementById('cover');
iframe.addEventListener('load', onLoad);
function onLoad() {
    // Tworzymy kanał komunikacji
    var channel = new MessageChannel();
    // My będziemy nasłuchiwać na porcie 1 w oczekiwaniu 
    // na wiadomości z portu 2, który zostanie przesłany
    // do dokumentu zawierającego okładkę.
    channel.port1.onmessage = onPortMessage;
    // Z pierwszą wiadomością wysyłamy port. Robimy to tylko raz. 
    // Od tej pory będziemy mogli wysyłać wiadomości w obu kierunkach.
    sendMessage(CONNECT, null, channel.port2)
}

function sendMessage(messageType, messageBody, port) {
    if (typeof messageType === 'undefined') {
        throw new Error('Message type is required');
    }
    var message = buildMessage(messageType, messageBody);
    iframe.contentWindow.postMessage(message, '*', port ? [port] : undefined);
}

function onPortMessage(e) {
    var message = parseMessage(e.data);
    if (message.type === CONNECTED) {
        supported = message.body;
        sendMessage(supported.commands.ACTIVATE);
    }
    if (message.type === supported.reactions.ACTIVATED) {
        moveTheBody();
    }
}

// Tworzy wiadomość w formacie JSON
function buildMessage(messageType, messageBody) {
    if (typeof messageType === 'undefined') {
        throw new Error('Message type is required');
    }
    if (typeof messageBody === 'undefined') {
        messageBody = null;
    }
    var message = {};
    message.type = messageType;
    message.body = messageBody;
    return JSON.stringify(message);
}

// Parsuje wiadomość JSON
function parseMessage(rawMessage) {
    var message;
    try {
        message = JSON.parse(rawMessage);
    } catch (e) {
        message = null;
    }
    return message;
}

function moveTheBody() {
    //setInterval(function () {
    //    sendMessage(supported.commands.HAND, {
    //        bodyPart: 'rightHand'
    //    });
    //}, 1000);
    for (i = 1; i < 80; i++) {
        sendMessage(supported.commands.MOVE, {
            bodyPart: 'rightForearm',
            value: 1
        });
    }
    for (i = 1; i < 25; i++) {
        sendMessage(supported.commands.MOVE, {
            bodyPart: 'rightArm',
            value: -1
        });
    }
    for (i = 1; i < 20; i++) {
        sendMessage(supported.commands.HAND, {
            bodyPart: 'rightHand',
            value: 1
        });
    }
    //setInterval(function () {
    //    sendMessage(supported.commands.HAND, {
    //        bodyPart: 'leftHand'
    //    });
    //}, 1000);
    //setInterval(function () {
    //    sendMessage(supported.commands.MOVE, {
    //        bodyPart: 'leftArm',
    //        value: 1
    //    });
    //}, 50);
    setInterval(function () {
        sendMessage(supported.commands.MOVE, {
            bodyPart: 'leftForearm',
            value: -10
        });
    }, 1000);
    //setInterval(function () {
    //    sendMessage(supported.commands.MOVE, {
    //        bodyPart: 'leftHand',
    //        value: -1
    //    });
    //}, 50);
}