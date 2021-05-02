export default class {
    logWithColor(msg:string, color:string){
        console.log(`%c${msg}`, `color:${color};`);
    }
}