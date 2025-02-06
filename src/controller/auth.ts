import jwt from "jsonwebtoken";
import { ErrorMessages } from "../enum/errorMessages";
import { StatusCode } from "../enum/statusCode";

export class Authenticate {

    public static async authenticateRequest(req: any, res: any) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(StatusCode.UNAUTHORIZED).json({ success: false, status: StatusCode.UNAUTHORIZED,message: ErrorMessages.TOKENMISSING });
        }
        if (!token.startsWith('Bearer ')) {
            return res.status(StatusCode.UNAUTHORIZED).json({ success: false, status: StatusCode.UNAUTHORIZED,message: ErrorMessages.INVALIDTOKENFORMAT });
        }
        if (token.startsWith('Bearer ')) {
            let jwtToken = token.split(' ')[1];
            const secretKey: any = process.env.JWT_SECRET;
            jwt.verify(jwtToken, secretKey, (err: any, decoded: any) => {
                if (err) {
                    return res.status(StatusCode.UNAUTHORIZED).json({ success: false, status: StatusCode.UNAUTHORIZED,message: ErrorMessages.INVALIDTOKE });
                }
            });
        }
        return { success: true, status: StatusCode.SUCCESS,message: ErrorMessages.TOKENVALID };
    }
}