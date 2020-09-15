import { Controller, Post, Body, Get, Param, Patch , Delete} from '@nestjs/common';
import { EventService } from './events.service';

@Controller('event')
export class EventController{
    constructor(private eventService: EventService){
        
    }

@Post()
sendMessage(@Body('message') msg: string){
    this.eventService.sendMessage(msg);
    return null;
}
    
  
};