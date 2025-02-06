export enum ErrorMessages {
    BODYMISSING = 'Request body is missing',
    USERNAMEMISSING = 'Required field missing : username',
    INVALIDDATATYPE = 'Invalid data type for username field, Accepted data type is string',
    SERVERERROR = 'Internal server error',
    TOKENMISSING = 'Token is missing',
    INVALIDTOKENFORMAT = 'Invalid token format',
    INVALIDTOKE = 'Invalid token',
    TOKENVALID = 'Token is validated successfully',
    REQUIREDFIELDMISSSING = 'Required field missing',
    TASKNOTFOUND = 'Task not found with provided task id',
    DUPLICATETASKNAME = 'Task with same name already exist, please provide unique name'
}