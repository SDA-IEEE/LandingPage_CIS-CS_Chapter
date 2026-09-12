import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Security and Hardening verification', () => {
    it('should have a vercel.json file configured for deployment hardening', () => {
        const configPath = path.resolve(__dirname, '../vercel.json');
        expect(fs.existsSync(configPath)).toBe(true);
    });

    it('should configure required security headers in vercel.json', () => {
        const configPath = path.resolve(__dirname, '../vercel.json');
        const content = fs.readFileSync(configPath, 'utf-8');
        const vercelConfig = JSON.parse(content);

        const headers = vercelConfig.headers[0].headers.map((h: { key: string }) => h.key);

        expect(headers).toContain('Strict-Transport-Security');
        expect(headers).toContain('X-Frame-Options');
        expect(headers).toContain('X-Content-Type-Options');
        expect(headers).toContain('Referrer-Policy');
        expect(headers).toContain('Permissions-Policy');
    });
});
