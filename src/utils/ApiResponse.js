class ApiResponse {
    constructor(
        statusCode , 
        data , 
        message = "Success"
    ){
        this.success= statusCode
        this.statusCode = statusCode
        this.data = data
        this.message = message
    }
}

export { ApiResponse};