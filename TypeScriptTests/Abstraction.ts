import { DatabaseConnection } from "./interface";

export abstract class MySqlConnection implements DatabaseConnection {
    connect(): void {
    }
    disconnect(): void {
    }
    executeUpdate(): void {
    }
    executeQuery():void{

        console.log("Execute SQL")
    }
    


}

class PlaywrightConnection extends MySqlConnection{


    connect(): void {
        console.log("connect SQL")
    }
    disconnect(): void {
        console.log("Disconnect SQL")
    }
    executeUpdate(): void {
        console.log("update SQL")
    }
    executeQuery():void{

        console.log("Execute SQL")
    }
    

}


function testrun2(){

new PlaywrightConnection().connect()
new PlaywrightConnection().executeUpdate()
new PlaywrightConnection().executeQuery()
new PlaywrightConnection().disconnect()

}

testrun2()