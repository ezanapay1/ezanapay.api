import {sign, SignOptions, verify} from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

/**
 * generates JWT token for the given payload
 */

export function generateToken(payload: any, _options?: SignOptions): string {
    const privateKey = fs.readFileSync(path.resolve(__dirname, '../../private.key'), 'utf8');
    
    const signInOptions: SignOptions = {
        algorithm: 'RS256',
        expiresIn: '1h',
    }

    return sign(payload, privateKey, signInOptions);
}

/**
 * verifies JWT token
 * @param token
 * @param options
 * @returns {Promise<any>}
 * @constructor
 * @throws {Error} if token is invalid
 * @throws {Error} if token is expired
 */

export function verifyToken(token: string, options?: SignOptions): any {
    const publicKey = fs.readFileSync(path.resolve(__dirname, '../../public.key'), 'utf8');
    return verify(token, publicKey, options);
}

/**
 * generates JWT token for the given payload
 * @param payload
 * @param options
 * @returns {Promise<string>}
 * @constructor
 * @throws {Error} if token is invalid
 * @throws {Error} if token is expired
 */

export async function GenerateToken(payload: any, options?: SignOptions): Promise<string> {
    return generateToken(payload, options);
}
