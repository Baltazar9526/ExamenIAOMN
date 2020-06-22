import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
export default () => {
	return{
		verify: (req: Request, res: Response, next: NextFunction) => {
			const bearerHeader = req.headers['authorization'];
			if(typeof bearerHeader !== 'undefined'){
				const bearer = bearerHeader.split(' ');
				const bearerToken = bearer[1];
				jwt.verify(bearerToken, 's3cr3tK3yword', (err: any, tokenDecoded: any) => {
					if(err){
						return res.status(403).json({
							ok: false,
							msg: 'Lo Sentimos usted no tiene acceso, Favor de verificar su token'
						})
					}
					req.body.authUser = tokenDecoded;
					next();
				});
			}else{
				return res.status(401).json({
					ok: false,
					msg: 'Lo sentimos su acceso es restingido, requiere iniciar sesion para acceder'
				})
			}
		}
	}
}