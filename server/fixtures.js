// ***************************************************************
// FIXTURES (generate data for the Modules collection)
// ***************************************************************

Meteor.startup(function () {
  if (Modules.find().count() === 0) {
    Modules.insert({icon: 'icon-c-core', title: 'Core'});
    Modules.insert({icon: 'icon-c-core-plus', title: 'Core+'});
    Modules.insert({icon: 'icon-c-usb-ttl', title: 'USBTTL'});
    Modules.insert({icon: 'icon-c-usb-core', title: 'Core USB'});
    Modules.insert({icon: 'icon-c-usb-host', title: 'USBHost'});
    Modules.insert({icon: 'icon-c-wifi', title: 'WIFI'});
    Modules.insert({icon: 'icon-c-2dot4g', title: '2.4G'});
    Modules.insert({icon: 'icon-c-zig-bee', title: 'Zig Bee'});
    Modules.insert({icon: 'icon-c-nfc', title: 'NFC'});
    Modules.insert({icon: 'icon-c-wiz', title: 'WIZ'});
    Modules.insert({icon: 'icon-c-enc', title: 'ENC'});
    Modules.insert({icon: 'icon-c-rs485', title: 'RS485'});
    Modules.insert({icon: 'icon-c-usb-ttl2', title: 'USBTTL'});
    Modules.insert({icon: 'icon-c-gsm-gprs', title: 'GSM/GPRS'});
    Modules.insert({icon: 'icon-c-bluetooth', title: 'Bluetooth'});
    Modules.insert({icon: 'icon-c-battery', title: 'Battery'});
    Modules.insert({icon: 'icon-c-gps', title: 'GPS'});
    Modules.insert({icon: 'icon-c-crash', title: 'Crash'});
    Modules.insert({icon: 'icon-c-tft-screen', title: 'TFT Screen'});
    Modules.insert({icon: 'icon-c-oled-screen', title: 'OLED Screen'});
    Modules.insert({icon: 'icon-c-10dof', title: '10DOF'});
    Modules.insert({icon: 'icon-c-rtc', title: 'RTC'});
    Modules.insert({icon: 'icon-c-micro-sd', title: 'MicroSD'});
    Modules.insert({icon: 'icon-c-amplifier', title: 'Amplifier'});
    Modules.insert({icon: 'icon-c-temperture', title: 'Temperture'});
    Modules.insert({icon: 'icon-c-plush', title: 'Plush'});
    Modules.insert({icon: 'icon-c-lightness', title: 'Lightness'});
    Modules.insert({icon: 'icon-c-motor', title: 'Motor'});
    Modules.insert({icon: 'icon-c-stepper', title: 'Stepper'});
    Modules.insert({icon: 'icon-c-led', title: 'LED'});
    Modules.insert({icon: 'icon-c-gray', title: 'Gray'});
    Modules.insert({icon: 'icon-c-ir-receiver', title: 'IR Receiver'});
    Modules.insert({icon: 'icon-c-ir-sensor', title: 'IR Sensor'});
    Modules.insert({icon: 'icon-c-pir', title: 'PIR'});
    Modules.insert({icon: 'icon-c-color-led', title: 'Color LED'});
  }
});
