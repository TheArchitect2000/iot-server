import {
  Injectable,
  Controller,
  Get,
  Inject,
  Param,
  OnModuleInit,
} from '@nestjs/common';
// import { Aedes } from 'aedes';
// import * as Aedes from 'aedes';
const aedes = require('aedes')();
import { log } from 'console';
import * as fs from 'fs';
//import * as https from 'https';
import https from 'https'
import axios, { isCancel, AxiosError ,AxiosRequestConfig } from 'axios';
import { MqttLogService } from './mqtt-log.service';
import { ActivityService } from 'src/modules/panel/services/activity.service';
import { DeviceEventsEnum } from '../enums/device-events.enum';
import { ErrorTypeEnum } from 'src/modules/utility/enums/error-type.enum';
import { GereralException } from 'src/modules/utility/exceptions/general.exception';
import { DeviceLogService } from 'src/modules/device/services/device-log.service';
import { ServiceHandlerService } from 'src/modules/virtual-machine/services/service-handler.service';
import { ModuleRef } from '@nestjs/core';


@Injectable()
export class MqttService implements OnModuleInit {
  @Inject(ServiceHandlerService)
  private serviceHandlerService?: ServiceHandlerService;

  constructor(){}

  async onModuleInit() {
    console.log('Initialization of MqttService...');
    console.log('this.serviceHandlerService: ', this.serviceHandlerService);
    await this.brokerStart(this.serviceHandlerService);
  }

  async brokerStart(serviceHandler) {
    const mqttPorts = {
      mqtt: 1883, // TCP Port: 1883
      mqtts: 8883, // SSL/TLS Port: 8883
      ws: 8080,
      wss: 8081,
    };

    const host = 'https://' + process.env.HOST_NAME_OR_IP;

    const options = {
      key: fs.readFileSync('assets/certificates/webprivate.pem'),
      cert: fs.readFileSync('assets/certificates/webpublic.pem'),
    };
    const server = require('tls').createServer(options, aedes.handle);
    //const server = require('tls').createServer(aedes.handle);
    server.listen(mqttPorts.mqtts, function () {
      console.log(
        '\nMQTT server over TLS / MQTTS started and listening on port',
        mqttPorts.mqtts,
        '\n',
      );
      aedes.mq.emit({
        topic: 'aedes/hello',
        payload: "I'm broker " + aedes.id,
        qos: 0,
      });
    });
    // MQTT over TCP
    /* const server = require('net').createServer(aedes.handle);
        server.listen(mqttPorts.mqtt, function () {
        console.log('MQTT Broker started on port', mqttPorts.mqtt, '\n');
        aedes.mq.emit({
            topic: "aedes/hello",
            payload: "I'm broker " + aedes.id,
            qos: 0
        });
        }); */

    aedes.mq.on('aedes/hello', (d, cb) => {
      console.log(d, '\n');
      cb();
    });

    aedes.on('subscribe', async function (subscriptions, client) {
      console.log(
        'MQTT client \x1b[32m' +
          (client ? client.id : client) +
          '\x1b[0m subscribed to topics: ' +
          subscriptions.map((s) => s.topic).join('\n'),
        'from broker',
        aedes.id,
      );
      console.log('this.serviceHandlerService: ', this.serviceHandlerService);
      console.log('serviceHandler: ', serviceHandler);
      // await this.serviceHandlerService.runInstalledService(client.id);
      // await serviceHandler.runInstalledService(client.id);
      // await serviceHandler.runInstalledService('MzQ6QjQ6NzI6NEE6RUY6MDg=');
    });

    aedes.on('unsubscribe', function (subscriptions, client) {
      console.log(
        'MQTT client \x1b[32m' +
          (client ? client.id : client) +
          '\x1b[0m unsubscribed to topics: ' +
          subscriptions.join('\n'),
        'from broker',
        aedes.id,
      );
    });

    // fired when a client connects
    aedes.on('client', async function (client) {
      console.log(
        'Client Connected: \x1b[33m' +
          (client ? client.id : client) +
          '\x1b[0m',
        'to broker',
        aedes.id,
      );

      /* if (client) {
                // await this.mqttLogService.logDeviceConnection(client.id, DeviceEventsEnum.CONNECTED)
                // this.activityService.getDeviceActivityByEncryptedDeviceIdAndFieldName("QTA6NzY6NEU6NTc6MkI6NDg=", "Temperature")
                await this.saveDeviceEvent(client.id, DeviceEventsEnum.CONNECTED);
            } */

      // axios.get('http://programming.cpvanda.com/app/v1/broker-mqtt-log/log-event')
      // axios.get(host + '/app/v1/broker-mqtt-log/log-event')


    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
//const httpsAgent = new https.Agent({ rejectUnauthorized: false });
      axios
        .post(host + '/app/v1/broker-mqtt-log/log-device-event', {
          deviceEncryptedId: client.id,
          event: DeviceEventsEnum.CONNECTED,
        })
          
        .then(function (response) {
          // handle success
           console.log(response);
        })
        .catch(function (error) {
          // handle error
           console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });

    //   aedes.on("client", await this.saveDeviceEvent);

    // fired when a client disconnects
    aedes.on('clientDisconnect', function (client) {
      console.log(
        'Client Disconnected: \x1b[31m' +
          (client ? client.id : client) +
          '\x1b[0m',
        'to broker',
        aedes.id,
      );

      axios
        .post(host + '/app/v1/broker-mqtt-log/log-device-event', {
          deviceEncryptedId: client.id,
          event: DeviceEventsEnum.DISCONNECTED,
        })
        .then(function (response) {
          // handle success
          // console.log(response);
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });

    aedes.on('clientError', function (client, err) {
      console.log('client error', client.id, err.message, err.stack);

      axios
        .post(host + '/app/v1/broker-mqtt-log/log-device-event', {
          deviceEncryptedId: client.id,
          event: DeviceEventsEnum.CLIENTERROR,
        })
        .then(function (response) {
          // handle success
          // console.log(response);
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });

    aedes.on('connectionError', function (client, err) {
      console.log('connection error', client, err.message, err.stack);

      axios
        .post(host + '/app/v1/broker-mqtt-log/log-device-event', {
          deviceEncryptedId: client.id,
          event: DeviceEventsEnum.CONNECTIONERROR,
        })
        .then(function (response) {
          // handle success
          // console.log(response);
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });

    aedes.on('publish', async function (packet, client) {
      console.log('Published packet: ', packet);

      console.log('Published packet payload: ', packet.payload.toString());

      if (packet && packet.payload) {
        console.log('publish packet:', packet.payload.toString());
      }
      if (client) {
        console.log('message from client', client.id);

        let payload = packet.payload.toString();
        if (payload.includes('from')) {
          let parsedPayload;
          try {
            parsedPayload = JSON.parse(payload);
          } catch (e) {
            console.error(e);
            // Return a default object, or null based on use case.
            return {};
          }

          // let parsedPayload = JSON.parse(payload);

          axios
            .post(host + '/app/v1/broker-mqtt-log/log-device-data', {
              deviceEncryptedId: parsedPayload.from,
              event: DeviceEventsEnum.PUBLISHED,
              data: parsedPayload.data,
              senderDeviceEncryptedId: client.id,
            })
            .then(function (response) {
              // handle success
              // console.log(response);
            })
            .catch(function (error) {
              // handle error
              // console.log(error);
            })
            .finally(function () {
              // always executed
            });

          if (client.id !== parsedPayload.from) {
            console.log(
              '\x1b[33m \nWe are trying to republish node data... \x1b[0m',
            );
            /* aedes.publish(
                            {
                            //   cmd: 'publish',
                            //   qos: 0,
                            //   retain: false,
                              topic: parsedPayload.from,
                              payload: Buffer.from(parsedPayload.toString())
                            }
                        ) */

            aedes.publish({
              topic: parsedPayload.from,
              payload: payload,
            });

            // await this.manageInstalledService(parsedPayload.from)
            // this.serviceHandlerService.runInstalledService(parsedPayload.from);
            /* await serviceHandler.runInstalledService(
              parsedPayload.from,
              parsedPayload,
            ); */
          } else {
            // await this.manageInstalledService(client.id)
            // this.serviceHandlerService.runInstalledService(client.id);
            /* await serviceHandler.runInstalledService(client.id, parsedPayload); */
          }
        }
      }
    });

    aedes.on('subscribe', function (subscriptions, client) {
      if (client) {
        console.log('subscribe from client', subscriptions, client.id);
        /* console.log("subscribe from client", subscriptions, client.id, client._parser.settings.password);
                var password = client._parser.settings.password;
                password = Buffer.from(password, 'base64').toString();
                console.log('password is: ', password); */
      }

      axios
        .post(host + '/app/v1/broker-mqtt-log/log-device-event', {
          deviceEncryptedId: client.id,
          event: DeviceEventsEnum.SUBSCRIBED,
        })
        .then(function (response) {
          // handle success
          // console.log(response);
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });
  }
}
