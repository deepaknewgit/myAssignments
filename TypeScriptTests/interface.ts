export interface DatabaseConnection{

    connect():void 
    disconnect():void
    executeUpdate():void
}

class Mytest1 implements DatabaseConnection{
    connect():void {
        console.log("Connection is successful")
        
    }
    disconnect(): void {
        console.log("Connection is Off")
     
    }
    executeUpdate(): void {
        console.log("Row is updated")
    
    }
}

// function runtestcase1(){

//     new Mytest1().connect()
//     new Mytest1().executeUpdate
//     new Mytest1().disconnect
    

// }

//runtestcase()

