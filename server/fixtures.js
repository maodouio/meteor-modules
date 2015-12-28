// ***************************************************************
// FIXTURES (generate data for the Modules collection)
// ***************************************************************

Meteor.startup(function () {
    var findIcon = Modules.findOne({icon: "icon-c-temperature"});
    if (!findIcon) {
        Modules.remove({});
    }

    if (Modules.find().count() === 0) {
        ReactionCore.Log.info('Importing module data to collection modules ...');
        var moduleList = [
            {icon: 'icon-c-core', title: 'Core', favorite: [null], favcount: 0},
            {icon: 'icon-c-core-plus', title: 'Core+', favorite: [null], favcount: 0},
            {icon: 'icon-c-usb-ttl', title: 'USBTTL', favorite: [null], favcount: 0},
            {icon: 'icon-c-usb-core', title: 'Core USB', favorite: [null], favcount: 0},
            {icon: 'icon-c-usb-host', title: 'USBHost', favorite: [null], favcount: 0},
            {icon: 'icon-c-wifi', title: 'WIFI', favorite: [null], favcount: 0},
            {icon: 'icon-c-2dot4g', title: '2.4G', favorite: [null], favcount: 0},
            {icon: 'icon-c-zig-bee', title: 'Zig Bee', favorite: [null], favcount: 0},
            {icon: 'icon-c-nfc', title: 'NFC', favorite: [null], favcount: 0},
            {icon: 'icon-c-wiz', title: 'WIZ', favorite: [null], favcount: 0},
            {icon: 'icon-c-enc', title: 'ENC', favorite: [null], favcount: 0},
            {icon: 'icon-c-rs485', title: 'RS485', favorite: [null], favcount: 0},
            {icon: 'icon-c-usb-ttl2', title: 'USBTTL', favorite: [null], favcount: 0},
            {icon: 'icon-c-gsm-gprs', title: 'GSM/GPRS', favorite: [null], favcount: 0},
            {icon: 'icon-c-bluetooth', title: 'Bluetooth', favorite: [null], favcount: 0},
            {icon: 'icon-c-battery', title: 'Battery', favorite: [null], favcount: 0},
            {icon: 'icon-c-gps', title: 'GPS', favorite: [null], favcount: 0},
            {icon: 'icon-c-crash', title: 'Crash', favorite: [null], favcount: 0},
            {icon: 'icon-c-tft-screen', title: 'TFT Screen', favorite: [null], favcount: 0},
            {icon: 'icon-c-oled-screen', title: 'OLED Screen', favorite: [null], favcount: 0},
            {icon: 'icon-c-10dof', title: '10DOF', favorite: [null], favcount: 0},
            {icon: 'icon-c-rtc', title: 'RTC', favorite: [null], favcount: 0},
            {icon: 'icon-c-micro-sd', title: 'MicroSD', favorite: [null], favcount: 0},
            {icon: 'icon-c-amplifier', title: 'Amplifier', favorite: [null], favcount: 0},
            {icon: 'icon-c-temperature', title: 'Temperature', favorite: [null], favcount: 0},
            {icon: 'icon-c-plush', title: 'Plush', favorite: [null], favcount: 0},
            {icon: 'icon-c-lightness', title: 'Lightness', favorite: [null], favcount: 0},
            {icon: 'icon-c-motor', title: 'Motor', favorite: [null], favcount: 0},
            {icon: 'icon-c-stepper', title: 'Stepper', favorite: [null], favcount: 0},
            {icon: 'icon-c-led', title: 'LED', favorite: [null], favcount: 0},
            {icon: 'icon-c-gray', title: 'Gray', favorite: [null], favcount: 0},
            {icon: 'icon-c-ir-receiver', title: 'IR Receiver', favorite: [null], favcount: 0},
            {icon: 'icon-c-ir-sensor', title: 'IR Sensor', favorite: [null], favcount: 0},
            {icon: 'icon-c-pir', title: 'PIR', favorite: [null], favcount: 0},
            {icon: 'icon-c-color-led', title: 'Color LED', favorite: [null], favcount: 0}
        ];

        _.map(moduleList, function (item) {
            Modules.insert(item);
        });
    }
});
