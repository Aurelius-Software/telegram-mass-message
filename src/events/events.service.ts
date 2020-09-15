import { Injectable } from "@nestjs/common";

@Injectable()
export class EventService{
    sendMessage(msg:string){
        var TelegrafBot = require('Telegraf');
        var token= '1398391810:AAHZ4-m9cldolSa_OY-QQ9Vtg2drsQ_i2Yo';
        var bot = new TelegrafBot(token, );
    
        bot.telegram.sendMessage("@testblahblahblah1", msg)
    }
}